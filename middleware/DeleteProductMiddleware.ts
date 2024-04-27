import express from 'express';
const router = express.Router();
import deleteproduct from "../controllers/DeleteProductConstroller";

router.delete('/', deleteproduct.deleteProduct);

export =router;