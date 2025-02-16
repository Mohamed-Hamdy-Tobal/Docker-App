import express from "express";
import {
  getAllBooks,
  getSingleBook,
  createBook,
} from "../controllers/books.controller.js";

const router = express.Router();

router.route("/").get(getAllBooks).post(createBook);
router.route("/:id").get(getSingleBook);

export const bookRouter = router;
