// LOGIN
const login = document.querySelector('.login');
login.onclick = (e) => {
  e.preventDefault();
  const emailAddress = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (emailAddress === "" || password === "") {
    alert("Semua field harus diisi");
    return false;
}

  // ngambil nilai array dari localstorage
  const users = JSON.parse(localStorage.getItem("users"));

  //Periksa apakah array users ada dan tidak kosong
  if (users && users.length) {
    // Melakukan perulangan pada array 
    for (let i = 0; i < users.length; i++) {
      if (emailAddress == users[i].email && password == users[i].password) {
        window.location.href="../home/home.html";
        alert("Selamat Anda Berhasil Login");
        return; 
      }
    }
  }
  // jika salah penginputan
  alert("Masukkan email dan password dengan benar");
  document.getElementById('form').reset();
  document.getElementById('email').focus();
}