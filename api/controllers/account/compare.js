const bcrypt = require('bcryptjs');


module.exports = {
    inputs:{
        userid:{type:'number', required:true},
        password:{type:'string'}
    },

    fn:async function(req,res,inputs) {
        // let passwordInput = req.password;
        // let idInput = req.userid;
        let user = await User.findOne({id:req.userid});
        let compareTo = user.password;
        let salty = user.passwordResetToken;
        
        //let pwd = await bcrypt.hash(localPass,salty)
        //let message;
        let result = await bcrypt.compare(req.password, compareTo);
        if (result === true){
            console.log(result)
            return this.res.view('account/results', {message : 'match'})
        } else if (result === false){
            console.log(result)
            return this.res.view('account/results', {message : 'no match senor'})
        } else {
            console.log(result)
            return this.res.view('account/results', {message : 'something went wrong'})
        }
    } 
}