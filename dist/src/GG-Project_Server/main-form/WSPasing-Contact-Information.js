"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WSPasingContactInformation = void 0;
const axios = require("axios");
const cheerio = require("cheerio");
const WSPasingContactInformation = async () => {
    try {
        const getHtml = await axios.get("https://ent.wsu.ac.kr/main/index.jsp#self");
        let ulList = [];
        const $ = cheerio.load(getHtml.data);
        const $bodyList = $("table.tableSkin");
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                title: $(this).find('tr').text(),
            };
        });
        const data = ulList.filter(n => n.title);
        const data2 = String(data[0].title.replace(/\t/gi, ''));
        const data3 = data2.replace(/ /g, '').split(/\n/).filter((element) => {
            return element !== undefined && element !== null && element !== '';
        });
        const test = data2.replace(/ /g, '').split(/\n/).filter((element) => {
            return element !== undefined && element !== null && element !== '';
        });
        console.log("ㅇㅅㅇ", test);
        data3.splice(0, 3);
        return data3;
    }
    catch (error) {
        console.error(error);
    }
};
exports.WSPasingContactInformation = WSPasingContactInformation;
//# sourceMappingURL=WSPasing-Contact-Information.js.map