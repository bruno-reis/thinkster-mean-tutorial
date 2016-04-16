var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema ({
  title: String,
  link: String,
  upvotes: {type: String, default: 0},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

mongoose.model('Post', PostSchema);