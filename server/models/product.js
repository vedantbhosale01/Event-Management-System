const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please provide product name"],
    trim: true,
    maxlength: [120, "Event name should not be more than 120 characters"],
  },

  description: {
    type: String,
    required: [true, "please provide description"],
  },

  startDate: {
    type: Date
  },

  endDate: {
    type: Date
  },

  // thumbnail :{
  //   id: {
  //       type: String,
  //       required: true,
  //   },
  //   secure_url: {
  //       type: String,
  //       required: true,
  //   }  
  // },

  photo:{
    id: {
        type: String,
        // required: true,
    },
    secure_url: {
        type: String,
        // required: true,
    }  
},

  speaker: {
    type: String,
    // required: true
  },

  purpose: {
    type: String,
    // required: true
  },

  topics: {
    type: String,
    // required: true
  },

  organizers: {
    type: String,
    // required: true
  },

  attendees: {
    type: String,
    enum: {
      values: [
        'minors',
        'students',
        'workingprofessionals'
      ]
    }
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    // required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
