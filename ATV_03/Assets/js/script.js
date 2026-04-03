

const form = document.getElementById("item-form");
const input = document.getElementById("item-input");
const ul = document.getElementById("shopping-list");
const alertBox = document.getElementById("alert");
const closeAlert = document.getElementById("close-alert");


form.onsubmit = (event) => {
    event.preventDefault();
    
    const itemName = input.value.trim();
    if (itemName !== "") {
        addItem(itemName);
        input.value = ""; 
    }
};

function addItem(text) {
    
    const li = document.createElement("li");
    li.classList.add("item-list");

    li.innerHTML = `
        <div class="item-content">
            <input type="checkbox">
            <span>${text}</span>
        </div>
        <button class="remove-btn">
            <img src="Assets/img/lixo.png" alt="Remover">
        </button>
    `;

    
    const removeBtn = li.querySelector(".remove-btn");
    removeBtn.onclick = () => {
        li.remove();
        showAlert();
    };

    ul.appendChild(li);
}


function showAlert() {
    alertBox.classList.remove("hidden");
    
    setTimeout(() => {
        alertBox.classList.add("hidden");
    }, 3000);
}

closeAlert.onclick = () => {
    alertBox.classList.add("hidden");
};