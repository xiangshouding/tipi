var fs = require('fs');
var path = require('path');
var ROOT = __dirname;

function readIndex() {
    return fs.readFileSync(path.join(ROOT, 'book_md', 'index.md'), {encoding: 'utf-8'});
}

function genSummary(c) {
    fs.writeFileSync(path.join(ROOT, 'SUMMARY.md'), c);
}

function createLink(c, link) {
    var reg = new RegExp('\\[' + link + '\\]:\\s+\\?p=([^\\n]+)');
    var ret = '';
    c.replace(reg, function(all, $1) {
        if ($1) {
            ret = 'book_md/' + $1 + '.md';
        }
    });
    return ret;
}

function main() {
    var c = readIndex();
    var indexs = {};
    var rArr = [];
    cArr = c.split('\n');
    cArr.forEach(function (line) {
        var rLine = line.replace(/(?:\+|\*|-)\s\[([\s\S]+?)\]\[([\s\S]+?)\]/g, function (all, text, link) {
            if (all) {
                return all.replace('['+link+']', '(' + createLink(c, link) + ')');
            }
            return all;
        });
        if (line.match(/^\s*\[/)) {
            return;
        }
        rArr.push(rLine);
    });
    c = rArr.join('\n');
    genSummary(c);
}

main();
