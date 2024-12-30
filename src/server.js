//this is the production server
//npm start builds the application and runs this

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