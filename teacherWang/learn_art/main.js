var template =require('art-template');
var path= require('path');
console.log(path)
var html = template(path.join(__dirname , 'views','index.html'), {
    user: {
        name: 'aui'
    }
});
console.log(html)

