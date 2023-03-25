// REGISTER
const register = document.getElementById("regis");
register.onclick = registerr;

function registerr(e) {
  e.preventDefault();
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;

  if (nama === "" || email === "" || pass === "") {
    alert("Semua field harus diisi");
    return false;
}

if (email.match(mailformat)){
   // mengambil data users yang sudah ada di local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // menambahkan data users baru ke dalam array
    users.push({nama: nama, email: email, password: pass});

    // menyimpan data users ke dalam local storage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Selamat Anda Telah Berhasil Daftar");
    window.location.href = "../login/login.html";
} else {
  alert("Masukkan email yang valid");
  document.getElementById('email').focus();
}
   
}
