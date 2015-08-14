/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    tableName: 'user',

    attributes: {

        id: {
            type      : 'integer',
            primaryKey: true,
            unique    : true
        },

        name: {
            type: 'string'
        },

        password: {
            type: 'string'
        },

        email: {
            type: 'string'
        }

    }
};

