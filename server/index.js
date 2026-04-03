import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

const startServer = async () => {
  await connectDB();
  console.log("starting kit-ecom server");

  app.listen(6420, "127.0.0.1", () => {
    console.log(`Server running`);
  });
};
startServer();
