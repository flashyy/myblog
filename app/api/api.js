import express from "express";
import articleapi from './articles'

const router = express.Router();

router.use('/articles', articleapi);


export default  router;
