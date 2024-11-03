import mongoose from "mongoose";

// Defining the Schema
const RegisterUserSchema = new mongoose.Schema(
  {
    studentID: { type: String, required: true },
    studentName: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    department: { type: String, required: true },
    entryCreatedBy: { type: String, required: true },
    entryCreatedByID: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const RegisterUser = mongoose.model("RegisterUser", RegisterUserSchema);
