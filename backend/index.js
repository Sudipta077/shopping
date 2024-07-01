const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(cors()); 
app.use(bodyParser.json());
app.use('/auth', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});