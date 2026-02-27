let mongoose = require("mongoose");

let podcastSchema = new mongoose.Schema({

  title: { type: String, required: true },
  description: { type: String, required: true },
  host: { type: String, required: true },
  category: { type: String, default: "General" },
  audioUrl: { type: String, required: true },
  thumbnail: { type: String },
  views: { type: Number, default: 0 }

}, { timestamps: true });

module.exports = mongoose.model("Podcast", podcastSchema);