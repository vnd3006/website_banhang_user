const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const exphbs = require('express-handlebars');

const categoryMiddleware = require('./middleware/category');
const localMiddleware = require('./middleware/locals');
const notFoundMiddleware = require('./middleware/notFound');
const errorMiddleware = require('./middleware/error');

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const searchRouter = require('./routes/search');

const app = express();

const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: path.join(__dirname, 'views/'),
    partialsDir: path.join(__dirname, 'views/partials/')
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.session());

app.use(localMiddleware);
app.use(categoryMiddleware);

app.use('/', indexRouter);
app.use('/profile', profileRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);
app.use('/auth', authRouter);
app.use('/search', searchRouter);
app.use('/api', apiRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
