module.exports = async function (req,res,proceed) {
    
    console.log('session user id:' + req.session.user_id)
    
    if (req.session.user_id !== undefined){
        res.view('pages/authorized', {data:'already logged in'})
        console.log('already logged in coming from the wall')
    } else {
        return proceed();
    }
}