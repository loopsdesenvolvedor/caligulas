var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
const NODE_SECRET = "4e6f8b975b73d4c366d2f601155af00f";
const connection = require("./config/database");
const { User, Category, Video } = require("./model");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/user");
var dashboardRouter = require("./routes/dashboard");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/files", express.static(path.join(__dirname, "uploads")));

connection
  .authenticate()
  .then(() => {
    console.log("Connection made successfully.");
  })
  .catch((err) => console.log(err));

app.use(
  session({
    secret: NODE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);

app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/", dashboardRouter);

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
