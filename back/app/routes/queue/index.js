const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const queue = express.Router();

const tickets = require('./queue');

/**
 * @api {get} /queue/tickets Request tickets
 * @apiName GetMajorDetails
 * @apiGroup School
 * @apiParam {string} shorthand req params get major shorthand
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/school/majors/SI
 * @apiSuccess (200) {json} major details for a specific major
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "id": 1,
 *        "title": "Informatique",
 *        "shorthand": "SI",
 *        "icon": "fas fa-laptop",
 *        "header_img": "https://i.pinimg.com/originals/80/71/87/8071873252ab2f773d9cc72bcd2d0264.jpg"
 *    }
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
queue.get('/tickets', handleExceptions(tickets.getTickets));

queue.post('/ticket', handleExceptions(tickets.postTickets));

module.exports = queue;
