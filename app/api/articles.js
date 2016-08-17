'use strict';
import express from "express";
import _ from 'lodash';

const router = express.Router();
const articles = [];


router.post('/', function (req, res) {
  const data = req.body;
  if (_.isEmpty(data)) {
    // console.log(_.isEmpty(data));
    res.sendStatus(400);
  } else {
    articles.push(data);
    res.sendStatus(201);
  }
});

router.get('/', function (req, res) {
  res.json(articles);
  // const a = req.body;
  // res.send(a);
});


export default router;
