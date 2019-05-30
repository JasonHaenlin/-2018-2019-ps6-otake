const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const university = require('./university');
const testimonial = require('./testimonial');
const financialAid = require('./financial-aid');

const universities = express.Router();

/**
 * @api {get} /universities/page=:page Request universities list by page
 * @apiName GetUniversities
 * @apiGroup Universities
 * @apiParam {number} page req params get the corresponding page (15 results per page)
 * @apiParam {string} area query params get the universities by area
 * @apiParam {string} language query params get the universities by language
 * @apiParam {string} major query params get the universities by major
 * @apiParam {string} terms query params get the universities by search terms
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/universities/page=0?area=AS&language=Français&major=GE
 *     curl -i http://localhost:3000/universities/page=0?area=AS&major=GE&search=city
 * @apiSuccess (200) {json[]} universities list of universities information to populate cards
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *        "id": 40,
 *        "name": "Universidad de Sevilla",
 *        "admission_rate": 50,
 *        "type_of_file": "Dossier Erasmus",
 *        "cost_of_living": 1000,
 *        "nb_of_place": 3,
 *        "small_picture": "https://otakedev.com/share/universities/small/41",
 *        "city": "Séville",
 *        "country": "Espagne",
 *        "area": {
 *            "id": 0,
 *            "name": "Europe",
 *            "shorthand": "EU",
 *            "icon": "https://otakedev.com/share/images/areas/EU.png"
 *        },
 *        "major": [
 *            "SI",
 *            "GB"
 *        ],
 *        "language": [
 *            {
 *                "id": 0,
 *                "language": "Anglais",
 *                "icon_url": "https://otakedev.com/share/flags/USA.png"
 *            }
 *        ]
 *      },
 *     ]
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
universities.get('/page=:page', handleExceptions(university.getUniversities));
/**
 * @api {get} /universities/search=:terms Request universities list by search terms
 * @apiName GetUniversitiesByTerms
 * @apiGroup Universities
 * @apiParam {string} terms  req params get searching terms to look for universities
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/universities/search=univ
 * @apiSuccess (200) {json[]} universities list of universities by search terms
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *          "id": 0,
 *          "name": "Université Fédérale de Rio de Janeiro"
 *      }
 *     ]
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
universities.get('/search=:terms', handleExceptions(university.getUniversitiesByTerms));
/**
 * @api {get} /universities/areas Request list of areas
 * @apiName GetAreas
 * @apiGroup Universities
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/universities/areas
 * @apiSuccess (200) {json[]} list of areas
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *          "id": 0,
 *          "area_name": "Europe",
 *          "shorthand": "EU",
 *          "icon": "https://otakedev.com/share/images/areas/EU.png"
 *      }
 *     ]
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
universities.get('/areas', handleExceptions(university.getAreas));
/**
 * @api {get} /universities/languages Request languages
 * @apiName Getlanguages
 * @apiGroup Universities
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/universities/languages
 * @apiSuccess (200) {json[]} list of languages
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *          "id": 0,
 *          "language": "Anglais",
 *          "icon_url": "https://otakedev.com/share/flags/USA.png"
 *      }
 *     ]
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
universities.get('/languages', handleExceptions(university.getLanguages));
/**
 * @api {get} /universities/majors Request majors
 * @apiName getMajors
 * @apiGroup Universities
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/universities/majors
 * @apiSuccess (200) {json[]} list of languages
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *          "id": 0,
 *          "language": "Anglais",
 *          "icon_url": "https://otakedev.com/share/flags/USA.png"
 *      }
 *     ]
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
universities.get('/majors', handleExceptions(university.getMajors));
/**
 * @api {get} /universities/details/:id Request details of a university
 * @apiName GetUniversityDetails
 * @apiGroup Universities
 * @apiParam {number} id req params get University Id
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/universities/details/19
 * @apiSuccess (200) {json} University details
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "name": "City University Hong Kong (CityU)",
 *        "big_picture": "https://otakedev.com/share/universities/big/cityu",
 *        "presentation_text": "{html}",
 *        "admission_text": "{html}",
 *        "student_life_text": "{html}",
 *        "testimonial": [
 *            {
 *                "id": 2,
 *                "university_id": 19,
 *                "major_id": 6,
 *                "first_name": "Anass",
 *                "last_name": "Hu",
 *                "email": "anass.hu@etu.univ-cotedazur.fr",
 *                "nationality": "MA",
 *                "picture": "https://otakedev.com/share/images/users/1",
 *                "text": "{string}"
 *            }
 *        ]
 *    }
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
universities.get('/details/:id', handleExceptions(university.getUniversityDetails));
/**
 * @api {get} /universities/testimonials Request testimonials list
 * @apiName GetTestimonial
 * @apiGroup Universities
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/universities/testimonials
 * @apiSuccess (200) {json[]} testimonials list
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *          "university": "Université Fédérale de Rio de Janeiro",
 *          "first_name": "Luc",
 *          "last_name": "Armel",
 *          "email": "luc.armel@etu.univ-cotedazur.fr",
 *          "nationality": "FR",
 *          "picture": "https://otakedev.com/share/images/users/4",
 *          "text": "{string}"
 *      }
 *     ]
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
universities.get('/testimonials', handleExceptions(testimonial.getTestimonials));
/**
 * @api {post} /universities/testimonial request sumbit a new testimonial
 * @apiName GetTestimonial
 * @apiGroup Universities
 * @apiExample {curl} Example usage:
 *     curl -d '{
 *              "token": "918fcc5c2536766331740ebb9e524f74",
 *              "form": {
 *                "first_name": "Charle",
 *                "last_name": "Carna",
 *                "email": "charle.carna@mail.com",
 *                "major_id": 2,
 *                "university_id": 0,
 *                "text": "YEAH !"
 *              }
 *            }'
 *            -H "Content-Type: application/json" -X POST http://localhost:3000/universities/testimonial
 * @apiSuccess (200) {json} testimonial submit
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "validy": true
 *    }
 * @apiError (404) {json} NotFoundError Token is invalid
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *      "code": 403,
 *      "message": "something went wrong"
 *    }
 */
universities.post('/testimonial', handleExceptions(testimonial.postForm));
/**
 * @api {get} /universities/financialAids Request details for financial aids
 * @apiName GetFinancialAids
 * @apiGroup Universities
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/universities/financialAids
 * @apiSuccess (200) {json[]} list of all financial aids
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *          "name": "{html}",
 *          "description": "{html}",
 *          "conditionsToApply": "{html}",
 *          "termsOfPayment": "{html}",
 *          "procedure": "{html}",
 *          "cumul": "{html}"
 *      }
 *     ]
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
universities.get('/financialAids', handleExceptions(financialAid.getFinancialAids));

module.exports = universities;
