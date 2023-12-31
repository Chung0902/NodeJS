const express = require('express');
const router = express.Router();

const { validateSchema } = require('../../utils');
const {
  q1a,
  q1amr,
} = require('./validations');
const {
  question1a,
  question1amr,
  question1b,
  question2a,
  question2b,
  question3,
  question4,
  question5,
  question6,
  question7,
  question7a,
  question8a,
  question8b,
  question13,
  question15,
  question18,
  question19,
  question20,
  question21,
  question22,
  question23,
  question24,
  question25,
  question26,
  question26b,
  question26c,
  question27,
  question28,
  question29,
} = require('./controller');

// GET ALL
router.get('/1a',validateSchema(q1a), question1a);
router.get('/1amr',validateSchema(q1amr), question1amr);
router.get('/1b', question1b);
router.get('/2a', question2a);
router.get('/2b', question2b);
router.get('/3', question3);
router.get('/4', question4);
router.get('/5', question5);
router.get('/6', question6);
router.get('/7', question7);
router.get('/7a', question7a);
router.get('/8a', question8a);
router.get('/8b', question8b);
router.get('/13', question13);
router.get('/15', question15);
router.get('/18', question18);
router.get('/19', question19);
router.get('/20', question20);
router.get('/21', question21);
router.get('/22', question22);
router.get('/23', question23);
router.get('/24', question24);
router.get('/25', question25);
router.get('/26', question26);
router.get('/26b', question26b);
router.get('/26c', question26c);
router.get('/27', question27);
router.get('/28', question28);
router.get('/29', question29);

module.exports = router;
