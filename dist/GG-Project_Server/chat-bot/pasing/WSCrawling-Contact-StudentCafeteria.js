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
        let legnth = $('#tabMenu > div > div:nth-child(1) > div > table > tbody > tr > td').legnth;
        console.log(legnth);
        const $bodyList = $("#tabMenu>div > div");
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                unilunch: $(this).find('table').text(),
            };
        });
        const data = ulList.filter(n => n.unilunch);
        const data2 = data[1].unilunch.replace(/\t/gi, '');
        const data3 = data2.replace(/\r/gi, '').split(/\n/).filter((element) => {
            return element !== undefined && element !== null && element !== '';
        });
        console.log(data3);
        return data3;
    }
    catch (error) {
        console.error(error);
    }
};
exports.WSCrawlingContactStudentCafeteria = WSCrawlingContactStudentCafeteria;
//# sourceMappingURL=WSCrawling-Contact-StudentCafeteria.js.map