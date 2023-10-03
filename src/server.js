const express = require('express');
const path = require('path');

const app = express();

app.use('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   app.render('index', {
      title: 'Title Home'
   });
})

// 404 error (page not found)
app.use((req, res) => {
   res.send('Page not found');
})

const port =  process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`));