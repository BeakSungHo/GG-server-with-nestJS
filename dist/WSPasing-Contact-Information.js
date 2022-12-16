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
        const $bodyList = $("div");
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                vidioLest: $(this).find('div.videoLeft').html(),
                vidioRight: $(this).find('div.videoRight').html(),
            };
        });
        const data = ulList.filter(n => n.title);
        console.log(data + "?");
        return data;
    }
    catch (error) {
        console.error(error);
    }
};
exports.WSPasingContactInformation = WSPasingContactInformation;
//# sourceMappingURL=WSPasing-Contact-Information.js.map