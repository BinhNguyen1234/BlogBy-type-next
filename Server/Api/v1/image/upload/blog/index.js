const multer = require('multer');
const AuthClass = require('../../../../../Middeware/AuthMiddleware');
const Auth = new AuthClass();
const image = require('express').Router();
const storageEngine = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'Server/image/');
   },
   filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix + '.png');
   },
});
const upload = multer({ storage: storageEngine });

image.post(
   '/',
   Auth.authenticate('blogtee;accessToken'),
   upload.single('upload-name'),
   (req, res) => {
      console.log(`${req.file.filename} was be upload to ${req.file.path}`);
      res.status(299).send(req.file.filename);
   }
);

module.exports = image;
