const NODE_SECRET = "4e6f8b975b73d4c366d2f601155af00f";
const connection = require("./config/database");
const { User, Category, Video } = require("./model");
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

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

