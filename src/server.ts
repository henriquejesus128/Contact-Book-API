import app from "./app";
// import AppDataSource from "./data-source";
// import "dotenv/config";

app.listen(3000, async () => {
  console.log("Server running in port 3000");
});

// (async () => {
//   await AppDataSource.initialize()
//     .then(() => {
//       console.warn(`Database connected!`);
//       app.listen(process.env.PORT, () => {
//         console.warn(`Server running in port ${process.env.PORT}`);
//       });
//     })
//     .catch((err) => {
//       console.error("Error during Data Source initialization", err);
//     });
// })();
