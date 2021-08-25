

const xlsxFile = require('read-excel-file/node');
 
xlsxFile('./Data.xlsx').then((rows) => {
    console.log(rows);
    console.table(rows);



    console.log(rows[0][0]);

})

