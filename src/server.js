//this is the production server
//this should be started after `ng build -c production`

const express = require('express');
const path = require('path');

const app = express();
const PORT = 4200

let appDir = path.join(__dirname, "..", 'dist/linkat-app/browser')
app.use(express.static(appDir));


app.get('*', (req, res) => {
  res.sendFile(path.join(appDir, 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});