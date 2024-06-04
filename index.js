const express = require("express");
require("./db/dbconfig");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

//import routes
const router = require("./routes/routes");
//project
app.use("/api", router);

//gestion des erreurs 404
app.use(({ res }) => {
    const message = "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
    res.status(404).json({ message });
})

//port
app.listen(port, () => (
    console.log(`Backoffice server is running on http://localhost:${port}`)
));