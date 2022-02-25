function changeTheme() {
    let classList = document.body.classList;
    let icon = document.getElementsByClassName("changeIcon");
    console.log(icon);
    if (icon[0].innerText === "☾") {
        icon[0].innerHTML = "☀";
    } else {
        icon[0].innerHTML = "☾"
    }
    if (classList.length > 0) {
        classList.remove('dark-theme');
    } else {
        classList.add('dark-theme');
    }
}
