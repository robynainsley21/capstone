import { connection as db } from "../config/index.js";
import { createToken } from "../middleware/AuthenticateUser.js";
import { hash, compare } from "bcrypt";

class Users {
  fetchUsers(req, res) {
    try {
      const strQry = `
                SELECT * FROM Users;
            `;

      db.query(strQry, (error, results) => {
        if (error) throw new Error(`Unable to fetch users: ${error.message}`);
        res.json({
          status: res.statusCode,
          results,
        });
      });
    } catch (error) {
      res.json({
        status: 404,
        message: `Error with fetching all users: ${error.message}`,
      });
    }
  }
  fetchUser(req, res) {
    try {
      const strQry = `
            SELECT * FROM Users
            WHERE userID = ${req.params.id};
        `;

      db.query(strQry, (error, results) => {
        if (error) throw new Error(`Specified user not found: ${error}`);

        res.json({
          status: res.statusCode,
          results,
        });
      });
    } catch (error) {
      res.json({
        status: 404,
        message: `Error with fetching user: ${error.message}`,
      });
    }
  }

  async registerUser(req, res) {
    try {
      let data = req.body;
      data.userPass = await hash(data.userPass, 12);

      let user = {
        emailAdd: data.emailAdd,
        userPass: data.userPass,
      };

      const strQry = `
            INSERT INTO Users
            SET ?;
        `;

      db.query(strQry, [data], (error) => {
        if (error) {
          res.json({
            status: res.statusCode,
            message: `This email has already been taken: ${error}`,
          });
        } else {
          const token = createToken(user);
          res.json({
            token,
            message: `Your account has been created.`,
          });
        }
      });
    } catch (error) {
      res.json({
        status: 404,
        message: `Error with registering user: ${error.message}`,
      });
    }
  }
  async updateUser(req, res) {
    try {
      let data = req.body;
      if (data.userPass) {
        data.userPass = await hash(data.userPass, 12);
      }
      const strQry = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id};
      `;

      db.query(strQry, [data], (error) => {
        if (error) throw new Error(`Unable to update user: ${error}`);
        res.json({
          status: res.statusCode,
          message: "User updated successfully",
        });
      });
    } catch (error) {
      res.json({ status: 404, message: `Error with updating user: ${error.message}` });
    }
  }
  deleteUser(req, res) {
    try {
      const strQry = `
            DELETE FROM Users
            WHERE userID = ${req.params.id};
        `;

      db.query(strQry, (error) => {
        if (error) throw new Error(`Unable to delete user: ${error}`);
        res.json({
          status: res.statusCode,
          message: "User deleted successfully",
        });
      });
    } catch (error) {
      res.json({ status: 404, message: `Error with deleting user: ${error.message}` });
    }
  }
  async loginUser(req, res) {
    try {
      const { emailAdd, userPass } = req.body;
      const strQry = `
            SELECT *
            FROM Users
            WHERE emailAdd = '${emailAdd}';
        `;
      db.query(strQry, async (error, results) => {
        if (error) throw new Error(`Unable to login: ${error}`);
        if (!results?.length) {
          res.json({
            status: 401,
            message: "You provided the wrong email.",
          });
        } else {
          const isValidPass = await compare(userPass, results[0].userPass);
          if (isValidPass) {
            const token = createToken({ emailAdd, userPass });
            res.json({
              status: res.statusCode,
              token,
              result: results[0],
              message: `You have successfully logged in.`,
            });
          } else {
            res.json({
              status: 401,
              message: `Invalid password or you have not registered.`,
            });
          }
        }
      });
    } catch (error) {
        res.json({
            status: 401,
            message: `Error with login: ${error.message}`,
          });
    }
  }
}

export {
  Users
}
