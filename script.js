const fs = require('fs')
const xpath = require('xpath')
const dom = require('xmldom').DOMParser

const xml = fs.readFileSync('./zooplaResults.htm', 'utf8')
let zoopla = new dom().parseFromString(xml)
console.log(zoopla)

const xmlDoc = libxmljs.parseXml(xml, options = "HUGE");

// const gchild = xmlDoc.get('//grandchild');