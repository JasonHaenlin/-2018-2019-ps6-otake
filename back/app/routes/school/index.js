const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const major = require('./major');
const speciality = require('./speciality');
const course = require('./course');
const info = require('./info');
const supervisor = require('./supervisor');
const contract = require('./past-contract');

const school = express.Router();

/**
 * @api {get} /school/majors/:shorthand/ Request a major details
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
school.get('/majors/:shorthand', handleExceptions(major.getMajor));
/**
 * @api {get} /school/specialities/ Request the list of specialities
 * @apiName GetSpecialities
 * @apiGroup School
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/school/specialities
 * @apiSuccess (200) {json[]} specialities list
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *      {
 *          "id": 0,
 *          "name": "Architecture Logicielle",
 *          "shorthand": "AL",
 *          "small_picture": "https://cdn.techopedia.com/images/uploads/analog-clock-clock-diagram-plan-alarm-clock.jpg",
 *          "big_picture": "https://cdn.techopedia.com/images/uploads/analog-clock-clock-diagram-plan-alarm-clock.jpg",
 *          "description": "{string}",
 *          "topics_card": "Software Architecure, Cloud And Software Modeling",
 *          "topics_details": "{string}",
 *          "career": "{string}"
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
school.get('/specialities', handleExceptions(speciality.getSpecialities));
/**
 * @api {get} /school/speciality/:shorthand/ Request a speciality details
 * @apiName GetSpecialityDetails
 * @apiGroup School
 * @apiParam {string} shorthand req params get speciality shorthand
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/school/speciality/IHM
 * @apiSuccess (200) {json} details of a specific speciality
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "id": 1,
 *        "name": "Interface Homme-Machine",
 *        "shorthand": "IHM",
 *        "small_picture": "https://lemonadverts.com/wp-content/uploads/2018/04/app-design.png",
 *        "big_picture": "https://lemonadverts.com/wp-content/uploads/2018/04/app-design.png",
 *        "description": "{string}",
 *        "topics_card": "{string}",
 *        "topics_details": "{string}",
 *        "career": "{string}"
 *    }
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
school.get('/speciality/:shorthand/', handleExceptions(speciality.getSpeciality));
/**
 * @api {get} /school/specialities/:major/ Request all the specialities for a specific major
 * @apiName GetSpecialitiesMajor
 * @apiGroup School
 * @apiParam {string} shorthand req params get specialities shorthand
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/school/specialities/SI
 * @apiSuccess (200) {json[]} list of all specialities for a selected major
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *      {
 *        "name": "Architecture Logicielle",
 *        "shorthand": "AL",
 *        "small_picture": "https://cdn.techopedia.com/images/uploads/analog-clock-clock-diagram-plan-alarm-clock.jpg",
 *        "topics_card": "Software Architecure, Cloud And Software Modeling"
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
school.get('/specialities/:major', handleExceptions(speciality.getCardSpecialities));
/**
 * @api {get} /school/contracts/ Request all the contracts
 * @apiName GetContracts
 * @apiGroup School
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/school/contracts
 * @apiSuccess (200) {json[]} list of all contracts
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *      {
 *          "id": 1,
 *          "year": 2019,
 *          "semester": "s1",
 *          "university_id": 5,
 *          "speciality_id": 4,
 *          "link": "https://otakedev.com/share/contrats/contrat-etude-sample.pdf "
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
school.get('/contracts', handleExceptions(contract.getPastContracts));
/**
 * @api {get} /school/contracts/:speciality Request all the contracts for a speciality
 * @apiName GetContractsSpeciality
 * @apiGroup School
 * @apiParam {string} speciality req params get speciality shorthand
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/school/contracts/IMAFA
 * @apiSuccess (200) {json[]} list of all contracts for a speciality
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *        {
 *            "area": "Amérique du Nord",
 *            "country": [
 *                {
 *                    "name": "Canada",
 *                    "contract_by_university": [
 *                        {
 *                            "university": "Université du Québec à Montréal",
 *                            "contract": [
 *                                "https://otakedev.com/share/contrats/contrat-etude-sample.pdf ",
 *                                "https://otakedev.com/share/contrats/contrat-etude-sample.pdf "
 *                            ]
 *                        }
 *                    ]
 *                }
 *            ]
 *        }
 *    ]
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
school.get('/contracts/:speciality', handleExceptions(contract.getPastContractsWithGeographicalAreaAndSpeciality));
/**
 * @api {get} /school/courses/ Request all courses
 * @apiName GetCourses
 * @apiGroup School
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/school/courses
 * @apiSuccess (200) {json[]} list of all courses
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *      {
 *          "id": 0,
 *          "major_spec_id": 0,
 *          "ue": "UE3",
 *          "semester": "S7",
 *          "title": "Anglais",
 *          "description": ""
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
school.get('/courses', handleExceptions(course.getCourses));
/**
 * @api {get} /school/courses/:major Request all the courses for a major
 * @apiName GetCoursesMajor
 * @apiGroup School
 * @apiParam {string} major req params get major shorthand
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/school/courses/SI
 * @apiSuccess (200) {json[]} list of all courses for a major
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *     {
 *      "semester": "S7",
 *      "ue": "UE3",
 *      "title": "Anglais",
 *      "description": ""
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
school.get('/courses/:major', handleExceptions(course.getCoursesOf));
/**
 * @api {get} /school/courses/:major Request all the courses for a major and for a selected semester
 * @apiName GetCoursesMajorSemester
 * @apiGroup School
 * @apiParam {string} major req params get major
 * @apiParam {string} semester req params get semester
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/school/courses/SI/S8
 * @apiSuccess (200) {json[]} list of all courses for a major filter by semester
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *      {
 *          "semester": "S8",
 *          "ue": "UE3",
 *          "title": "Communication 2",
 *          "description": ""
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
school.get('/courses/:major/:semester', handleExceptions(course.getCoursesOfMajorForThisSemester));
/**
 * @api {get} /school/deadlines/:intervalDate Request deadlines for a specific date interval
 * @apiName GetDeadLines
 * @apiGroup School
 * @apiParam {string} intervalDate req params get the interval date
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/school/courses/SI/S8
 * @apiSuccess (200) {json[]} list of all session for a specific interval
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *        {
 *            "date": "2019-01-10T23:00:00.000Z",
 *            "title": "1ère Session",
 *            "details": "Deadline de rendu de dossier PNS et UNS pour le 1er et 2ème semestre"
 *        },
 *        {
 *            "date": "2019-07-02T22:00:00.000Z",
 *            "title": "2ème Session",
 *            "details": "Deadline de rendu de dossier PNS et UNS uniquement pour le 2ème semestre"
 *        }
 *    ]
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
school.get('/deadlines/:intervalDate', handleExceptions(info.getDeadlineByYears));
/**
 * @api {get} /school/supervisors/ Request all supervisors
 * @apiName GetSupervisors
 * @apiGroup School
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/school/supervisors
 * @apiSuccess (200) {json[]} list of all supervisors
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *      {
 *          "id": 0,
 *          "name": "Maria-Paola Santisi d’Avila",
 *          "title": "Correspondant RI - GE",
 *          "email": "maria-paola.santisi-davila@polytech.unice.fr",
 *          "category": "Echange-SI"
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
school.get('/supervisors', handleExceptions(supervisor.getSupervisors));
/**
 * @api {get} /school/courses/ Request all supervisors by category
 * @apiName GetSupervisorsCategory
 * @apiGroup School
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/school/supervisors/Echange-SI
 * @apiSuccess (200) {json[]} list of all supervisors for a specific category
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *      {
 *        "id": 6,
 *        "name": "Anne-Marie Pinna",
 *        "title": "Correspondant RI - SI",
 *        "email": "anne-marie.pinna@polytech.unice.fr",
 *        "category": "Echange-SI"
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
school.get('/supervisors/:category', handleExceptions(supervisor.getSupervisorByCategory));
/**
 * @api {post} /school/email Request send a mail to a supervisor
 * @apiName PostMailSupervisor
 * @apiGroup School
 * @apiExample {curl} Example usage:
 *     curl -d '
 *            {
 *              "firstName": "John",
 *              "lastName": "Doe",
 *              "emailSender": "john.doe@mail.com",
 *              "emailReceiver": [
 *                "pierre.brigode@polytech.unice.fr"
 *              ],
 *              "object": "Bourse",
 *              "message": "I would like some informations"
 *            }'
 *            -H "Content-Type: application/json" -X POST http://localhost:3000/school/email
 * @apiSuccess (200) {json} testimonial submit
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "ok"
 *    }
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
school.post('/email', handleExceptions(supervisor.sendEmail));

module.exports = school;
