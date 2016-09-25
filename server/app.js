/* import dependency package */
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import expressValidator from 'express-validator';
import multer from 'multer';

import webpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

/* route file import */
import route from './route';

import excelParser from 'excel-parser';
import controller from './controllers';

/* multer config */
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.xls')
  }
});

/* const variable define */
const app = express();
const upload = multer({ storage : storage });

/* load .env settings */
dotenv.load({
	path: path.join(__dirname, '../.env')
});

/* middleware */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

/* routing */
app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/api', route);
app.post('/test', upload.single('xlsx'), controller.uploader);
app.use('/assets', express.static(path.join(__dirname, '../bower_components')));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, './../public/index.html'));
});
//app.use('/', express.static(path.join(__dirname, '../public')));

/* if `npm run development` */
if(process.env.NODE_ENV == 'development' || process.env.NODE_ENV == undefined) {
	console.log("Server ENV : development");
	const config = require('../webpack.dev.config.js');
	const compiler = webpack(config);
	const devServer = new webpackDevServer(compiler, config.devServer);
	devServer.listen(
			process.env.PORT_DEV, () => {
				console.log('webpack-dev-server Listening on port : ', + process.env.PORT_DEV + ", proxy to port " + process.env.PORT);
	});

}

app.listen(process.env.PORT, () => {
	console.log("Server Listening on Port : " + process.env.PORT);
});
