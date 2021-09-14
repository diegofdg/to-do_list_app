const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = 3001;
const todoRoutes = require('./routes/todoRoutes');
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

app.use(express.json());

mongoose
	.connect('mongodb+srv://root:root@cluster0.e4wrh.mongodb.net/test_app?retryWrites=true&w=majority', connectionOptions)
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