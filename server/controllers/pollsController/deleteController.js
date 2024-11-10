const pollModel = require('../../models/pollSchema');

const remove = async (req, res) => {
    try {
        const { pollID } = req.body;
        const result = await pollModel.deleteOne({ pollID: pollID });

        // Check if any document was deleted
        if (!result.deletedCount) {
            return res.status(404).json({ msg: "Poll not found" }); // 404 Not Found
        }

        return res.status(204).json({ msg: "Poll deleted successfully." }); // 204 No Content
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Failed to delete poll", err }); // 500 Internal Server Error
    }
};

module.exports = { remove };
