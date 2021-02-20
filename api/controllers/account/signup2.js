const bcrypt = require('bcryptjs');
const crypto = require('crypto-random-string');

module.exports = {
    inputs: {
        emailAddress: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        confirmPassword: {
            type: 'string',
        },
        fullName: {
            type: 'string',
        },
        passwordResetToken: {
            type: 'string',
        }
    },
    exits: {
        success: {
            viewTemplatePath: 'account/controlpanel' // view account/signup.ejs
        }
    },

    fn: async function(inputs) {

        var someSalt = await crypto({length:10, type:'base64'})
        //var pass = someSalt + inputs.password + someSalt;
        var pass = inputs.password;
        var customSalt;

        await bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(pass, salt, async function(err, hash){
                if(!err){
                    var user = await User.create({fullName:inputs.fullName, password:hash, emailAddress:inputs.emailAddress, passwordResetToken:salt})
                    
                }
            })
        } )
        //var user = await User.create({fullName:inputs.fullName, password:hashedPass, emailAddress:inputs.emailAddress, passwordResetToken:customSalt})
        //var user =  await User.create({fullName: inputs.fullName, password:
        //    await bcrypt.hash(pass,12), emailAddress: inputs.emailAddress, passwordResetToken : pass});
        
        // var user = await User.create({fullName: inputs.fullName, password: await bcrypt.genSalt(10,function(err,salt){
        //     bcrypt.hash(pass, salt, function() {})}),emailAddress: inputs.emailAddress});
        return {}
    }
}