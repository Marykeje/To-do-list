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

const showDrop = document.getElementById("show-drop");

showDrop.add

// const openModal = function () {
// console.log("Button clicked");
// modal.classList.add("open"); //gives the list of css class in the element
// };

function openModal() {
  const clickOpen = document.getElementById("add-btn");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("closeOverlay");
  // const showDrop = document.getElementById("show-drop");

  clickOpen.style.display = "block";
  modal.style.display = "block";
  overlay.style.display = "block";
  showDrop.style.display = "blobk";

  // console.log(modal.style.display)
}
// for the close modal
function closeModal() {
  const closeModal = document.getElementById("cancel-modal");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("closeOverlay");

  closeModal.style.display = "block";
  modal.style.display = "none";
  overlay.style.display = "none";
}
