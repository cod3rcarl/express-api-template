const express = require('express');
const testEnvironmentVariable = require("../settings")

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
 res.status(200).json({ message: testEnvironmentVariable  });
});

module.exports = indexRouter;
