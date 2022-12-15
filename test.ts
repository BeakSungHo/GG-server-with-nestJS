// // const axios = require("axios");
// // const cheerio = require("cheerio");
// const axios = require("axios");
// const cheerio = require("cheerio");
// //import axios from "axios";
// const getHtml = async () => {
//   try {
//     return await axios.get("https://ent.wsu.ac.kr/page/index.jsp?code=einfo0501");
//   } catch (error) {
//     console.error(error);
//   }
// };
// //#con > article > table
// // getHtml()
// //   .then(html => {
// //     let ulList = [];
// //     const $ = cheerio.load(html.data);
// //    // const $bodyList = $("ul").children("li")
// //    const $bodyList=$("div.con").children("article")
// //     $bodyList.each(function(i, elem) {
// //       ulList[i] = {
        
// //           title: $(this).find('div').text(),
// //           url: 'search.naver.com/search.naver'+$(this).find('div.list_title a').attr('href'),
// //           image_url: $(this).find('div.list_thumb a img').attr('src'),
// //           image_alt: $(this).find('div.list_thumb a img').attr('alt'),
// //       };
// //     });

// //     const data = ulList.filter(n => n.title);
// //     return data;
// //   })
// getHtml()
//   .then(html => {
//     let ulList = [];
//     const $ = cheerio.load(html.data);
//    // const $bodyList = $("ul").children("li")
//    const $bodyList=$("table.tableSkin")
//     $bodyList.each(function(i, elem) {
//       ulList[i] = {
        
//           title: $(this).find('tr').text(),
//       };
//     });

//     const data = ulList.filter(n => n.title);
//     //console.log("ㅇㅅㅇ"+data[0].title);
    
//     return data[0].title.replace(/\t/gi,'');
//   })
//   // .then(res => {  //호출될때의 결과 를보여줌 (.then)
// 	// console.log("~~"+res[0].title.replace('\\t',''))
//   // });
//   //res는 result의 약자로 자주 씌인다고 한다.
//   .then(res=>{
//     const WSphon=String(res)
//     const WSphons=WSphon.split('\n')
//     console.log (WSphons);
   
//   })

// const puppeteer = require('puppeteer');

// (async() => {
//   // 브라우저를 실행한다.
//   // 옵션으로 headless모드를 끌 수 있다.
//   const browser = await puppeteer.launch({
//     headless: false
//   });

//   // 새로운 페이지를 연다.
//   const page = await browser.newPage();
//   // 페이지의 크기를 설정한다.
//   await page.setViewport({
//     width: 1366,
//     height: 768
//   });
//   // "https://www.goodchoice.kr/product/search/2" URL에 접속한다. (여기어때 호텔 페이지)
//   await page.goto('https://ent.wsu.ac.kr/page/index.jsp?code=einfo0501');
// })();

const axios = require("axios");
const cheerio = require("cheerio");

const getContactInformation=async()=>{
  try{
   console.log("ㅇㅅㅇ1");
    const getHtml = await axios.get("https://ent.wsu.ac.kr/page/index.jsp?code=einfo0501");
    console.log("ㅇㅅㅇ2");
    let ulList = [];
    console.log("ㅇㅅㅇ3");
    const $ = cheerio.load(getHtml.data);
    console.log("ㅇㅅㅇ4");
   // const $bodyList = $("ul").children("li")
   const $bodyList=$("table.tableSkin")
   console.log("ㅇㅅㅇ5");
    $bodyList.each(function(i, elem) {
      ulList[i] = {
        
          title: $(this).find('tr').text(),
      };
    });

    const data = ulList.filter(n => n.title);
   
    console.log("ㅇㅅㅇ"+data[0].title);
    data[0].title.replace(/\t/gi,'');
    return 'aa'

  }catch(error){
    console.error("aaaaaa"+error);
  }
  
}
getContactInformation()

