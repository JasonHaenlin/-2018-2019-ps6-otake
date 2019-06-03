const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const queue = express.Router();

const tickets = require('./queue');

/**
 * @api {get} /queue/tickets Request tickets
 * @apiName GetTickets
 * @apiGroup Queue
 * @apiParam {string} uuid req query params user uuid to identify how
 * @apiParam {string} room req query params sort by room
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/queue/tickets?uuid=f773d9cc72bcd&room=O+123
 * @apiSuccess (200) {json[]} tickets list
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *      {
 *        "created_at": "1559565201902",
 *        "supervisor": "Eric Macia",
 *        "availability": false,
 *        "first_name": "John",
 *        "last_name": "Doe",
 *        "major": "Informatique",
 *        "room": "O+136",
 *        "rank": "1"
 *      }
 *    ]
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
queue.get('/tickets', handleExceptions(tickets.getTickets));
/**
 * @api {post} /queue/tickets Request post new tickets
 * @apiName PostTickets
 * @apiGroup Queue
 * @apiExample {curl} Example usage:
 *     curl -d '
 *            {
 *              "supervisor_id": 0,
 *              "student_id": "bc06b188-5f63-4bdb-bd1e-481efa8e91a3"
 *            }'
 *            -H "Content-Type: application/json" -X POST http://localhost:3000/queue/tickets
 * @apiSuccess (200) {json} Tickets submit
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *          "id": 3,
 *          "supervisor_id": 0,
 *          "student_id": 1,
 *          "timestamp":23456709871
 *    }
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
queue.post('/tickets', handleExceptions(tickets.postTickets));

module.exports = queue;
