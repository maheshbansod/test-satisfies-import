// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const fs = require('fs');
const ts = require('typescript');
console.log(ts.version, 'version');
const tsConfig = JSON.parse(fs.readFileSync('./tsconfig.json', 'utf8'));

const filePath = './test.ts';

const sourceJs = fs.readFileSync(filePath, 'utf8');
const { outputText } = ts.transpileModule(sourceJs, tsConfig);
console.log(outputText);
