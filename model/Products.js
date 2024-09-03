import { connection as db } from "../config/index.js";
import { createToken } from "../middleware/AuthenticateUser.js";
import { hash, compare } from "bcrypt";

class Trainers {
  fetchTrainers(req, res) {
    try {
      const strQry = `
        SELECT * FROM Trainers;
        `;
      db.query(strQry, (error, results) => {
        if (error)
          throw new Error(`Unable to fetch trainers: ${error.message}`);
        res.json({
          status: res.statusCode,
          results,
        });
      });
    } catch (error) {
      res.json({
        status: 404,
        message: `Error with fetching trainers: ${error.message}`,
      });
    }
  }
  fetchTrainer(req, res) {
    try {
      const strQry = `
        SELECT * 
        FROM Trainers
        WHERE trainerID = ?;
      `;
      db.query(strQry, [req.params.id], (error, results) => {
        if (error) throw new Error(error.message);
        res.json({
          status: res.statusCode,
          result: results[0],
        });
      });
    } catch (error) {
      res.json({
        status: 404,
        message: `Error with fetching trainer: ${error.message}`,
      });
    }
  }
  async addTrainer(req, res) {
    try {
      const hashedPassword = await hash(req.body.trainerPass, 10);

      const strQry = `
        INSERT INTO Trainers (trainerID, trainerName, trainerSurname, specialties, emailAdd, trainerPass)
        VALUES (?);        
        `;

        const values = [
          req.body.trainerName,
          req.body.trainerSurname,
          req.body.specialties,
          req.body.emailAdd,
          hashedPassword,
        ];

      db.query(strQry, values, (error) => {
        if (error) throw new Error(`Unable to add trainer: ${error.message}`);
        res.json({
          status: res.statusCode,
          message: "Trainer added successfully",
        });
      });
    } catch (error) {
      res.json({
        status: 404,
        message: `Error with adding trainer: ${error.message}`,
      });
    }
  }
  updateTrainer(req, res) {
    try {
      const strQry = `
        UPDATE Trainers
        SET ?
        WHERE trainerID = ${req.params.id};
        `;

      db.query(strQry, [req.body], (error) => {
        if (error)
          throw new Error(`Unable to update trainer: ${error.message}`);
        res.json({
          status: res.statusCode,
          message: "Trainer updated successfully",
        });
      });
    } catch (error) {
      res.json({
        status: 404,
        message: `Error with updating trainer: ${error.message}`,
      });
    }
  }
  deleteTrainer(req, res) {
    try {
      const strQry = `
        DELETE FROM Trainers
        WHERE trainerID = ${req.params.id};
        `;

      db.query(strQry, (error) => {
        if (error)
          throw new Error(`Unable to delete trainer: ${error.message}`);
        res.json({
          status: res.statusCode,
          message: "Trainer deleted successfully",
        });
      });
    } catch (error) {
      res.json({
        status: 404,
        message: `Error with deleting trainer: ${error.message}`,
      });
    }
  }
}


export { Trainers };