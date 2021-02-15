// Write your "actions" router here!

const express = require("express");
const Acts = require("./actions-model.js");
const router = express.Router();

// /api/actions
router.get("/", (req, res) => {
    Acts.get()
    .then((act) => {
        res.status(200).json(act);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: "Error getting the actions",
        });
      });
})


//   /api/actions/:id
router.get("/:id", (req, res) => {
  Acts.get(req.params.id)
    .then((act) => {      
      if (act) {
        res.status(200).json(act);
      } else {
        res.status(404).json({ message: `Action ${act.id} not found` });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error getting the action",
      });
    });
});

//   /api/actions
router.post("/", (req, res) => {
  Acts.insert(req.body)
    .then((act) => {
      res.status(201).json(act);      
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error adding the action",
      });
    });
});

//   /api/actions/:id
router.put("/:id", (req, res) => {
    Acts.update(req.params.id, req.body)
      .then((act) => {
        if (act) {
          res.status(200).json(act);
        } else {
          res.status(404).json({ message: "The action could not be found" });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: "Error updating the action",
        });
      });
  });

  //   /api/actions/:id
router.delete("/:id", (req, res) => {
    Acts.remove(req.params.id)
      .then((act) => {
        if (act) {
          res.status(200).json({ message: "The action has been delete" });
        } else {
          res.status(404).json({ message: "The action could not be found" });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: "Error removing the action",
        });
      });
  });




module.exports = router;

