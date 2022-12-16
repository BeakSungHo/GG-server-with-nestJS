//const axios = require("axios");
//const cheerio = require("cheerio");
const axios = require("axios");
const cheerio = require("cheerio");

export const WSPasingContactInformation=async(): Promise<string[]> =>{
  try{
    const getHtml = await axios.get("https://ent.wsu.ac.kr/main/index.jsp#self");
    let ulList = [];
    const $ = cheerio.load(getHtml.data);
   // const $bodyList = $("ul").children("li")
   //const $bodyList=$("table.tableSkin")
   const $bodyList=$("div");
    $bodyList.each(function(i, elem) {
      ulList[i] = {
        
          // title: $(this).find('tr').text(),
          vidioLest: $(this).find('div.videoLeft').html(),
          vidioRight:$(this).find('div.videoRight').html(),
      };
    });


    const data = ulList.filter(n => n.title);
    console.log(data+"?");
   // const data2= String (data[0].title.replace(/\t/gi ,''));
   // const data3= data2.replace(/ /g,'').split(/\n/).filter((element)=>{
    //   return element !== undefined && element !==null && element !=='';
    // })
    // const test =data2.replace(/ /g,'').split(/\n/).filter((element)=>{
    //   return element !== undefined && element !==null && element !==''})
    // console.log("ㅇㅅㅇ",test)
    // data3.splice(0,3)
    // return data3
    return data
    

  }catch(error){
    console.error(error);
  }
}