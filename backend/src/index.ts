import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import myUserRoute from "./routes/MyUserRoute";
import myRestuarantRoute from "./routes/MyRestaurantRoute";
import restaurantRoute from "./routes/RestaurantRoute";
import orderRoute from "./routes/OrderRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
  res.send({ message: "health OK" });
});

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestuarantRoute);
app.use("/api/restaurant", restaurantRoute);
app.use("/api/order", orderRoute);

app.listen(7000, () => {
  console.log("Server started on localhost:7000");
});
