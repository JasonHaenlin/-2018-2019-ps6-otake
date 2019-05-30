const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const user = require('./account');

const account = express.Router();

/**
 * @api {post} /form/testimonial Request to create a new token for each mail and to send a mail for each
 * @apiName PostMailForToken
 * @apiGroup Account
 * @apiHeader {String}  Access-Control-Allow-Headers Access-Control-Allow-Headers: x-requested-with, Content-Type,
 * origin, authorization, accept, client-security-token
 * @apiHeader {String}  Access-Control-Allow-Origin Access-Control-Allow-Origin: https://ps.otakedev.com
 * @apiHeader {String}  Access-Control-Allow-Credentials Access-Control-Allow-Credentials: true
 * @apiHeader {String}  Cookie Cookie: connect.sid=***
 * @apiExample {curl} Example usage:
 *     curl -d '["jh.notif@gmail.com"]'
 *            -H "Content-Type: application/json" -X POST http://localhost:3000/account/form/testimonial
 * @apiSuccess (200) {json} send back a confirmation
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "token": true
 *    }
 * @apiError (401) {json} UnauthenticatedUserError No privilege to access this resource
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *      "code": 401,
 *      "message": "something went wrong"
 *    }
 */
account.post('/form/testimonial', handleExceptions(user.createTokens));

module.exports = account;
