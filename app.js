const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();



app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/link", require("./routes/link.routes"));
app.use("/t", require("./routes/redirect.routes"));

const PORT = config.get("PORT") || 3001;

const start = async () => {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () =>
      console.log(`Server is listening PORT ${PORT}.......`)
    );
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
};

start();
