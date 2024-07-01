const express = require("express");
require("./config/db.config");
const app = express();
const port = 3000;
const cors = require("cors");
const morgan = require("morgan");
//import routes
const router = require("./routes/routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//project
app.use("/api", router);


//home
app.get('/', (req, res) => {
    res.json({ meesage: 'Hello There !' })
})
//gestion des erreurs 404
app.use(({ res }) => {
    const message = "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
    res.status(404).json({ message });
})

//port
app.listen(port, () => (
    console.log(`Backoffice server is running on http://localhost:${port}`)
));

