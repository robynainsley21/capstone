import express from "express";
import { users } from "../model/index.js";
import { cart } from "../model/index.js";
import bodyParser from "body-parser";
import { verifyToken } from "../middleware/AuthenticateUser.js";

const userRouter = express.Router();

userRouter.use(bodyParser.json());

/**for users */
userRouter.get("/", (req, res) => {
  users.fetchUsers(req, res);
});

userRouter.get("/:id", verifyToken, (req, res) => {
  users.fetchUser(req, res);
});

userRouter.post("/register", (req, res) => {
  users.registerUser(req, res);
});

userRouter.patch("/update/:id", (req, res) => {
  users.updateUser(req, res);
});

userRouter.delete("/delete/:id", (req, res) => {
  users.deleteUser(req, res);
});

userRouter.post("/login", (req, res) => {
  users.loginUser(req, res);
});
/**for users */

/**for cart */
userRouter.get("/cart/:id", verifyToken, (req, res) => {
  cart.fetchCart(req, res);
});

userRouter.get("/cart/:userID/:id", verifyToken, (req, res) => {
  cart.fetchUserCart(req, res);
});

userRouter.post("/addToCart", verifyToken, (req, res) => {
  cart.addToCart(req, res);
});

userRouter.delete("/deleteCartItem/:id", verifyToken, (req, res) => {
  cart.deleteCartItem(req, res);
});
/**for cart */

export { userRouter };
