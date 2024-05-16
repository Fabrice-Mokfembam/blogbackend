import express from 'express';
import { UserController } from '../controllers/userController.js';

const userRouter = express.Router();

// Create a new user
userRouter.post('/create', UserController.createUser);  

// Find all users
userRouter.get('/findAll', UserController.findAllUsers); 

// Update a user by ID 
userRouter.put('/:userId', UserController.updateUserById); 

// Delete a user by ID
userRouter.delete('/:userId', UserController.deleteUserById); 

export { userRouter };
