"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WSCrawlingContactStudentCafeteria = void 0;
const axios = require("axios");
const cheerio = require("cheerio");
const WSCrawlingContactStudentCafeteria = async () => {
    try {
        const getHtml = await axios.get("https://www.wsi.ac.kr/page/meal_list.jsp#self");
        let ulList = [];
        const $ = cheerio.load(getHtml.data, { xmlMode: true });
        console.log($.html('#tabMenu>div > div:nth-child(1) > div > table > tbody > tr>td'));
        const $bodyList = $("#tabMenu>div > div:nth-child(1) > div > table > tbody > tr>td");
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                학생식당서켐: $(this).find('div').text(),
            };
        });
        "#tabMenu > div > div:nth-child(1) > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > div";
        const data = ulList.filter(n => n.학생식당서켐);
        const data2 = data[0].학생식당서켐;
        const data3 = data2.replace(/\n/gi, '').split(/'<br>'/);
        console.log(data3);
        return data;
    }
    catch (error) {
        console.error(error);
    }
};
exports.WSCrawlingContactStudentCafeteria = WSCrawlingContactStudentCafeteria;
//# sourceMappingURL=WSCrawling-Contact-StudentCafeteria.js.map