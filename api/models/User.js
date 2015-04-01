/*
* User.js
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  //Only Saves the attributes we've selected
  schema: true,

  attributes: {
      name: {
        type: 'string',
        required: true
      },

      title: {
        type: 'string'
      },

      email: {
        type: 'string',
        email: true,
        required: true,
        unique: true
      },

      encryptedPassword: {
        type: 'string'
      },
      // prevents from reaching client but not DB
      toJSON: function() {
        var object = this.toObject();
        delete obj.password;
        delete obj.password-confirm;
        delete obj.encryptedPassword;
        delete obj._csrf;
        return object;
      }
  }


};
