let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");

let app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/spotifyPodcast")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

let podcastRoutes = require("./routes/podcastRoutes");
app.use("/api/podcasts", podcastRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));