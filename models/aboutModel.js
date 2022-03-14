const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    about: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("about", aboutSchema);
