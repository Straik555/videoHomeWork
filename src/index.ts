import express from "express";
import { setupApp } from "./setupApp";

const app = express();
const PORT = 3000;

setupApp(app);
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
