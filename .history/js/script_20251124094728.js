function cancel() {
}
let cancel = (document.getElementById("cancel").style.display = "none");

// getting the elements
let open = document.getElementById("add");
let modal = document.getElementByIdby("modal");
let cancelModal = document.getElementById("cancelModal");

// when button is opened
// modal.addEventListener("click", () => {
//   modal.style.display = "block"; // show modal
// });

const openModal = function() {
  console.log("Button clicked");
  modal.classList.add("open"); //gives the list of css class in the element
  
}


