let soundEnabled = true;

function playSound(id) {
  if (!soundEnabled) return;
  const sound = document.getElementById(id);
  if (!sound) return;
  sound.currentTime = 0;
  sound.play();
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  const btn = document.getElementById("soundToggle");

  if (soundEnabled) {
    btn.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
  } else {
    btn.innerHTML = '<i class="bi bi-volume-mute-fill"></i>';
  }
}

const stateDetails = {
  "Andhra Pradesh": {
    capital: "Amaravati",
    language: "Telugu",
    population: "≈ 5.3 Crore",
    area: "162,970 km²",
    speciality: "Coastal state with major IT & ports",
  },
  "Arunachal Pradesh": {
    capital: "Itanagar",
    language: "English (official), Hindi",
    population: "≈ 15 Lakh",
    area: "83,743 km²",
    speciality: "Land of the Rising Sun of India",
  },
  Assam: {
    capital: "Dispur",
    language: "Assamese",
    population: "≈ 3.6 Crore",
    area: "78,438 km²",
    speciality: "Tea gardens & Brahmaputra river",
  },
  Bihar: {
    capital: "Patna",
    language: "Hindi, Bhojpuri, Maithili",
    population: "≈ 13 Crore",
    area: "94,163 km²",
    speciality: "Ancient learning center (Nalanda)",
  },
  Chhattisgarh: {
    capital: "Raipur",
    language: "Hindi, Chhattisgarhi",
    population: "≈ 3 Crore",
    area: "135,192 km²",
    speciality: "Mineral-rich state with forests",
  },
  Delhi: {
    capital: "New Delhi",
    language: "Hindi, English",
    population: "≈ 2 Crore",
    area: "1,484 km²",
    speciality: "Capital Territory of India",
  },
  Gujarat: {
    capital: "Gandhinagar",
    language: "Gujarati",
    population: "≈ 6.8 Crore",
    area: "196,024 km²",
    speciality: "Vibrant business & coastal state",
  },
  Haryana: {
    capital: "Chandigarh",
    language: "Hindi, Haryanvi",
    population: "≈ 3 Crore",
    area: "44,212 km²",
    speciality: "Major agricultural & industrial hub",
  },
  "Himachal Pradesh": {
    capital: "Shimla (Summer), Dharamshala (Winter)",
    language: "Hindi, Pahari",
    population: "≈ 75 Lakh",
    area: "55,673 km²",
    speciality: "Hill state with popular tourist spots",
  },
  "Jammu and Kashmir": {
    capital: "Srinagar (Summer), Jammu (Winter)",
    language: "Kashmiri, Dogri, Urdu, Hindi",
    population: "≈ 1.25 Crore",
    area: "~55,000 km² (Indian-administered)",
    speciality: "Famous for scenic mountains & lakes",
  },
  Jharkhand: {
    capital: "Ranchi",
    language: "Hindi, regional tribal languages",
    population: "≈ 4 Crore",
    area: "79,714 km²",
    speciality: "Mineral-rich with dense forests",
  },
  Karnataka: {
    capital: "Bengaluru",
    language: "Kannada",
    population: "≈ 7 Crore",
    area: "191,791 km²",
    speciality: "IT hub & diverse geography",
  },
  Kerala: {
    capital: "Thiruvananthapuram",
    language: "Malayalam",
    population: "≈ 3.5 Crore",
    area: "38,852 km²",
    speciality: "Backwaters, literacy & healthcare",
  },
  Laddakh: {
    capital: "Leh",
    language: "Ladakhi, Hindi, English",
    population: "≈ 3 Lakh",
    area: "59,146 km²",
    speciality: "High-altitude cold desert region",
  },
  "Madhya Pradesh": {
    capital: "Bhopal",
    language: "Hindi",
    population: "≈ 8.5 Crore",
    area: "308,245 km²",
    speciality: "Heart of India with rich heritage",
  },
  Maharashtra: {
    capital: "Mumbai",
    language: "Marathi",
    population: "≈ 12.5 Crore",
    area: "307,713 km²",
    speciality: "Financial & industrial powerhouse",
  },
  Manipur: {
    capital: "Imphal",
    language: "Meitei (Manipuri)",
    population: "≈ 30 Lakh",
    area: "22,327 km²",
    speciality: "Cultural dances & Loktak Lake",
  },
  Meghalaya: {
    capital: "Shillong",
    language: "English, Khasi, Garo",
    population: "≈ 35 Lakh",
    area: "22,429 km²",
    speciality: "High rainfall & living root bridges",
  },
  Mizoram: {
    capital: "Aizawl",
    language: "Mizo",
    population: "≈ 12 Lakh",
    area: "21,081 km²",
    speciality: "Hill state with high literacy",
  },
  Nagaland: {
    capital: "Kohima",
    language: "English (official), Nagamese",
    population: "≈ 23 Lakh",
    area: "16,579 km²",
    speciality: "Tribal culture & Hornbill Festival",
  },
  Odisha: {
    capital: "Bhubaneswar",
    language: "Odia",
    population: "≈ 4.7 Crore",
    area: "155,707 km²",
    speciality: "Temples & long coastline",
  },
  Punjab: {
    capital: "Chandigarh",
    language: "Punjabi",
    population: "≈ 3 Crore",
    area: "50,362 km²",
    speciality: "Land of five rivers & agriculture",
  },
  Rajasthan: {
    capital: "Jaipur",
    language: "Hindi, Rajasthani dialects",
    population: "≈ 8 Crore",
    area: "342,239 km²",
    speciality: "Largest state, forts & deserts",
  },
  Sikkim: {
    capital: "Gangtok",
    language: "Nepali, English, Sikkimese",
    population: "≈ 7 Lakh",
    area: "7,096 km²",
    speciality: "Small Himalayan state with Kanchenjunga",
  },
  "Tamil Nadu": {
    capital: "Chennai",
    language: "Tamil",
    population: "≈ 7.5 Crore",
    area: "130,058 km²",
    speciality: "Dravidian temples & industry",
  },
  Telangana: {
    capital: "Hyderabad",
    language: "Telugu, Urdu",
    population: "≈ 3.8 Crore",
    area: "112,077 km²",
    speciality: "IT & pharma hub",
  },
  Tripura: {
    capital: "Agartala",
    language: "Bengali, Kokborok",
    population: "≈ 40 Lakh",
    area: "10,486 km²",
    speciality: "Cultural mix with forests & hills",
  },
  "Uttar Pradesh": {
    capital: "Lucknow",
    language: "Hindi",
    population: "≈ 24 Crore",
    area: "243,286 km²",
    speciality: "Most populous state with many holy cities",
  },
  Uttarakhand: {
    capital: "Dehradun",
    language: "Hindi, Garhwali, Kumaoni",
    population: "≈ 1.2 Crore",
    area: "53,483 km²",
    speciality: "Devbhumi with Himalayan shrines",
  },
  "West Bengal": {
    capital: "Kolkata",
    language: "Bengali",
    population: "≈ 10 Crore",
    area: "88,752 km²",
    speciality: "Cultural hub with rivers & plains",
  },
};

function showPanel() {
  const panel = document.getElementById("infoPanel");
  panel.style.display = "block";
  panel.classList.remove("show"); 
  void panel.offsetWidth;
  panel.classList.add("show");
}

function hidePanel() {
  const panel = document.getElementById("infoPanel");
  panel.classList.remove("show");
  panel.style.display = "none";
}

function showStateInfo(state) {
  const panel = document.getElementById("infoPanel");
  const info = stateDetails[state];

  if (!info) {
    panel.innerHTML = `
      <h4>${state}</h4>
      <p>Details not available yet.</p>
    `;
  } else {
    panel.innerHTML = `
      <h4>${state}</h4>
      <p>🏛️ <strong>Capital:</strong> ${info.capital}</p>
      <p>🗣️ <strong>Language:</strong> ${info.language}</p>
      <p>👥 <strong>Population:</strong> ${info.population}</p>
      <p>📏 <strong>Area:</strong> ${info.area}</p>
      <p>⭐ <strong>Speciality:</strong> ${info.speciality}</p>
    `;
  }

  showPanel();
}

function placeFlag(state) {
  const map = document.getElementById("indiaMap");
  const info = stateDetails[state];
  if (!info) {
    console.warn("No details / flag position for:", state);
    return;
  }

  const flag = document.createElement("img");
  flag.src =
    "https://tse1.mm.bing.net/th/id/OIP.Xh2vVpc6mC3cKTY4uNk95gHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3";
  flag.className = "flag";
  flag.title = `${state}, Capital: ${info.capital}`;

  flag.addEventListener("click", () => {
    showStateInfo(state);
  });

  if (state === "Rajasthan") {
    flag.style.top = "38.33%";
    flag.style.left = "25.45%";
  } else if (state === "Gujarat") {
    flag.style.top = "46.67%";
    flag.style.left = "18.18%";
  } else if (state === "Maharashtra") {
    flag.style.top = "58.33%";
    flag.style.left = "29.09%";
  } else if (state === "Madhya Pradesh") {
    flag.style.top = "46.67%";
    flag.style.left = "36.36%";
  } else if (state === "Uttar Pradesh") {
    flag.style.top = "36.67%";
    flag.style.left = "45.45%";
  } else if (state === "Punjab") {
    flag.style.top = "23.33%";
    flag.style.left = "29.09%";
  } else if (state === "Haryana") {
    flag.style.top = "26.67%";
    flag.style.left = "32.73%";
  } else if (state === "Bihar") {
    flag.style.top = "40%";
    flag.style.left = "60%";
  } else if (state === "West Bengal") {
    flag.style.top = "46.67%";
    flag.style.left = "67.27%";
  } else if (state === "Tamil Nadu") {
    flag.style.top = "83.33%";
    flag.style.left = "36.36%";
  } else if (state === "Kerala") {
    flag.style.top = "83.33%";
    flag.style.left = "29.09%";
  } else if (state === "Karnataka") {
    flag.style.top = "70%";
    flag.style.left = "29.09%";
  } else if (state === "Andhra Pradesh") {
    flag.style.top = "71.67%";
    flag.style.left = "36.36%";
  } else if (state === "Telangana") {
    flag.style.top = "63.33%";
    flag.style.left = "38.18%";
  } else if (state === "Odisha") {
    flag.style.top = "55%";
    flag.style.left = "56.36%";
  } else if (state === "Chhattisgarh") {
    flag.style.top = "51.67%";
    flag.style.left = "49.09%";
  } else if (state === "Jharkhand") {
    flag.style.top = "45%";
    flag.style.left = "58.18%";
  } else if (state === "Assam") {
    flag.style.top = "36.67%";
    flag.style.left = "83.64%";
  } else if (state === "Arunachal Pradesh") {
    flag.style.top = "30%";
    flag.style.left = "87.27%";
  } else if (state === "Nagaland") {
    flag.style.top = "36.67%";
    flag.style.left = "88.18%";
  } else if (state === "Manipur") {
    flag.style.top = "40.83%";
    flag.style.left = "86.36%";
  } else if (state === "Mizoram") {
    flag.style.top = "45%";
    flag.style.left = "83.64%";
  } else if (state === "Tripura") {
    flag.style.top = "43.33%";
    flag.style.left = "80%";
  } else if (state === "Meghalaya") {
    flag.style.top = "38.33%";
    flag.style.left = "78.18%";
  } else if (state === "Sikkim") {
    flag.style.top = "33.33%";
    flag.style.left = "69.09%";
  } else if (state === "Uttarakhand") {
    flag.style.top = "25%";
    flag.style.left = "41.82%";
  } else if (state === "Himachal Pradesh") {
    flag.style.top = "20%";
    flag.style.left = "36.36%";
  } else if (state === "Jammu and Kashmir") {
    flag.style.top = "14.17%";
    flag.style.left = "29.09%";
  } else if (state === "Delhi") {
    flag.style.top = "29.17%";
    flag.style.left = "34.91%";
  } else if (state === "Laddakh") {
    flag.style.top = "11.67%";
    flag.style.left = "36.36%";
  } else {
    console.warn("Flag location not set for:", state);
    return;
  }

  map.appendChild(flag);
}


function search() {
  const state = document.getElementById("search").value;
  if (!state) return;

  playSound("soundSearch");
  placeFlag(state);
  showStateInfo(state);
}

function removeAllFlagsOnly() {
  const flags = document.querySelectorAll(".flag");
  flags.forEach((flag) => flag.remove());
}

function addAllFlags() {
  playSound("soundAddAll");
  removeAllFlagsOnly();

  Object.keys(stateDetails).forEach((state) => {
    placeFlag(state);
  });

  const panel = document.getElementById("infoPanel");
  panel.innerHTML = `
    <h4>All States Shown</h4>
    <p>Click on any flag to view details of that state.</p>
  `;
  showPanel();
}

function clearFlags() {
  playSound("soundClear");
  removeAllFlagsOnly();
  hidePanel();
}
