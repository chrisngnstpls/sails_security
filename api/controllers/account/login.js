const bcrypt = require('bcryptjs');
const crypto = require('crypto-random-string');

module.exports = {
    inputs:{
        userId:{type:'string'},
        password:{type:'string'}
    },
    // exits : {
    //     success: {
    //         viewTemplatePath:'account/controlpanel'
    //     }
    // },

    fn:async function(inputs) {
        console.log(this.req.session)
        let session = this.req.session
        let user;
        let goOnMr;
        // error check inputs 
        
        if (inputs.userId && inputs.password && inputs.userId) {
            goOnMr = true;
        } else {
            goOnMr = false;
            return this.res.view ('account/login', {data:'please enter something'})
            
        }

        

        if(session == undefined) {
            return this.res.view('account/login', {data:'please login'})
        }

        if(this.req.session.user_id == undefined && this.req.method == 'POST' && goOnMr){
            
            user = await User.findOne({id:inputs.userId})

            if(!user){
                console.log('User not found');
                return this.res.view('pages/unauthorized', {data:'not found'})
            
            } else if (user) {
                
                if(this.req.method == 'POST' && user) {
                    let match = await bcrypt.compare(inputs.password, user.password)
                    console.log(`db pass ${user.password}, form pass ${inputs.password}` )
                    if (match) {
                        let sessionHash = crypto({length:12});
                        // this.req.session.hash = sessionHash;
                        this.req.session.user_id = user.id;
                        this.req.session.myHash = sessionHash;
                        console.log('set session uid @ : ' + this.req.session.user_id);
                        // console.log(this.req.session.hash)
                        return this.res.view('pages/authorized', {data:'welcome user'});
                    } else {
                        this.res.statusCode = 403
                        return this.res.view('pages/unauthorized', {data:'forbidden'});
                    }
                }
            }
        
        }
    }
}