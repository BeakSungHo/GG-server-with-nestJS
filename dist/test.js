const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.wvedc.org/members/regular-members/';
rp(url)
    .then(function (html) {
    let length = $('div.content_page_content_text div strong', html).length;
    let results = [];
    let array = $('div.content_page_content_text div', html).get();
    array.forEach((el) => {
        results.push({
            email: $(el).find('div a').text(),
            name: $(el).find('div strong').text(),
            company: $(el).html().split("<br>")[1].substr(1)
        });
    });
})
    .catch(function (err) {
});
//# sourceMappingURL=test.js.map