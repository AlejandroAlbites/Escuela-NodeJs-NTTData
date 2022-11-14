const express = require("express");

const routes = express.Router({
  mergeParams: true,
});

routes.get("/", (req, res) => {
  res.status(200).json({
    name: "Juan Alejandro Albites",
  });
});

module.exports = { routes };
