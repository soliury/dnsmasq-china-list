const fs = require('fs');

const chinaDomains = fs.readFileSync('./accelerated-domains.china.conf');
const appleDomains = fs.readFileSync('./apple.china.conf');


let customDomains = '';
try {
    customDomains = fs.readFileSync('./custom.txt');
} catch(e) {
    console.log("No custom.txt, skip add custom.txt");
}

let domainList = chinaDomains + appleDomains;

domainList = domainList.split('\n').map(function(item) {
    return item.replace('server=\/', '').replace('\/114\.114\.114\.114', '');
});

fs.writeFileSync('./directlist.txt', domainList.join('\n') + '\n' + customDomains);
