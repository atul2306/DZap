const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


app.use("/api", require("./routes/cryptoRoutes"));


app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(500).json({ message: error.message || "Something went wrong" });
  });



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });