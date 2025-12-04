function cancel() {}

// getting the elements
// let cancel = (document.getElementById("cancel").style.display = "none");

// let open = document.getElementById("add");
// let modal = document.getElementByIdby("openModal");
// let cancelModal = document.getElementById("cancelModal");

// when button is opened
// modal.addEventListener("click", () => {
// open.style.display = ""
// modal.style.display = "block"; // show modal
// });

// const openModal = function () {
// console.log("Button clicked");
// modal.classList.add("open"); //gives the list of css class in the element
// };

function openModal() {
  const clickOpen = document.getElementById("add-btn");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("closeOverlay");

  // const closeModal = document.getElementById("cancelModal");

  clickOpen.style.display = "block";
  modal.style.display = "block";
  overlay.style.display = "block";
  // closeModal.style.display.hidden = "";

  // console.log(modal.style.display)
}

// openModal()
// for the close modal
function closeModal() {
  const closeModal = document.getElementById("cancel-modal");

  closeModal.style.display = "";
}
