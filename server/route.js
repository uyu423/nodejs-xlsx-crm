import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	return res.send('es6 express ok');
});

export default router;
