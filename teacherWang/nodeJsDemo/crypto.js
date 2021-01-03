    // const crypto =require('crypto');

    // const secret='abcdefg';
    // const hash = crypto.createHmac('sha256',secret).digest('hex');
    // console.log(hash);

    // var bcrypt=require('bcrypt');
    // console.log(brypt.genSalt(10))
    // async function  getPass() {
    //     var salt=await bcrypt.genSalt(10);
    //     var pass=await bcrypt.hash('123456',salt);
    //     console.log(pass);
    //   }
    //  getPass() 

    var bcrypt=require('bcrypt');
    async function comp() {
        var res=await bcrypt.compare('123456','$2b$10$gZ3dutlE5aVpWDQpxQec4.pYpSXeUubZ/NXf4fTD7m0TRPd63sQjK')
        // console.log(res)
        return res
      }
comp().then(function (res) {  
    console.log(res)
  })

     

