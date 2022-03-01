import jwt from 'jsonwebtoken';
import * as UserModel from '../models/user.model';
import { HttpException, HttpStatus } from '../errors/HttpException.error';

export const LoginDTO = async (request, response) => {
    const { email, password } = request.body;

    const user = await UserModel.findByCredentials({ email, password }, { id: true, email: true });
    if (!user) {
        throw new HttpException('Unaunthorized,', HttpStatus.UNAUTHORIZED);
    }
    const token = jwt.sign({ id: user.id }, 'SECRET');

    response.json({ token, user });
}


export const RegisterDTO = async (request, response) => {
    const { email, password } = request.body;
    const user = await UserModel.createOne({ email, password });

    response.status(201).json({ data: { user } });
}