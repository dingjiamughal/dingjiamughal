import path from 'path';
import fs from 'fs';
import date from 'date-and-time';
import tpl from 'mini-tpl';
import axios from 'axios';

async function start() {
    const currentDate = date.format(new Date(), 'YYYY-MM-DD HH:mm:ss');

    const { data } = await axios.get('http://47.100.201.31:8089/api/dingjiamughal');

    const { overviews, todos } = data.content[0];

    const tplData = {
        overviews,
        todos,
        updateTime: currentDate
    };

    const MD_TEMPLATE = fs.readFileSync(path.join(__dirname, '../README.tpl'), 'utf-8');
    const readme = tpl(MD_TEMPLATE, tplData);
    fs.writeFileSync(path.join(__dirname, '../README.md'), readme, 'utf-8');
}

(() => {
    try {
        start();
    } catch (ex) {
        console.log(ex);
    }
})();
