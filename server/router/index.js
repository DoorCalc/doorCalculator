import express from 'express';
import {UserController} from '../controllers/user-controller.js';

const router = express.Router();
const userController = new UserController();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);

export {router};
