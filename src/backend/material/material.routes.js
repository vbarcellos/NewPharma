const express = require("express");
const router = express.Router();

const api = require("./material.api");

// Rotas CRUD

router
  .route("/")
  .get((req, res, next) => {
    api.query({ ...req.query }).then((result) => {
      res.status(200).send(result);
    });
  })
  .post((req, res, next) => {
    api.create(req.body).then((result) => {
      res.status(200).send(result);
    });
  });

router
  .route("/:id")
  .post((req, res, next) => {
    api.update(req.body, req.params).then((result) => {
      res.status(200).send(result);
    });
  })
  .delete((req, res, next) => {
    api.delete(req.params).then((result) => {
      res.status(200).send(result);
    });
  });

module.exports = router;
