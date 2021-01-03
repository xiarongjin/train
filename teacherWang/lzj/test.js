const Joi = require('joi');

const schema = Joi.object({
    username:Joi.string().min(2).max(4).required(),
    birth_year: Joi.number().integer().min(1900).max(2013),
    space:Joi.string().allow('')
})
var dnf ='abc';
async function abc(dnf) {  
    try {
       await schema.validateAsync({ username: 'abc', birth_year: 1910 ,space:1});
    }catch (err) {
        console.log(err)
        return//停掉线程不然会异步执行后面的关联语句
        // throw err
     }
     console.log(dnf);
}
abc(dnf);