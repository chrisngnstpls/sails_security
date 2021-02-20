
module.exports = {
    // exits: {
    //     success: {
    //         viewTemplatePath: 'account/login' // view account/login.ejs
    //     }
    // },

    fn:async function () {
        console.log(this.req.session)
        
        if (this.req.session.user_id !== undefined){
            return this.res.view('pages/authorized', {data:'already logged in'})
        } else if (this.req.session.user_id == undefined){
            return this.res.view('account/login', {data:'please login'})
        }

        //return {}
    }
    
}