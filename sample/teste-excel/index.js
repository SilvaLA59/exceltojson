var excel = require('excel-parse-json');

var opts = {
    filePath: './excel',
    fileName: 'Sheet.xlsx'
}

excel.parse(opts).then(val =>{
    var workSheet = val;
    console.log(workSheet);
}).catch(err => {
    console.error(err);
});