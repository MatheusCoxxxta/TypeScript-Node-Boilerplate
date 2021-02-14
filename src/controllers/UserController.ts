import { Request, Response } from "express";
import User from "../models/User";
import UserType from "../types";

class UserController {
  async index(req: Request, res: Response) {
    try {
      const users = await User.query().select("*");

      return res.status(200).send(users);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await User.query().where("id", id);

      return res.send(user);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  async store(req: Request, res: Response) {
    const data = req.body;

    try {
      const user = await User.query().insert(data);

      return res.status(200).send(user);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    try {
      const user_id = await User.query().where("id", id).update(data);

      return res.status(200).send({
        id: user_id,
        ...data,
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await User.query().where("id", id).del();
      if (user !== 0) return res.status(200).send({ message: "Success" });
      else return res.status(404).send({ message: "User not exists" });
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}

export default UserController;
