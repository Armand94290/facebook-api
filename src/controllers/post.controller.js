import * as PostModel from '../models/post.model';
import { HttpException, HttpStatus } from '../errors/HttpException.error';

export const CreatePostDto = async ({ body, user }, response) => {
    const { message } = body;
    const post = await PostModel.createOne({
        message,
        authorId: user.id,
    });

    response.status(201).json({data: { post }});
}

export const findById = async (request, response) => {
    const id = Number(request.params.id);
    const post = await PostModel.findById(id);

    response.json({ post });
}

export const findAll = async (response, response) => {
    response
      .status(200)
      .json({
          data: {
              posts: await PostModel.findAll(),
          },
      });
}

export const deleteOne = async ({ params: { id } }, response) => {
    await PostModel.deleteOne(Number(id));

    response.status(204).end();
}

export const UpdatePostDto = async ({ params: { id }, body }, response) => {
    const post = await PostModel.updateOne(Number(id), body);

    response.status(200).json({ data : { post }});
}

