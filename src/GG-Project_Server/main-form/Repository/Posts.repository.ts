//import { CustomRepository } from 'src/Custom/typeorm-ex.decorator';
import { CustomRepository } from 'src/GG-Project_Server/Custom/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { WSPost } from '../Entity/Posts.entity';

@CustomRepository(WSPost)
export class PostRepository extends Repository<WSPost> {
  async getPost(): Promise<WSPost[]> {
    return;
  }
  async getAllPost():Promise<WSPost[]>{
    const allPostList=await this.find();

    return allPostList;
  }
  async getAllImg():Promise<any>{
    const qb = await this
    .createQueryBuilder("WSPost")
    .select("WSPost.imgName","WSPost_imgName")
    const WPS=(await qb.getMany());
    let allimg:string[]=[]
   for(var i in WPS){
    allimg.push(`https://wsggbucket.s3.ap-northeast-2.amazonaws.com/${WPS[i].imgName}`)
    //https://wsggbucket.s3.ap-northeast-2.amazonaws.com/bori.jpg0
      
    }
    return allimg;
}

  async createWSPost(createWSPost):Promise<WSPost>{
    const {title,imgName,description}=createWSPost
    const wspost=this.create({
      title,
      imgName,
      description,
    })
    await this.save(wspost);

    return wspost;
  }
}
