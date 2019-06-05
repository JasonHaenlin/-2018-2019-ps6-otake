const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const queue = express.Router();

const tickets = require('./queue');
const student = require('./student');

/**
 * @api {get} /queue/tickets Request tickets
 * @apiName GetTickets
 * @apiGroup Queue
 * @apiParam {string} uuid req query params user uuid to identify how
 * @apiParam {string} room req query params sort by room
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/queue/tickets?uuid=f773d9cc72bcd&room=0
 * @apiSuccess (200) {json[]} tickets list
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *      {
 *        "created_at": "1559565201902",
 *        "id": "7",
 *        "student_id": "bc06b188-5f63-4bdb-bd1e-481efa8e91a3",
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
/**
 * @api {post} /queue/student Request post new student
 * @apiName PostStudent
 * @apiGroup Queue
 * @apiExample {curl} Example usage:
 *     curl -d '
 *            {
 *              "first_name": "John",
 *              "last_name": "Doe",
 *              "major_id": 1
 *            }'
 *            -H "Content-Type: application/json" -X POST http://localhost:3000/queue/student
 * @apiSuccess (200) {json} student submit
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "first_name": "John",
 *        "last_name": "Doe",
 *        "major_id": 1,
 *        "id": "3ec531a0-86a4-11e9-b667-91894690ad38"
 *    }
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
queue.post('/student', handleExceptions(student.newStudent));

/**
 * @api {delete} /queue/tickets Request first ticket to be deleted
 * @apiName DeleteTicketsFirst
 * @apiGroup Queue
 * @apiParam {string} room req params room id to identify which queue
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/queue/tickets/0/first
 * @apiSuccess (200) {json} response result
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *        "status": "ok"
 *      }
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
queue.delete('/tickets/:room/first', tickets.deleteLastTickets);
/**
 * @api {delete} /queue/tickets Request ticket to delete
 * @apiName DeleteTickets
 * @apiGroup Queue
 * @apiParam {string} studentId req params user id to identify how
 * @apiParam {string} ticketId req params to define the ticket to delete
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/queue/tickets/bc06b188-5f63-4bdb-bd1e-481ef8e91a3/0
 * @apiSuccess (200) {json} response result
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *        "status": "ok"
 *      }
 * @apiError (404) {json} AccessDeniedError Student id not valid
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Access Denied Error
 *    {
 *        "code": 403,
 *        "message": "AccessDeniedError: student id not valid"
 *    }
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
queue.delete('/tickets/:studentId/:ticketId', handleExceptions(tickets.deleteTickets));

module.exports = queue;
