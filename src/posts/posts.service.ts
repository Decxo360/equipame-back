import { Injectable} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ){}

  async create(createPostDto: CreatePostDto) {
    const post = await this.postRepository.create(createPostDto);
    return await this.postRepository.save(post);
  }

  async findAll() {
    return await this.postRepository.find();
  }

  async findOne(id: number) {
    return await this.postRepository.findOneBy({id});
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.postRepository.update(id,updatePostDto);
  }

  async remove(id: number) {
    return await this.postRepository.softDelete({id});
  }
}
