export default function HelloClient(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5!");
  });
}