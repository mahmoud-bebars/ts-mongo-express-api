import { getAllUsers, deleteUser, updateUser } from "../controllers/users";
import express from "express";
import { isAuthenticated, isOwner } from "../middlewares";
export default (router: express.Router) => {
  router.get("/api/users", isAuthenticated, getAllUsers);
  router.delete("/api/users/delete/:id", isAuthenticated, isOwner, deleteUser);
  router.patch("/api/users/update/:id", isAuthenticated, isOwner, updateUser);
};
