const express = require("express");
const path = require("path");
const categoryRouter = require("./routers/categoryRouter");
const searchRouter = require("./routers/searchRouter");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("build"));

app.use("/search", searchRouter);
app.use("/category", categoryRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server is Listening on port:${PORT}`);
});
