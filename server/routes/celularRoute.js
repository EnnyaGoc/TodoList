import express from "express";
import { create, deleteCelular, getAll, getOne, update } from "../controller/celularController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteCelular);

export default route;