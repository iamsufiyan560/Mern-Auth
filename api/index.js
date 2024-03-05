import { log } from "console";
import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("server runnnig on port 3000");
});
