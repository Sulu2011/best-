alert("Salam!Saytı açmaq biraz çətin oldu deyəsən!Çox sağ ol açdığına görə!😄");
let isDarkMode = false;

function checkAuth() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let code = document.getElementById("code").value;

    if (name === "Süleyman" && age === "13" && code === "2010") {
        document.getElementById("auth-container").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Təəssüf ki, məlumatlarım düzgün deyil.");
    }
}

document.getElementById("sidebar-toggle").addEventListener("click", function () {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open"); // Sidebar açılıb bağlanır
});

document.getElementById("theme-toggle").addEventListener("click", function () {
    isDarkMode = !isDarkMode;
    document.body.style.backgroundColor = isDarkMode ? "#2c3e50" : "#fff";
    document.body.style.color = isDarkMode ? "#fff" : "#333";
    let sidebar = document.getElementById("sidebar");
    sidebar.style.backgroundColor = isDarkMode ? "#34495e" : "#2c3e50";
});
