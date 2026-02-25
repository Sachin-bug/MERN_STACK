let express = require("express");
const { message } = require("../Day10/one");
let app = express();

let podcast = [
  {id:1, Topic: "Kutty Story", Host:"Vijay" },
  { id:2,Topic: "Passion is Life", Host:"Ajith Kumar" },
  { id:3,Topic: "Rise of Mentalan", Host:"Rajinikanth" }

];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome To My Server");
});

app.get("/podcast", (req, res) => {
  res.send(podcast);
});

app.get("/podcast/:id", (req, res) => {

    let id = req.params.id;  
   let filteredProduct=podcast.find(podcast=> podcast.id==id);

    if (!filteredProduct) {
        return res.status(404).json({ message: "Podcast not found ❌" });
    }
   console.log(filteredProduct);
    res.send(filteredProduct);
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});