import mongoose from "mongoose";

// MongoDB Connection
export const DatabaseConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vahabs:Svahab3101@cluster0.jb9arqn.mongodb.net/FeesPaySystem?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Connected to MongoDB");
    return true; // Return true if connection is successful
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    return false; // Return false if connection fails
  }
};
