import express from 'express';
import MoviesController from '../app/Controller/MoviesController';
const router = express.Router();

router.get('/index', MoviesController.getAllMovies);

export { router as movies }