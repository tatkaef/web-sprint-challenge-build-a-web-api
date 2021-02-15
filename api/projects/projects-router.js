// Write your "projects" router here!

const express = require("express");
const Prjs = require("./projects-model.js");
const router = express.Router();

// /api/projects/
router.get("/", (req, res) => {
  Prjs.get()
    .then((prjs) => {
      res.status(200).json(prjs);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error getting the projects",
      });
    });
});

// /api/projects/:id
router.get("/:id", (req, res) => {
  Prjs.get(req.params.id)
    .then((prj) => {
      if (prj) {
        res.status(200).json(prj);
      } else {
        res.status(404).json({ message: "Project not found" });
      }
    })
    .catch((error) => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error getting the project",
      });
    });
});

// /api/projects/
router.post("/", (req, res) => {
  Prjs.insert(req.body)
    .then((prj) => {
      res.status(201).json(prj);
    })
    .catch((error) => {     
      console.log(error);
      res.status(500).json({
        message: "Error adding the project",
      });
    });
});

// /api/projects/:id
router.put("/:id", (req, res) => {
  const changes = req.body;
  Prjs.update(req.params.id, changes)
  .then((prj) => {
        if (prj) {
            res.status(200).json(prj);
        } else {
            res.status(404).json({ message: "The project could not be found" });
        }
    })    
    .catch((error) => {      
      console.log(error);
      res.status(500).json({
        message: `Error updating the project ${req.params.id}`,
      });
    });
});

// /api/projects/:id
router.delete("/:id", (req, res) => {
  Prjs.remove(req.params.id)
    .then((prj) => {
      if (prj) {
        res.status(200).json({ message: "The project has been delete" });
      } else {
        res.status(404).json({ message: "The project could not be found" });
      }
    })
    .catch((error) => {     
      console.log(error);
      res.status(500).json({
        message: "Error removing the project",
      });
    });
});


//  /api/projects/:id/actions 
router.get("/:id/actions", (req, res) => {  
    Prjs.getProjectActions(req.params.id)
      .then((acts) => {      
        res.status(200).json(acts);     
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: `Error getting the acts for ${res.params.id} project `,
        });
      });
  });

//export default router
module.exports = router;
