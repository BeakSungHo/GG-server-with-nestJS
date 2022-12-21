//const axios = require("axios");
//https://www.wsi.ac.kr/page/meal_list.jsp#self

import { find } from "domutils";
import { getFileInfo } from "prettier";

//const cheerio = require("cheerio");
const axios = require("axios");
const cheerio = require("cheerio");

  function decodeHtmlEntity(str){ 
   var textarea = document.createElement("textarea");  
   textarea.innerHTML = str;
  var result = textarea.value;
   textarea.parentNode.removeChild(textarea); 
  return result;  
 }
 
class alldata{
  학생식당서캠: string[]
  학생식당동캠:string[]
  기숙사서캠:string[]
}

export const WSCrawlingContactStudentCafeteria=async() =>{
  try{
    const getHtml = await axios.get("https://www.wsi.ac.kr/page/meal_list.jsp#self");
    let ulList = [];
    const $ = cheerio.load(getHtml.data,{xmlMode:true});

    // const $bodyList = $("ul").children("li")
    
   const $bodyList=$("#tabMenu>div > div")
    $bodyList.each(function(i, elem) {
      ulList[i] = {
        //속성 : $(this).find('').text(),
        //#tabMenu > div > div:nth-child(1) > div > table > thead > tr" 학생식당서켐 속성위치
        
        unilunch: $(this).find('table').text(),
        br: $(this).find('table > tbody > tr > td > div').html(),
        //"#tabMenu > div > div:nth-child(1) > div > table > tbody > tr > td > div" 학생식당서켐
        
        //#tabMenu > div > div:nth-child(2) > div > table > tbody > tr > td > div" 학생식당 동켐

      };
    })

    const data = ulList.filter(n => n.unilunch);
    const data2 = data[2].unilunch.replace(/\t/gi,'');//0~3
    const data3 = data2.replace(/\r/gi,'').split(/\n/).filter((element)=>{
      return element !== undefined && element !==null && element !==''})

    const br = ulList.filter(n => n.br);
    const br2 = br[0].br.replace(/\t/gi,'');//0~3
    const br3 = br2.replace(/\r/gi,'')
   // const br4 = br3.replace(/<br\/>/gi,'')
    const br5 = br3.replace(/ \/ /gi,'')
    const br6 = br5.replace(/\*/gi,'').split(/;/).filter((element)=>{
      return element !== undefined && element !==null && element !==''})
    console.log(data3)

    return data3;
    //&#xc724;&#xc544;&#x2c;&#x20;&#xad11;&#xace0;&#x20;&#xc18d;&#x20;&#xbc18;&#xc804;&#xbab8;&#xb9e4;&#x20;&#x22;&#xc740;&#xadfc;&#x20;&#xae00;&#xb798;&#xba38;&#xb124;&#x22;

  }catch(error){
    console.error(error);
  }
}