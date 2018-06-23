import * as express from 'express';
import * as fs from 'fs';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(fs.readFileSync('./public/index.html').toString());
});

app.listen(3000, () => console.log('development server running on port 3000!'));