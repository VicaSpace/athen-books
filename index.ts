import express from 'express';
import {router} from './src/routers';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', router);

app.listen(port, function () {
	console.log(`Library is listening on port ${port}`);
});