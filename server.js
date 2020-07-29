const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const userRouter = require("./routers/users.router");
const financeRouter = require("./routers/finance.router");

const port = process.env.PORT || 8080;

// Cors

app.use(cors());

//Connect monogoBD
const uri =
  "mongodb+srv://minhthao56:minhthao56@cluster0-dfzmq.gcp.mongodb.net/financeApp?retryWrites=true&w=majority";
// const url2 =
//   "mongodb://minhthao56:minhthao56@ds125060.mlab.com:25060/heroku_lc77pdj0";
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connecting to momgoDB cloud...");
});

// Request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// Cookie
app.use(cookieParser());
// End  point
app.use("/users", userRouter);
app.use("/finance", financeRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
