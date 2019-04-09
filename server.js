const path = require('path');
const express = require('express');

const app = express();
const DIST_DIR = path.join(__dirname, 'dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const DEFAULT_PORT = 4040;

app.set('port', DEFAULT_PORT);
app.use(express.static(DIST_DIR));
app.get('*', (req, res) => res.sendFile(HTML_FILE));
// eslint-disable-next-line prefer-arrow-callback
app.listen(app.get('port'), function () {
  // eslint-disable-next-line no-console
  console.log('Server is running at '.concat(app.get('port')));
});
