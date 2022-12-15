import { Injectable } from '@nestjs/common';
import { WSPost } from './Entity/Posts.entity';
import { PostRepository } from './Repository/Posts.repository';
// @PrimaryGeneratedColumn()    타입
// id: number; title: string; imgName: string; description: string;
@Injectable()
export class MainFormService {
  constructor(private postRepository: PostRepository) {}//저장소 작업을 위한 싱글톤
  getPost(): Promise<WSPost[]> {
    return;
  }
  getAllPost(): Promise<WSPost[]>{
    return this.postRepository.getAllPost();
  }
  getAllImg():Promise<string[]>{
    return this.postRepository.getAllImg();
  }

  createWSPost(createWSPost:any):Promise<WSPost>{
    return this.postRepository.createWSPost(createWSPost);
  }
}
