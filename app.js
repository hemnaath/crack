const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/categoryRoute');
const path = require('path');

const app = express();


app.use(express.json());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.use('/api', categoryRoutes);


app.listen(1731, ()=>{
    console.log('Server Connected');
});
