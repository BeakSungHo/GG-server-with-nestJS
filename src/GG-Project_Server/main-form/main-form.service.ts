import { Injectable } from '@nestjs/common';
import { WSPasingContactInformation } from 'src/GG-Project_Server/main-form/WSPasing-Contact-Information';
import { WSPost } from './Entity/Posts.entity';
import { PostRepository } from './Repository/Posts.repository';
// @PrimaryGeneratedColumn()    타입
// id: number; title: string; imgName: string; description: string;
@Injectable()
export class MainFormService {
  constructor(private postRepository: PostRepository) {}//저장소 작업을 위한 싱글톤
  getPost(): Promise<WSPost[]> {
    return ;
  }
  getAllPost(): Promise<WSPost[]>{
    return this.postRepository.getAllPost();
  }
  getAllImg():Promise<string[]>{
    return this.postRepository.getAllImg();
  }
  get심심이(){
    return WSPasingContactInformation();
  }

  createWSPost(createWSPost:any):Promise<WSPost>{
    return this.postRepository.createWSPost(createWSPost);
  }
}
