### How to use:
```javascript
npm install --save excel-parse-json
```

```javascript
var excel = require('excel-parse-json');

var opts = {
    filePath: __dirname,
    fileName: 'File.xlsx'
}

excel.parse(opts).then(val =>{
    var workSheet = val;
    console.log(workSheet);
}).catch(err => {
    console.error(err);
});
```

### Dependencies

- node-xlsx
- fs

### How does it work?
The parse function will get the first row and all columns will be indices for the json object and all other rows will be their values.