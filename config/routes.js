/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/signup': {action: 'account/signup'},
  'POST /signup': {action: 'account/signup2'},
  //'/compare' : {view : 'account/compare'},
  '/compare' : {action:'account/compare2'},
  '/pwdresults' : {action :'account/compare'},
  'GET /pwdresults' : {action:'account/compare2'},
  '/controlpanel' : {action : 'account/controlpanel'},
  'POST /login' : {action: 'account/login'},
  'GET /login' : {action : 'account/login2'},
  'POST /goodbye' : {action:'account/logout'}

 



  





  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
