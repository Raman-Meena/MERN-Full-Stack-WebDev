function submit() {
  const name = document.getElementById("name").value.trim();
  const college = document.getElementById("college").value.trim();
  const branch = document.getElementById("branch").value.trim();
  const semester = document.getElementById("semester").value;
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("courseField").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  const data = {
    Name: name,
    College: college,
    Branch: branch,
    Semester: semester,
    Phone: phone,
    Email: email,
    Gender: gender,
    Course: course,
  };

  if (
    !name ||
    !college ||
    !branch ||
    !semester ||
    !phone ||
    !email ||
    !gender
  ) {
    alert("Please fill all fields");
    return;
  }

  console.log(data);

  document.getElementById("name").value = "";
  document.getElementById("college").value = "";
  document.getElementById("branch").value = "";
  document.getElementById("semester").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("courseField").value = "";

  alert(`Thank you for Enrolling, ${name}!`);
}

function submitContact() {
  const fName = document.getElementById("firstName").value.trim();
  const lName = document.getElementById("lastName").value.trim();
  const em = document.getElementById("email").value.trim();
  const message = document.getElementById("mssg").value.trim();

  if (!fName) {
    alert("Name is required");
    return;
  }

  if (!em || !em.includes("@")) {
    alert("Valid email is required");
    return;
  }

  if (!message || message.length < 10) {
    alert("Message must be at least 10 characters");
    return;
  }

  console.log("Contact Details:");
  console.log("Name:", fName,lName);
  console.log("Email:", em);
  console.log("Message:", message);

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mssg").value = "";


  alert(`Thank you for contacting us, ${fName}!`);
}
