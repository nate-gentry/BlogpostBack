const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3007;
const blogpostRoutes = require('./routes/blogpost')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.use('/',blogpostRoutes);

app.get('/', (request , response)=>{
  response.send('ajax-blog-works');
});

app.listen( PORT , () => {
  console.log(`api-block ${PORT}` )
});
