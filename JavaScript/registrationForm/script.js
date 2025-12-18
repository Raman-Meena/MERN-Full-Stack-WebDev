function showError(id, message) {
  let el = document.getElementById(id);
  let error = document.getElementById(id + "Error");

  if (!error) {
    error = document.createElement("div");
    error.id = id + "Error";
    error.className = "error";
    el.closest(".d-flex").after(error);
  }
  error.innerText = message;
}

function clearError(id) {
  let error = document.getElementById(id + "Error");
  if (error) error.innerText = "";
}

function submit() {
  let isValid = true;

  let name = fullName.value.trim();
  if (!/^[A-Za-z ]{3,}$/.test(name)) {
    showError("fullName", "Enter a valid full name (min 3 letters)");
    isValid = false;
  } else clearError("fullName");

  let emailVal = email.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    showError("email", "Enter a valid email address");
    isValid = false;
  } else clearError("email");

  if (!/^[6-9]\d{9}$/.test(mobile.value)) {
    showError("mobile", "Enter valid 10-digit mobile number");
    isValid = false;
  } else clearError("mobile");

  if (!dob.value) {
    showError("dob", "Date of birth is required");
    isValid = false;
  } else clearError("dob");

  if (!qualification.value) {
    showError("qualification", "Please select qualification");
    isValid = false;
  } else clearError("qualification");

  if (!score.value.trim()) {
    showError("score", "Enter percentage or grade");
    isValid = false;
  } else clearError("score");

  if (!course.value) {
    showError("course", "Please select a course");
    isValid = false;
  } else clearError("course");

  let batchChecked = document.querySelectorAll('input[name="batch"]:checked');
  if (batchChecked.length === 0) {
    showError("course", "Select at least one batch");
    isValid = false;
  }

  let timingChecked = document.querySelector('input[name="timing"]:checked');
  if (!timingChecked) {
    showError("course", "Select preferred timing");
    isValid = false;
  }

  if (!address.value.trim()) {
    showError("address", "Address is required");
    isValid = false;
  } else clearError("address");

  if (!city.value.trim()) {
    showError("city", "City is required");
    isValid = false;
  } else clearError("city");

  if (!/^\d{6}$/.test(pin.value)) {
    showError("pin", "Enter valid 6-digit pin code");
    isValid = false;
  } else clearError("pin");

  if (!/^[A-Za-z ]{3,}$/.test(guardianName.value.trim())) {
    showError("guardianName", "Enter valid guardian name");
    isValid = false;
  } else clearError("guardianName");

  if (!/^[6-9]\d{9}$/.test(guardianNumber.value)) {
    showError("guardianNumber", "Enter valid contact number");
    isValid = false;
  } else clearError("guardianNumber");

  if (!additionalDetails.value) {
    showError("additionalDetails", "Please select an option");
    isValid = false;
  } else clearError("additionalDetails");

  if (!isValid) return;

  let batchValues = Array.from(batchChecked).map((el) => el.value);
  let timingValue = timingChecked.value;

  console.log({
    fullName: name,
    email: emailVal,
    mobile: mobile.value,
    dob: dob.value,
    qualification: qualification.value,
    score: score.value,
    course: course.value,
    batch: batchValues.join(", "),
    timing: timingValue,
    address: address.value,
    city: city.value,
    pin: pin.value,
    guardianName: guardianName.value,
    guardianNumber: guardianNumber.value,
    additionalDetails: additionalDetails.value,
    specialRequirements: specialRequirements.value,
  });

  document
    .querySelectorAll("input, textarea, select")
    .forEach((el) => (el.value = ""));
  document
    .querySelectorAll('input[name="batch"], input[name="timing"]')
    .forEach((el) => (el.checked = false));

  document.querySelectorAll(".error").forEach((el) => el.remove());

  alert("Form Submitted Successfully");
}
