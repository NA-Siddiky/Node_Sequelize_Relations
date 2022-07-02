const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:8081',
};

//using middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api
app.get('/', (req, res) => {
    res.json({ message: 'Hello check' })
});

//PORT
const PORT = process.env.PORT || 8080;

//server
app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`);
})