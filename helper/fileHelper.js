const multer = require('multer');
const path = require('path');
const db = require('../config/database');


const categoryStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/categories');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const fileFilter = async(req, file, cb)=>{  
    const allowedFileType = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileType.includes(file.mimetype)){
        cb(null, true);
    }else{
        throw new error('File format not allowed');
    }
}

const categoryUpload = multer({
    storage: categoryStorage,
    fileFilter: fileFilter
});



module.exports = { 
    categoryUpload,
};