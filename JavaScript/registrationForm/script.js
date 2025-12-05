function submit() {
  const fn = document.getElementById("fullName").value;
  const em = document.getElementById("email").value;
  const mb = document.getElementById("mobile").value;
  const dob = document.getElementById("dob").value;
  const ql = document.getElementById("qualification").value;
  const sr = document.getElementById("score").value;
  const cr = document.getElementById("course").value;
  let pb = [];
  document
    .querySelectorAll("input[name='batch']:checked")
    .forEach((element) => {
      pb.push(element.value);
    });
  const pt = document.querySelector("input[name='timing']:checked").value;
  const ad = document.getElementById("address").value;
  const ct = document.getElementById("city").value;
  const pn = document.getElementById("pin").value;
  const gn = document.getElementById("guardianName").value;
  const gnu = document.getElementById("guardianNumber").value;
  const ade = document.getElementById("additionalDetails").value;
  const sre = document.getElementById("specialRequirements").value;

  console.log("Full Name: " + fn);
  console.log("Email: " + em);
  console.log("Mobile: " + mb);
  console.log("Date of Birth: " + dob);
  console.log("Qualification: " + ql);
  console.log("Score: " + sr);
  console.log("Course: " + cr);
  console.log("Preferred Batch: " + pb.join(", "));
  console.log("Preferred Timing: " + pt);
  console.log("Address: " + ad);
  console.log("City: " + ct);
  console.log("Pin Code: " + pn);
  console.log("Guardian Name: " + gn);
  console.log("Guardian Number: " + gnu);
  console.log("How did you hear about us?: " + ade);
  console.log("Special Requirements: " + sre);

  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("qualification").value = "";
  document.getElementById("score").value = "";
  document.getElementById("course").value = "";
  document.querySelector("input[name='timing']:checked").value = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value = "";
  document.getElementById("pin").value = "";
  document.getElementById("guardianName").value = "";
  document.getElementById("guardianNumber").value = "";
  document.getElementById("additionalDetails").value = "";
  document.getElementById("specialRequirements").value = "";
}
