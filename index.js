import express from "express";
import path from "path";

const app = express();
const port = +process.env.PORT || 4000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./static"));

app.get("^/$| /FitMatch", (req, res) => {
  res.status(200).sendFile(path.resolve("./static/html/index.html"));
});

app.get("*", (req, res) => {
  res.status({
    status: 404,
    message: "Page not found",
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
