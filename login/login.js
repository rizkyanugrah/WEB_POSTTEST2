// LOGIN
const login = document.querySelector(".login");
login.onclick = (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.toLowerCase();
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Semua field harus diisi");
    return false;
  }

  // ngambil nilai array dari localstorage
  const users = JSON.parse(localStorage.getItem("users"));

  //Periksa apakah array users ada dan tidak kosong
  if (users && users.length) {
    // Melakukan perulangan pada array
    for (let i = 0; i < users.length; i++) {
      if (
        email == users[i].email.toLowerCase() &&
        password == users[i].password
      ) {
        window.location.href = "../home/home.html";
        alert("Selamat Anda Berhasil Login");
        // set nama user yg sedang login untuk di tampilkan di halaman berikutnya
        localStorage.setItem("nama_login", users[i].nama);
        return;
      }
    }
  }
  // jika salah penginputan
  alert("Masukkan Email dan Password dengan benar");
  document.getElementById("form").reset();
  document.getElementById("email").focus();
};

const alamat = form_data[i].alamat;
