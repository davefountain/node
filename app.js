const express = require('express');
const app = express();
const path = require('path');
const pub_path = path.join(__dirname, '/public')
const port = 3000

// Static pages
app.use(express.static(pub_path));

// 404 Page
app.use((req, res) => {
    res.status(404);
    res.send('<h1>Error 404: Resource not found</h1>');
})

app.get('/card', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Serving ${pub_path}  Listening on port ${port}`);
});