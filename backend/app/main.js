const path = require('path');
const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');

const fileDb = require('../fileDb');
const config = require('../config');

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, config.uploadPath)
    },
    filename:(req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req,res) => {
    const messages = await fileDb.getItems();
    res.send(messages)
});

router.post('/', upload.single('image'), async (req,res) => {
    const mess = req.body;
    if(req.file){
        mess.image = req.file.filename;
    }
    if (!mess.title){
        mess.title = "Anonymous"
    }
    if(!mess.description){
        const error = {error: "It seems that you did not fill one of the fields"};
        res.status(400).send(error);
    }
    await fileDb.addItem(mess);
    res.send(req.body.id);


});


module.exports = router;