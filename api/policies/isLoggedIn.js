module.exports = async function(req, res, proceed) {
    if (req.session.user_id) {
        return proceed();
    } 
    return res.view('pages/unauthorized', {data:'Please login to view this content'})
} 
