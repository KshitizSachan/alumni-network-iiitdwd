const pollModel = require('../../models/pollSchema');

const create = async (req, res) => {
    const { floatedBy, floatedByID, title, options } = req.body;

    try {
        // Check if options meet the minimum and maximum length constraints
        if (!Array.isArray(options) || options.length < 2 || options.length > 10) {
            return res.status(422).json({ msg: "Options array must contain between 2 and 10 options." });
        }

        // Create poll with provided data
        await pollModel.create({
            floatedBy: floatedBy,
            floatedByID: floatedByID,
            title: title,
            options: options.map(option => ({
                optionTitle: option.optionTitle,
                voteCount: 0, // Initialize vote count for each option
                votedUsers: [] // Initialize empty array for users who voted
            }))
        });

        return res.status(201).json({ msg: "Poll created successfully." }); // 201 Created
    } catch (err) {
        if (err.name === 'ValidationError') { // Check for validation errors
            return res.status(422).json({ msg: err.message }); // 422 Unprocessable Entity
        } else {
            return res.status(500).json({ msg: "Internal Server Error", err }); // 500 Internal Server Error
        }
    }
};

module.exports = { create };
