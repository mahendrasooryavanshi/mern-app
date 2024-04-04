require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

// The express-rate-limit is for
// limiting the incoming request.
const rateLimit = require("express-rate-limit");

// Creating a limiter by calling rateLimit function with options:
// max contains the maximum number of request and windowMs
// contains the time in millisecond so only max amount of
// request can be made in windowMS time.
const limiter = rateLimit({
  max: 200,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP",
});

// Add the limiter function to the express middleware
// so that every request coming from user passes
// through this middleware.
app.use(limiter);
//  resolve cross-origin
app.use(cors({ allowedHeaders: "Content-Type,Authorization,language" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,Authorization,language"
  );
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS,POST,GET");

  next();
});
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse some custom thing into a Buffer
app.use(
  bodyParser.raw({ type: "application/vnd.custom-type", limit: "100kb" })
);

// parse an HTML body into a string
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res, next) => {
  res.status(200).send("server is working!");
  next();
});

// function errorHandler(err, req, res, next) {
//   if (res.headersSent) {
//     return next(err);
//   }
//   res.status(500);
//   res.render("error", { error: err });
// }
// app.use(function (err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// calling all routes here
app.use("/user/api", require("./routes/user.routes"));
app.use("/admin/api", require("./routes/user.routes"));
app.use("/payment/api", require("./routes/user.routes"));
app.all("/*", (req, res) => {
  res.send("404 page");
});
app.listen(PORT);
console.log(`server is listing at http://localhost:${PORT}`);
