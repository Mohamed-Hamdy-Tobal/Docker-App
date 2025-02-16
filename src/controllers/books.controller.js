import BooksModel from "../models/books.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await BooksModel.find();
    console.log("BOOKS ARE : ", books);
    res.status(200).json({ success: true, books });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

export const createBook = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    console.log("BOOKS create is  : ", req.body);

    if (!name || !price || !description) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newBook = new BooksModel({ name, price, description });
    await newBook.save();

    res.status(201).json({ success: true, book: newBook });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// ✅ Get a Single Book by ID
export const getSingleBook = async (req, res) => {
  try {
    const book = await BooksModel.findById(req.params.id);

    console.log("Single BOOK is : ", book);

    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    res.status(200).json({ success: true, book });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid Book ID", error });
  }
};
