import { User } from '../models/userModel.js';
import httpStatus from 'http-status';

const UserController = {
  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      user ? res.status(httpStatus.CREATED).json(user) : res.status(httpStatus.INTERNAL_SERVER_ERROR);
    } catch (error) {
      console.error(error); 
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Error creating user'); 
    }
  },

  findAllUsers: async (req, res) => {
    try {
      const users = await User.find({});
      users ? res.status(httpStatus.OK).json(users) : res.status(httpStatus.NOT_FOUND).send('No users found'); 
    } catch (error) {
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Error fetching users');
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const { userId } = req.params; 
      const deletedUser = await User.findByIdAndDelete(userId);

      if (!deletedUser) {
        return res.status(httpStatus.NOT_FOUND).send('User not found');
      }

      res.status(httpStatus.OK).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Error deleting user');
    }
  },

  updateUserById: async (req, res) => {
    try {
      const { userId } = req.params;
      const updateData = req.body; 

      const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true }); 

      if (!updatedUser) {
        return res.status(httpStatus.NOT_FOUND).send('User not found');
      }

      res.status(httpStatus.OK).json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Error updating user');
    }
  },
};

export { UserController };
