const express = require('express');
const app = express();
const expressLayouts = require('express-serve-static-core');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layouts', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

app.listen(process.env.PORT || 3000);