import { Router } from 'express';
import * as UserController from '../../controllers/user.controller';

const api = Router();

api.post('/:id/posts', UserController.findAllPost);
api.post('/:id/profile', UserController.findProfile);
api.delete('/:id', UserController.deleteOne);
api.put('/:id/profile', UserController.UpdateProfile);


export default api;