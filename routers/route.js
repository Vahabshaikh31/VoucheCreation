import { Router } from "express";
import { RegisterUser } from "../schema/registerUser.js";

const router = Router();

// Get Users Route
router.get("/getuser", async (req, res) => {
  try {
    const users = await RegisterUser.find(); // Fetch all users
    res.status(200).json(users); // Send the list of users as JSON
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err });
  }
});

// Add a New User Route
router.post("/adduser", async (req, res) => {
  const {
    studentID,
    studentName,
    address1,
    address2,
    city,
    state,
    department,
    entryCreatedBy,
    entryCreatedByID,
  } = req.body;

  try {
    const newUser = new RegisterUser({
      studentID,
      studentName,
      address1,
      address2,
      city,
      state,
      department,
      entryCreatedBy,
      entryCreatedByID,
    });

    const savedUser = await newUser.save(); // Save the user to the database
    res
      .status(201)
      .json({ message: "User added successfully", user: savedUser });
  } catch (err) {
    res.status(500).json({ message: "Error adding user", error: err });
  }
});

export default router;

// router.get("/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`Fetching details for user with ID: ${userId}`);
// });

// router.put("/:id", (req, res) => {
//   const userId = req.params.id;
//   const updatedData = req.body;
//   res.send(`User ${userId} updated with data: ${JSON.stringify(updatedData)}`);
// });

// router.delete("/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`User with ID ${userId} deleted!`);
// });
