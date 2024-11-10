const mongoose = require('mongoose');

//-------------------------------------------------Defining Job Schema------------------------------------------------
const pollSchema = new mongoose.Schema({
  pollID: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  floatedBy: {
    type: String,
    required: true
  },
  floatedByID: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  options: {
    type: [{
      voteCount: {
        type: Number,
        default: 0,
      },
      optionTitle: {
        type: String,
        required: true
      },
      votedUsers: {
        type: [String],
        default: []
      }
    }],
    validate: {
      validator: function(array) {
        return array.length >= 2 && array.length <= 10;
      },
      message: 'Options array must contain between 2 and 10 options.'
    }
  }
});

const pollModel = mongoose.model('poll', pollSchema);
module.exports = pollModel;
