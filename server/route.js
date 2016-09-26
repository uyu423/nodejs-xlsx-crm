import express from 'express';
import multer from 'multer';
import controller from './controllers';

const router = express.Router();

/* multer config */
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.xls')
  }
});
const upload = multer({ storage : storage });

/* Routing Definition */
router.get('/', (req, res) => {
	return res.send('es6 express ok');
});
router.post('/upload/type1', upload.single('xlsx'), controller.type1Uploader);
router.delete('/delete/:fileIdx', controller.deleteFile);

export default router;
