const express = require("express");
const youtubedl = require("youtube-dl");

const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://q57r6.csb.app");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Hello Express app!");
// });

app.get("/download", (req, res, next) => {
  const url = req.query.url;
  if (!url) {
    next(new Error("Missing url"));
    return;
  }

  youtubedl.getInfo(url, function(err, info) {
    if (err) {
      next(new Error("Lookup failed"));
      return;
    }

    console.log("id:", info.id);
    console.log("title:", info.title);
    console.log("url:", info.url);
    console.log("thumbnail:", info.thumbnail);
    console.log("description:", info.description);
    console.log("filename:", info._filename);
    console.log("format id:", info.format_id);

    res.send(info);
  });
});

app.use(express.static("dist"));

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message || "Something broke!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server started");
});
