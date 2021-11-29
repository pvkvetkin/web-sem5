window.onload = () => {
    const addingForm = document.querySelector("#addingForm");
    let names = document.getElementById("names");
    addingForm.addEventListener("submit", addName);
    names.addEventListener("click", deleteName);
};
  
function addName(e) {
    e.preventDefault();
    let newName = document.getElementById("name").value;
    if (newName == "" || newName == null) {
        return false;
    } else {
        document.getElementById("name").value = "";
    }
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(document.createTextNode(newName));
    li.appendChild(deleteButton);
    names.appendChild(li);
}
  
function deleteName(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        let li = e.target.parentNode;
        names.removeChild(li);
    }
}
  
