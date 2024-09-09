import { connection as db } from "../config/index.js";

class Cart {
  /**fetching all bookings */
  fetchCart(req, res) {
    try {
      const strQry = `
            SELECT o.* 
            FROM Users u
            INNER JOIN Orders o
            USING(userID)
            INNER JOIN Trainers t
            USING(trainerID) 
            `;

      db.query(strQry, (error, results) => {
        if (error) {
          return res.status(500).json({
            status: 500,
            message: `Unable to fetch cart: ${error.message}`,
          });
        }
        res.json({
          status: 200,
          results,
        });
      });
    } catch (error) {
      res.json({
        status: 404,
        message: `Error with fetching cart: ${error.message}`,
      });
    }
  }

  /**fetching a booking pertaining to a user */
  fetchUserCart(req, res) {
    try {
      const strQry = `
        SELECT o.*
        FROM Orders o
        INNER JOIN Users u ON o.userID = ${req.params.id}
        INNER JOIN Trainers t ON o.trainerID = t.trainerID
        WHERE u.userID = ${req.params.id}
        `;

      db.query(strQry, (error, results) => {
        if (error) {
          return res.status(500).json({
            status: 500,
            message: `Unable to fetch user cart: ${error.message}`,
          });
        }
        res.json({
          status: 200,
          results,
        });
      });
    } catch (error) {
      res.json({
        status: 404,
        message: `Error with fetching user cart: ${error.message}`,
      });
    }
  }

  addToCart(req, res) {
    try {
      const strQry = `
        INSERT INTO Orders
        SET ?;
        `;

      db.query(strQry, [req.body], (error) => {
        if (error)
          throw new Error(`Unable to add item to cart: ${error.message}`);

        res.json({
          status: res.statusCode,
          message: "Item added to cart successfully",
        });
      });
    } catch (error) {
      res.json({
        status: 400,
        message: `Error adding item to cart: ${error.message}`,
      });
    }
  }
  deleteCartItem(req, res) {
    try {
      const strQry = `
            DELETE FROM Cart
            WHERE cartID = ${req.params.id}
            AND userID = ${req.params.userID};
            `;

      db.query(strQry, (error) => {
        if (error) throw new Error(`Unable to delete cart: ${error.message}`);
        res.json({
          status: res.statusCode,
          message: "Item deleted successfully",
        });
      });
    } catch (error) {
      res.json({
        status: 404,
        message: `Error with deleting item: ${error.message}`,
      });
    }
  }
}

export { Cart };
