function addUser() {
    username_name = document.getElementById("username").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}