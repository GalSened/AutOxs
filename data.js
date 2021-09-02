const xlsxFile = require('read-excel-file/node');



xlsxFile('./Data.xlsx').then((MyData) => {
    return MyData
});