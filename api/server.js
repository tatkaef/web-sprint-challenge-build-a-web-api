const express = require('express');
const server = express();

// Complete your server here!
// Do NOT `server.listen()` inside this file!

server.use(express.json());

const actionRouter = require("../api/actions/actions-router.js");
const projectRouter = require("../api/projects/projects-router.js");

//endpoints
server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.send(`
    <h2>Build a Web API Sprint Challenge</h2>
    <a href="/api/actions">Actions</a>

    <form action="/api/projects">
         <input type="submit" value="Go to projects" />
    </form>   
  `);
});


module.exports = server;
