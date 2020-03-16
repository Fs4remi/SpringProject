const nunjucks = require('nunjucks');
const fs = require('fs');

nunjucks.configure('views', {autoescape: true});

const navContent = fs.readFileSync('./content/navBar.html', 'utf8');
const footerContent = fs.readFileSync('./content/footer.html', 'utf8');

const source = './content/';
const output = './output/'

const metaData = require('./metadatainfo.json');
//  {"filename": "membership.html", "ptitle": "Sign up"}

let contents;
let templatedOutput;
for( let information of metaData){
    contents = fs.readFileSync(source + information.filename);
    let data = {pageTitle: information.ptitle,navContent: navContent, mainContent:contents, footerContent: footerContent};
    
    if(information.pscript) {
        data.script =   information.pscript;
    }
    
    templatedOutput = nunjucks.render('base.njk', data);

    fs.writeFileSync(output + information.filename, templatedOutput);
}



