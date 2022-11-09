// $('#menuhamburguesa').on('click', function () {
//   $('.menuprincipal ul').addClass('mostrar');
// });

const openMenu = () =>
  document.getElementById("openModal").classList.add("modalOpen");

const closeMenu = () => {
  document.getElementById("openModal").classList.remove("modalOpen");
  document.getElementById("menu").classList.add("ocultar");
};

document.getElementById("menuhamburguesa").addEventListener("click", openMenu);
document.getElementById("close-modal").addEventListener("click", closeMenu);
document.getElementById("close1").addEventListener("click", closeMenu);
document.getElementById("close2").addEventListener("click", closeMenu);
document.getElementById("close3").addEventListener("click", closeMenu);
document.getElementById("close4").addEventListener("click", closeMenu);
document.getElementById("close5").addEventListener("click", closeMenu);

