var xlsx = require('node-xlsx').default;
var fs = require('fs');

var excelService = module.exports = (options)=>{};

excelService.parse = function(opts){
    return new Promise(function(resolve, reject){
        if(opts === undefined ){
            reject('Options undefined.');
        }
        
        this.fileName = opts.fileName;
        this.filePath = opts.filePath;
        if(this.fileName === undefined || this.filePath === undefined){
            reject('There are empty parameters.');
        }
        // Parse a buffer
        const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${this.filePath}/${this.fileName}`));

        var workSheetData = workSheetsFromBuffer[0].data;
        var header = workSheetData[0];
        var values = [];
        for (let index = 1; index < workSheetData.length; index++) {
            var jsonObj = {};
            var arrObj = workSheetsFromBuffer[0].data[index];
            for (let index_ = 0; index_ < arrObj.length; index_++) {
                jsonObj[header[index_]] = arrObj[index_];
            }
            values.push(jsonObj);
        }
        resolve(values);
    });
}