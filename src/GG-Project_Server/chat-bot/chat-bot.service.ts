import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { WSCrawlingContactStudentCafeteria } from './pasing/WSCrawling-Contact-StudentCafeteria';
import { WSPasingContactInformation} from './pasing/WSPasing-Contact-Information';
import cheerio from "cheerio";
import {spawn} from "child_process";
import express from 'express';
//const ls = spawn('ls', ['-lh', '/usr']);



@Injectable()
export class ChatBotService {
        // controller에서 받은 작업의 처리를 받는 곳
      
        //전화번호를 크롤링 처리하는곳 폐기예정
        getContactInformation(): Promise<string[]>{
                return WSPasingContactInformation()
        }
        //학생식단의 정보를 받아오는곳
        getStudentCafeteria(){
                return WSCrawlingContactStudentCafeteria()
        }
        getSearch(str:any):Promise<string>{
                const app =express()
                const port = process.env.PORT||4000;
                app.get('/',(req,res)=>{
                        res.send('ok')
                })





                
                const temperatures = [];
                const [components, setComponents] = '';
                const result = spawn('py', ['test.py','카헤얌','20']);
       //         on(event: 'end', listener: () => void): this;
                
                //result.stdout.on('data', function(data) )
                result.stdout.on('data', (data)=>{
                        console.log(data);
                } )
                result.stdout.on
              
                result.stdin.on('end',function(data){
                        temperatures.push(data);

                })
                
                result.stderr.on('data', (data)=> {
                        console.log(data);
                        
                });
     
                result.off
                
                return;
                
        }

        async createMarkerInfo(str):Promise<string>{
                const {chat}=str
                console.log("들어온값 : "+chat);
             let array= chat.replace(/학과/,'#WS!#').split(/#/).filter((element)=>{
                return element !== undefined && element !==null && element =='WS!'})
                console.log("?"+array[0]);

                if(array[0]==undefined||array[0]==' '){
                        console.log('힝');
                        array= chat.replace(/시발/,'#SB!#').split(/#/).filter((element)=>{
                                return element !== undefined && element !==null || element =='SB!'})
                                console.log("0"+array[0]);
                if(array[0]==undefined ||array[0]==' '){
                        array= chat.replace(/백성호/,'#BSH!#').split(/#/).filter((element)=>{
                                return element !== undefined && element !==null || element =='BSH!'})  
                                console.log("1"+array[0]);
                if(array[0]==undefined||array[0]==' '){
                        array= chat.replace(/학식/,'#HS!#').split(/#/).filter((element)=>{
                                return element !== undefined && element !==null|| element =='HS!'})                      
                                console.log("2"+array[0]);
                if(array[0]==undefined||array[0]==' '){
                        array= chat.replace(/욕/,'#UK!#').split(/#/).filter((element)=>{
                                return element !== undefined && element !==null || element =='UK!'})                      
                                console.log("3"+array[0]);
                if(array[0]==undefined||array[0]==' '){
                        array= chat.replace(/장학/,'#JH!#').split(/#/).filter((element)=>{
                                return element !== undefined && element !==null || element =='JH!'})                                                         
                                console.log("4"+array[0]);
                if(array[0]==undefined||array[0]==' '){
                        array= chat.replace(/대머리/,'#DMR!#').split(/#/).filter((element)=>{
                                return element !== undefined && element !==null || element =='DMR!'})                                                         
                                console.log("5"+array[0]);
                if(array[0]==undefined||array[0]==' '){
                        array= chat.replace(/졸업/,'#JU!#').split(/#/).filter((element)=>{
                                return element !== undefined && element !==null || element =='JU!'})                                                         
                                console.log("5"+array[0]);
                if(array[0]==undefined||array[0]==' '){
                        array= chat.replace(/염원/,'#YW!#').split(/#/).filter((element)=>{
                                return element !== undefined && element !==null || element =='YW!'})                                                         
                                console.log("5"+array[0]);
                if(array[0]==undefined||array[0]==' '){
                        array= chat.replace(/비트코인/,'#BTC!#').split(/#/).filter((element)=>{
                                return element !== undefined && element !==null || element =='BTC!'})                                                         
                                console.log("5"+array[0]);     
                if(array[0]==undefined||array[0]==' '){
                        array= chat.replace(/농담/,'#ND!#').split(/#/).filter((element)=>{
                                return element !== undefined && element !==null || element =='ND!'})                                                         
                                console.log("5"+array[0]);
                if(array[0]==undefined||array[0]==' '){
                        array= chat.replace(/커피/,'#CP!#').split(/#/).filter((element)=>{
                                return element !== undefined && element !==null || element =='CP!'})                                                         
                                console.log("5"+array[0]);
                                
                        
                        }}}}}}}}}}}
                

                console.log("값은 무엇인가?"+ array[0]);
                
                switch(array[0]){
                        case 'WS!':
                                return '학과사무실은 저쪽이요'
                        case 'SB!':
                                return '옥상으로 당장 따라와 슈발'
                        case 'BSH!':
                                return '그는 신이지요 16절 마태복음 19:26 \“예수께서 그들을 보시며 이르시되 사람으로는 할 수 없으나 하나님으로서는 다 하실 수 있느니라\”'
                        case 'HS!':
                                return '오늘의 점심은 치즈 제육덮밥 입니다.'
                        case 'UK!':
                                return '쌍스런 표현이니 \'뒤져라\''
                        case 'JH!':
                                return '장학금 존나 받고싶은뎅 우송지수가 없당'
                        case 'DMR!':
                                return "그런소리하는 당신이 대머리입니다."
                        case 'JU!':
                                return "당신은 졸업할수 없습니다."
                        case 'YW!':
                                return "마루봇 찰리 새봇 몰리 Let's go 코딩이나 하십쇼"
                        case 'BTC!':
                                return "비트는 정답입니다 당장 하십쇼 "
                        case 'ND!':
                                return "세상에서 가장 쉬운 숫자는? 190,000  "
                        case 'CP!':
                                return "커피는역시 아메리카노  "
                                                
                        default :
                                return '그런거 모르는데용?'

                }
                //return ;
            }

    
        
}

function useState<T>(): [any, any] {
        throw new Error('Function not implemented.');
}

