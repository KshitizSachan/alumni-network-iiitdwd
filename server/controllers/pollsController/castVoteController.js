const pollModel = require('../../models/pollSchema');

const castVote = async (req, res) => {
  const { pollID, optionTitle, userEmail } = req.body;
  const userRank = req.user_rank;

  // Check if user is eligible to vote based on their rank
  if (userRank > 2) {
    return res.status(403).json({ msg: "You need to be a student of IIITDwd to vote in this poll." });
  }

  try {
    // Find the poll by pollID
    const poll = await pollModel.findOne({ pollID });
    if (!poll) {
      return res.status(404).json({ msg: "Poll not found" });
    }

    // Check if the user has already voted in any option of this poll
    const hasVoted = poll.options.some(option => option.votedUsers.includes(userEmail));
    if (hasVoted) {
      return res.status(403).json({ msg: "You have already voted in this poll." });
    }

    // Find the specific option to update
    const optionIndex = poll.options.findIndex(option => option.optionTitle === optionTitle);
    if (optionIndex === -1) {
      return res.status(404).json({ msg: "Option not found" });
    }

    // Update the vote count and add the user's email to votedUsers
    poll.options[optionIndex].voteCount += 1;
    poll.options[optionIndex].votedUsers.push(userEmail);

    // Save the updated poll document
    await poll.save();

    return res.status(200).json({ msg: "Vote cast successfully", updatedPoll: poll });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "An error occurred while casting the vote", err });
  }
};

module.exports = { castVote };
