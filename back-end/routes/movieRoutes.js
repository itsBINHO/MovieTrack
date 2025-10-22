import express from 'express';
import verifyToken from '../middlewares/authMiddleware.js';
import { addMovie, getUserMovies, editMovie, removeMovie } from '../controllers/movieController.js';

const router = express.Router();

router.post('/', verifyToken, addMovie);
router.get('/', verifyToken, getUserMovies);
router.put('/:id', verifyToken, editMovie);
router.delete('/:id', verifyToken, removeMovie);

export default router;