const pollModel = require('../../models/pollSchema');

const get = async (req, res) => {
    const { pollID } = req.body;

    try {
        const poll = await pollModel.findOne({ pollID: pollID });

        if (!poll) {
            return res.status(404).json({ msg: "Poll not found" }); // 404 Not Found
        }

        return res.json(poll);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error", err }); // 500 Internal Server Error
    }
};

module.exports = { get };
