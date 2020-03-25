const express = require("express");
const cors = require("cors");
const Routes = require("./routes");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
app.use(express.json());
app.use(Routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Node conected in Port ${PORT}`));
