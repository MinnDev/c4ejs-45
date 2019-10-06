button.addEventListener("click", function() {
    let newName = document.getElementById("input").value;
    document.getElementById("listName").innerHTML += `<li>${newName}</li>`;
    document.getElementById("input").value = " ";
});