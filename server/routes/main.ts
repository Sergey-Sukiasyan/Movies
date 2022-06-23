import express from 'express';
import MainController from '../app/Controllers/MainController';
const router = express.Router();

router.get('/index', MainController.index);

export { router as main }