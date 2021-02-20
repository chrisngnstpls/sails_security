/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

const isLoggedIn = require("../api/policies/isLoggedIn");

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  'account/controlpanel': isLoggedIn,
  'account/compare' : isLoggedIn,
  'account/compare2' : isLoggedIn,
  'account/signup':isLoggedIn,
  'account/signup2':isLoggedIn
  //'account/controlpanel' : 'isLoggedIn',
  //'account/login' : 'loginTrue'

};
