/**
 * Blueprint API Configuration
 * (sails.config.blueprints)
 *
 * These settings are for the global configuration of blueprint routes and
 * request options (which impact the behavior of blueprint actions).
 *
 * You may also override any of these settings on a per-controller basis
 * by defining a '_config' key in your controller defintion, and assigning it
 * a configuration object with overrides for the settings in this file.
 * A lot of the configuration options below affect so-called "CRUD methods",
 * or your controllers' `find`, `create`, `update`, and `destroy` actions.
 *
 * It's important to realize that, even if you haven't defined these yourself, as long as
 * a model exists with the same name as the controller, Sails will respond with built-in CRUD
 * logic in the form of a JSON API, including support for sort, pagination, and filtering.
 *
 * For more information on the blueprint API, check out:
 * http://sailsjs.org/#/documentation/reference/blueprint-api
 *
 * For more information on the settings in this file, see:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.blueprints.html
 *
 */

module.exports.blueprints = {

  //  optional mount path prefix for blueprints
  //  if the prefix is 'api' then the routes become prefixed with '/api/'
  prefix: '',

  // routes are automatically generated for every action in controllers
  // also the index is mapped to /:controller
  actions: true,

  // All Basic Crud operations
  // Only Use In Development
  shortcuts: true,

  // Automatic REST blueprints created (GET/POST/PUT/DELETE) for each action
  rest: true,

  //  If a blueprint route catches a request,
  //  only match  :id param if its an integer
  expectedIntegerId: false
  /***************************************************************************
  *                                                                          *
  * Whether to pluralize controller names in blueprint routes.               *
  *                                                                          *
  * (NOTE: This only applies to blueprint autoroutes, not manual routes from *
  * `sails.config.routes`)                                                   *
  *                                                                          *
  * For example, REST blueprints for `FooController` with `pluralize`        *
  * enabled:                                                                 *
  * GET /foos/:id?                                                           *
  * POST /foos                                                               *
  * PUT /foos/:id?                                                           *
  * DELETE /foos/:id?                                                        *
  *                                                                          *
  ***************************************************************************/

  // pluralize: false,

  /***************************************************************************
  *                                                                          *
  * Whether the blueprint controllers should populate model fetches with     *
  * data from other models which are linked by associations                  *
  *                                                                          *
  * If you have a lot of data in one-to-many associations, leaving this on   *
  * may result in very heavy api calls                                       *
  *                                                                          *
  ***************************************************************************/

  // populate: true,

  /****************************************************************************
  *                                                                           *
  * Whether to run Model.watch() in the find and findOne blueprint actions.   *
  * Can be overridden on a per-model basis.                                   *
  *                                                                           *
  ****************************************************************************/

  // autoWatch: true,

  /****************************************************************************
  *                                                                           *
  * The default number of records to show in the response from a "find"       *
  * action. Doubles as the default size of populated arrays if populate is    *
  * true.                                                                     *
  *                                                                           *
  ****************************************************************************/

  // defaultLimit: 30

};
