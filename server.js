const express = require('express');
const cors = require('cors');
const { query } = require('express');

const app = express();

const corsOptions = {
    origin: 'http://localhost:8081',
};

//using middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const productRoutes = require('./routes/productRouter');
app.use('/api/products', productRoutes);

//api
app.get('/', (req, res) => {
    console.log("Home Page");
    res.json({ message: 'Hello check' })
});

// app.get('/about', auth, (req, res, next) => {
//     console.log("About Page");
//     res.json({ message: 'About Page ok!' });
//     next()
// });



// //custom middleware
// app.use(customMiddleware);

// //creating custom middleware
// function customMiddleware(req, res, next) {
//     console.log('Custom Middleware is running');
//     // console.log('Before');
//     next();
//     // console.log('After');
// }

// function auth(req, res, next) {
//     if (req.query.admin === 'true') {
//         console.log('admin...');
//         next();
//         return;
//     }
//     res.send('Auth is require...');
// }

//PORT
const PORT = process.env.PORT || 8080;

//server
app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`);
})