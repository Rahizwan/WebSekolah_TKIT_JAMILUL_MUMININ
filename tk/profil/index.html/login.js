document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const kodeAkses = document.getElementById("kodeAkses").value.trim();

  // Contoh kredensial sederhana (nanti bisa diganti ke PHP/MySQL)
  const validUser = "admin";
  const validPass = "12345";

  if (username === validUser && kodeAkses === validPass) {
    alert("Login berhasil! Selamat datang di halaman TKIT Jamilul Mu'minin.");
    window.location.href = "../profil/index.html"; // arahkan ke profil
  } else {
    alert("Username atau kode akses salah! Silakan coba lagi.");
  }
});
