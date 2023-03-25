// ambil data users
const users = JSON.parse(localStorage.getItem("users"));
const nama = users[0]["nama"];

// auto typing
const typed = document.querySelector(".typed");
if (typed) {
  let typed_strings = nama;
  typed_strings = typed_strings.split(",");
  new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 75,
  });
}
