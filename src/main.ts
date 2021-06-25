import path from 'path';
import fs from 'fs';
import date from 'date-and-time';
import tpl from 'mini-tpl';

function start() {
    const currentDate = date.format(new Date(), 'YYYY-MM-DD HH:mm:ss');

    const tplData = {
        overviews: [
            '🔭 正在努力工作',
            '🤔 恶补工程能力中...',
            '📫 看机会中，base~上海 vx: `dingjia2042`',
            '💬 看看我的 [juejin](https://juejin.cn/user/993614241205592/posts)、[packages](https://www.npmjs.com/settings/djmughal/packages)'
        ],
        todos: [
            '去一趟西藏',
            '系统学习一下 docker 和 react 生态圈源码',
            '完善 [cx-heading](https://www.npmjs.com/settings/cx-heading/packages)',
            '刷算法！'
        ],
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
