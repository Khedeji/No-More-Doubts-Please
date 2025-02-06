const Questions = require("../models/Questions")

const questionController = {
    getAllQuestions: (req, res) => {
        // Get All the qestions on response
        Questions.find().then((questions) => {
            res.status(200).json({ message: 'Get all questions', questions });
        }).catch((err) => {
            res.status(500).json({ message: 'Error getting questions', error: err });
        })
    },
    getQuestionById: (req, res) => {
        res.status(200).json({ message: 'Get question by id' });
    },
    createQuestion: (req, res) => {
        const { title, body, tags } = req.body;
        if (!title || !body || !tags) {
            return res.status(400).json({ message: 'Please fill all the fields' });
        }
        const newQuestion = new Questions({
            title,
            body,
            tags,
            user: req.user.id
        })
        newQuestion.save().then((question) => {
            res.status(201).json({ message: 'Question created successfully', question });
        }).catch((err) => {
            res.status(500).json({ message: 'Error creating question', error: err });
        })

    },
    updateQuestion: (req, res) => {
        res.status(200).json({ message: 'Update question' });
    },
    deleteQuestion: (req, res) => {
        res.status(200).json({ message: 'Delete question' });
    }
}

module.exports = questionController;