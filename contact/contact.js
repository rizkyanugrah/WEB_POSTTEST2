// SAVE DATA DARI FORM
const submit = document.getElementById("kirim");
submit.onclick = Save_data;

function Save_data(e) {
  e.preventDefault();

  const nama_lengkap = document.getElementById("nama_lengkap").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const jenis_ps = document.getElementById("jenis_ps").value;
  const jenis_kelamin = document.getElementById("jenis_kelamin").value;
  const pesan = document.getElementById("pesan").value;

  // mengambil data users yang sudah ada di local storage
  var form_data = JSON.parse(sessionStorage.getItem("form_data")) || [];

  // menambahkan data users baru ke dalam array
  form_data.push({
    nama_lengkap: nama_lengkap,
    email: email,
    phone: phone,
    jenis_ps: jenis_ps,
    jenis_kelamin: jenis_kelamin,
    pesan: pesan,
  });

  // menyimpan data users ke dalam local storage
  sessionStorage.setItem("form_data", JSON.stringify(form_data));
  alert("Terima Kasih Telah Menghubungi!");
  window.location.href = "output.html";
}
