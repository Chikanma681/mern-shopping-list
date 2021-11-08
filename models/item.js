const moongoose = require("moongoose");
const Schema = moongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: Date.now,
  },
});

module.exports = Item = moongose.model("item", ItemSchema);
