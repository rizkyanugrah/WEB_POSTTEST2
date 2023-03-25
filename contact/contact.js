// SAVE DATA DARI FORM
const submit = document.getElementById("submit");
submit.onclick = Save_data;

function Save_data(e) {
  e.preventDefault();
  if (!$("#agree_checkbox").prop("checked")) {
    $("#agree_chk_error").show();
  } else {
    $("#agree_chk_error").hide();
    const nama_lengkap = document.getElementById("nama_lengkap").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const jenis_ps = document.getElementById("jenis_ps").value;
    const jenis_kelamin = $(
      "input[type='radio'][name='jenis_kelamin']:checked"
    ).val();
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
}
