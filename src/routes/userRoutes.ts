import { Router, Request, Response } from "express";
import User, { IUser } from "../models/users/User";

const router = Router();

// Create a new user
router.post("/users", async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user: IUser = new User({ name, email });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
