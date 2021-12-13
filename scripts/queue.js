window.onload = () => {
    let addingForm = document.querySelector("#addingForm");
    addingForm.addEventListener("submit", addName);
    names.addEventListener("click", deleteName);
    loadNames();
};

function loadNames() {
    if (localStorage.length != 0) {
        let sortedKeys = Object.keys(localStorage).sort()
        
        for(let i = 0; i < sortedKeys.length; i++) {
                let names_names = JSON.parse(localStorage.getItem(sortedKeys[i]));
                let li = document.createElement("li");
                let deleteButton = document.createElement("button");
                deleteButton.className = "delete";
                deleteButton.appendChild(document.createTextNode("Delete"));
                li.appendChild(document.createTextNode(names_names));
                li.appendChild(deleteButton);
                names.appendChild(li);
        }
    } 
}
  
function addName(e) {
    e.preventDefault();
    let newName = document.getElementById("name").value;
    if (newName == "" || newName == null) {
        return false;
    } else {
        // let index;
        // if (localStorage.length === 0) {
        //     index = 0;
        // } else {
        //     index = Object.keys(localStorage).sort()[Object.keys(localStorage).length];
        // }
        localStorage.setItem(localStorage.length, JSON.stringify(newName));
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
        let sortedKeys = Object.keys(localStorage).sort()
        for(let i = 0; i < names.childNodes.length; i++) {
            if (names.childNodes[i] === li) {
                names.removeChild(li);
                localStorage.removeItem(sortedKeys[i])
                break;
            }
        }
    }
}
  
