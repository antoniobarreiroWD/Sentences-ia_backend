const router = require('express').Router();
const authRoutes = require('./auth.routes');
const caseRoutes = require('./case.routes');





router.use('/auth', authRoutes);
router.use('/cases', caseRoutes);



module.exports = router;