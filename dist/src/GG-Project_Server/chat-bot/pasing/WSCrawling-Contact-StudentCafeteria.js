"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WSCrawlingContactStudentCafeteria = void 0;
const axios = require("axios");
const cheerio = require("cheerio");
function decodeHtmlEntity(str) {
    var textarea = document.createElement("textarea");
    textarea.innerHTML = str;
    var result = textarea.value;
    textarea.parentNode.removeChild(textarea);
    return result;
}
class alldata {
}
const WSCrawlingContactStudentCafeteria = async () => {
    try {
        const getHtml = await axios.get("https://www.wsi.ac.kr/page/meal_list.jsp#self");
        let ulList = [];
        const $ = cheerio.load(getHtml.data, { xmlMode: true });
        const $bodyList = $("#tabMenu>div > div");
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                unilunch: $(this).find('table').text(),
                br: $(this).find('table > tbody > tr > td > div').html(),
            };
        });
        const data = ulList.filter(n => n.unilunch);
        const data2 = data[2].unilunch.replace(/\t/gi, '');
        const data3 = data2.replace(/\r/gi, '').split(/\n/).filter((element) => {
            return element !== undefined && element !== null && element !== '';
        });
        const br = ulList.filter(n => n.br);
        const br2 = br[0].br.replace(/\t/gi, '');
        const br3 = br2.replace(/\r/gi, '');
        const br5 = br3.replace(/ \/ /gi, '');
        const br6 = br5.replace(/\*/gi, '').split(/;/).filter((element) => {
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