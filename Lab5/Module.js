// Lab5/Module.js
const moduleObj = {
  id: "M1",
  name: "NodeJS Module",
  description: "Learn server-side JavaScript",
  course: "CS4550",
  score: 100,
  completed: false,
};

export default function ModuleRoutes(app) {
  app.get("/lab5/module", (req, res) => {
    res.json(moduleObj);
  });

  app.get("/lab5/module/name", (req, res) => {
    res.json(moduleObj.name);
  });

  app.get("/lab5/module/name/:newName", (req, res) => {
    moduleObj.name = req.params.newName;
    res.json(moduleObj);
  });

  app.get("/lab5/module/score/:newScore", (req, res) => {
    moduleObj.score = req.params.newScore;
    res.json(moduleObj);
  });

  app.get("/lab5/module/completed/:newCompleted", (req, res) => {
    moduleObj.completed = req.params.newCompleted;
    res.json(moduleObj);
  });

}
