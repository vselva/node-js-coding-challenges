const name = 'JS';
console.log(name.padStart(5, '*')); // '***JS'
console.log(name.padEnd(5, '*'));   // 'JS***'

const invoiceNumber = '25';
const formatted = invoiceNumber.padStart(6, '0');
console.log(formatted); // '000025'
