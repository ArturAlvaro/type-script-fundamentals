import { Router } from 'express';
import BooksController from '../controllers/book.controller';

const router = Router();

const booksController = new BooksController();

router.get('/', booksController.getAll);

router.get('/books/:id', booksController.getById);

export default router;
