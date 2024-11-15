const Case = require('../models/case.model');
const { summarizeText } = require('../utils/textProcessing');


exports.uploadCase = async (req, res) => {
    try {
        const { title, originalText } = req.body;

        
        const summary = await summarizeText(originalText);

        
        const newCase = await Case.create({ title, originalText, summary });

        res.status(201).json(newCase);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getCases = async (req, res) => {
    try {
        const cases = await Case.find();
        res.status(200).json(cases);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getCaseById = async (req, res) => {
    try {
        const caseItem = await Case.findById(req.params.id);
        if (!caseItem) {
            return res.status(404).json({ message: 'Case not found' });
        }
        res.status(200).json(caseItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
