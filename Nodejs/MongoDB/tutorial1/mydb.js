const mongoose = require("mongoose");
const { async } = require("regenerator-runtime");

const url =
  "mongodb+srv://mohamedbenhammo:MkRDppZ7XXAOKh3r@cluster0.c4swlzo.mongodb.net/initialdb?retryWrites=true&w=majority";

main().catch((err) => console.log(err));

// async function main() {
//   await mongoose
//     .connect(url2)
//     .then(() => {
//       console.log("connected");
//     });
// }

async function main() {
  await mongoose.connect(url).then(() => console.log("connected")).useDb("mydb")

  // Creates an un-cached connection to `mydb`
//   const db = conn.useDb("mydb")
  // Creates a cached connection to `mydb2`. All calls to `conn.useDb('mydb2', { useCache: true })` will return the same
  // connection instance as opposed to creating a new connection instance
  // const db2 = conn.useDb('mydb2', { useCache: true });

  /* mongoose.connect(url2, function(err, db) {
    if (err) throw err;
    console.log("New Database created!");
    db.close();
  }); */
}
