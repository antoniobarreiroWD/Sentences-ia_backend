const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    originalText: { type: String, required: true },
    summary: { type: String },
    highlightedArticles: [String],
    uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Case', caseSchema);
