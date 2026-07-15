const fs = require('fs');
const xml = fs.readFileSync('c:/Users/pu214/Documents/雾锁香江2/docx_temp/word/document.xml', 'utf8');

// Extract all text runs from w:t elements
const paragraphs = xml.split(/<w:p[ >]/);
let text = '';
for (const p of paragraphs) {
    const matches = p.match(/<w:t[^>]*>([^<]*)<\/w:t>/g);
    if (matches) {
        const line = matches.map(m => m.replace(/<[^>]*>/g, '')).join('');
        if (line.trim()) {
            text += line + '\n';
        }
    }
}
console.log(text);
