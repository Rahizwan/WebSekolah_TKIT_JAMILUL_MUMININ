document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const toggle = document.getElementById("togglePassword");

  // 👁️ Toggle password visibility
  toggle.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
  });

  // 🔐 Handle login
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = username.value.trim();
    const pass = password.value.trim();

    if (
      (user === "admin" && pass === "admin123") ||
      (user === "guru" && pass === "guru123") ||
      (user === "orangtua" && pass === "orangtua123")
    ) {
      alert(`Selamat datang, ${user}!`);
      window.location.href = "../profil/index.html"; // arahkan ke profil sekolah
    } else {
      alert("Username atau kode akses salah. Silakan coba lagi.");
    }
  });
});
