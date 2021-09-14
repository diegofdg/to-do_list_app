const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const PORT = 3001;
const app = express();

const todoRoutes = require('./routes/todoRoutes');
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

app.use(express.json());
app.use(cors());

mongoose
	.connect(process.env.MONGODB_URI, connectionOptions)
	.then(() => {
        console.log('connected to MongoDB');		
	})
	.catch((error) => {
		console.error(error);
	});

app.use('/todos', todoRoutes);

app.listen(PORT, () => {
    console.log('the server is listening on port '+ PORT);
});