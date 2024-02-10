function showDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
}
// Close the dropdowns if the user clicks outside of them
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-input')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function taxi() {
    document.getElementById("pop-inst").style.display = "block";
}