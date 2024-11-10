const pollModel = require('../../models/pollSchema');

const getAll = async (req, res) => {
  const userRank = req.user_rank ?? 4; // Default rank is 4 if not provided

  try {
    let polls = await pollModel.find({});

    if (!polls || polls.length === 0) {
      return res.status(404).json({ msg: "No Polls found" }); // 404 Not Found
    }

    if (userRank > 2) {
      // Mask sensitive fields for rank > 3
      polls = polls.map(poll => ({
        ...poll.toObject(),
        floatedBy: "XXXXXX",
        floatedByID: "XXXXXX",
        createdAt: "XXXXXXXXX",
        options: poll.options.map(option => ({
          optionTitle: option.optionTitle,
          voteCount: "X",
          votedUsers: ["XXXXXX"] // Hide all user emails for rank > 3
        }))
      }));
    }

    return res.json(polls);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error" }); // 500 Internal Server Error
  }
};

module.exports = { getAll };
