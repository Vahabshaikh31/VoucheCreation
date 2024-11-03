document
  .getElementById("studentMasterForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const studentData = {
      studentID: document.getElementById("studentId").value,
      studentName: document.getElementById("studentName").value,
      address1: document.getElementById("address1").value,
      address2: document.getElementById("address2").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      department: document.getElementById("department").value,
      entryCreatedBy: document.getElementById("entryCreatedBy").value,
      entryCreatedByID: document.getElementById("entryCreatedById").value,
    };

    try {
      // Make a POST request to your API
      const response = await fetch("http://localhost:3000/api/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });

      // Handle the response
      if (response.ok) {
        const data = await response.json();
        alert(data.message); // Display success message
        // Optionally, reset the form
        document.getElementById("studentMasterForm").reset();
      } else {
        const errorData = await response.json();
        alert("Error: " + errorData.message); // Display error message
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  });
