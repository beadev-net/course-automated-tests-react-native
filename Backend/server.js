const app = require("./app");
const database = require("./configs/database");

const port = process.env.PORT || 7878;

const server = app.listen(port, () => {
  database.connect().catch(console.error);
  console.log(`Example app listening on port ${port}`);

  process.on("SIGINT", () => {
    server.close();
    database.close();
  });
});
module.exports = server;
