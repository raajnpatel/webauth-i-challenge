const router = require('express').Router();

router.get('/', (req, res) => {
  res
      .status(200)
      .json({ api: "It seems you've made your way inside." });
});

module.exports = router;
