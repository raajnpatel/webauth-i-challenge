const router = require('express').Router();

const userRouter = require('../routes/auth-router.js');

router.use('/api', userRouter);

router.get('/', (req, res) => {
  res
      .status(200)
      .json({ api: "It seems you've made your way inside." });
});

module.exports = router;
