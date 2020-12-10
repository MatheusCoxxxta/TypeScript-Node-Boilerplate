import express from "express";
import UserController from "./controllers/UserController";

const userController = new UserController();

const routes = express.Router();

routes.get("/", (request, response) => {
  response.send({ message: "Server online" });
});

routes.get("/user", userController.index);
routes.get("/user/:id", userController.show);
routes.post("/user", userController.store);
routes.put("/user/:id", userController.update);
routes.delete("/user/:id", userController.delete);

export default routes;
