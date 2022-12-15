"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const typeorm_ex_decorator_1 = require("../../Custom/typeorm-ex.decorator");
const typeorm_1 = require("typeorm");
const Posts_entity_1 = require("../Entity/Posts.entity");
let PostRepository = class PostRepository extends typeorm_1.Repository {
    async getPost() {
        return;
    }
    async getAllPost() {
        const allPostList = await this.find();
        for (var i in allPostList) {
            allPostList[i].imgName = `https://wsggbucket.s3.ap-northeast-2.amazonaws.com/${allPostList[i].imgName}`;
        }
        return allPostList;
    }
    async getAllImg() {
        const qb = await this
            .createQueryBuilder("WSPost")
            .select("WSPost.imgName", "WSPost_imgName");
        const WPS = (await qb.getMany());
        let allimg = [];
        for (var i in WPS) {
            allimg.push(`https://wsggbucket.s3.ap-northeast-2.amazonaws.com/${WPS[i].imgName}`);
        }
        return allimg;
    }
    async createWSPost(createWSPost) {
        const { title, imgName, description } = createWSPost;
        const wspost = this.create({
            title,
            imgName,
            description,
        });
        await this.save(wspost);
        return wspost;
    }
    testF() {
        return;
    }
};
PostRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(Posts_entity_1.WSPost)
], PostRepository);
exports.PostRepository = PostRepository;
//# sourceMappingURL=Posts.repository.js.map