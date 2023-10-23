var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var phoneNumber = document.getElementById("mobile");
var dob = document.getElementById("dob");
var country = document.getElementById("country");
var profession = document.getElementById("profession");
const gender = [
  ...document.querySelectorAll('input[name="gender"]:checked'),
].map((el) => el.value);
//var gender = document.getElementsByName("gender").value;
function saveData() {
  alert(
    firstName.value +
      " " +
      lastName.value +
      " " +
      gender +
      " " +
      email.value +
      " " +
      phoneNumber.value +
      " " +
      country.value +
      " " +
      profession.value +
      " " +
      dob.value +
      " " +
      phoneNumber.value
  );
}
// function showPopup(formData) {
//   const popup = document.getElementById("popup");
//   const popupContent = document.getElementById("popupContent");
//   popupContent.innerHTML = `<h2>Submitted Data</h2>`;
//   for (const key in formData) {
//     popupContent.innerHTML = `<p><strong>${key}:</strong>${formData[key]}</p>`;
//   }
//   popup.classList.remove("hidden");
// }

// const saveData = document.getElementById("submit");

// saveData.addEventListener("click", () => {
//   alert("Hii");
//   const firstName = document.getElementById("firstName").value;
//   const lastName = document.getElementById("lastName").value;
//   const email = document.getElementById("email").value;
//   const phone = document.getElementById("mobail").value;
//   const dob = document.getElementById("dob").value;
//   const country = document.getElementById("country").value;
//   const profession = document.getElementById("profession").value;
//   const gender = [
//     ...document.querySelectorAll('input[name="gender"]:checked'),
//   ].map((el) => el.value);
//   alert(
//     firstName +
//       " " +
//       LastName +
//       " " +
//       gender +
//       " " +
//       email +
//       " " +
//       dob +
//       " " +
//       country +
//       " " +
//       mobail +
//       " " +
//       profession
//   );
//   if (
//     !firstName ||
//     !lastName ||
//     !gender ||
//     !country ||
//     !email ||
//     !phone ||
//     !dob ||
//     !profession
//   ) {
//     alert("All fildes are required");
//     return;
//   }

//   const formData = {
//     FirstName: firstName,
//     LastName: lastName,
//     Gender: gender.join(","),
//     Email: email,
//     "Phone Number": phone,
//     Dob: dob,
//     Country: country,
//     Profession: profession,
//   };
//   showPopup(formData);
// });

// document.getElementById("closePopup").addEventListener("click", function () {
//   document.getElementById("popup").classList.add("hidden");
// });
