import * as UserModel from '../models/user.model';
import * as PostModel from '../models/post.model';
import * as ProfilModel from '../models/profil.model';
import { HttpException, HttpStatus } from '../errors/HttpException.error';

export const findAllPost = async ({ params: { id } }, response, next) => {
    response
     .status(200)
     .json({
         data: {
             posts: await PostModel.findAllByUser(Number(id)),
         },
     });
}

export const findProfile = async ({ params: { id } }, response, next) => {
    response
     .status(200)
     .json({
         data: {
             profile: await ProfilModel.findProfile(Number(id)),
         },
     });
}

export const deleteOne = async ({ params: { id } }, response) => {
    await UserModel.deleteOne(Number(id));

    response
     .status(204)
     .end();
}

export const UpdateProfile = async ({ params: { id }, body }, response) =>{
    const profile = await ProfilModel.updateOne(Number(id), body);

    response
      .status(200)
      .json({ data: { profile } });
}