let body = document.body;

if (location.pathname.includes("index.html")) {
    alert("Welcome to my website!");

    let userTitle = prompt("Create a custom title for this page:");
    let userMessage = prompt("Write a short message to display:");

    let newTitle = document.createElement("h2");
    newTitle.textContent = userTitle;
    newTitle.style.textAlign = "center";
    newTitle.style.fontSize = "45px";
    newTitle.style.color = "white";
    body.appendChild(newTitle);

    let newMessage = document.createElement("p");
    newMessage.textContent = userMessage;
    newMessage.style.fontSize = "28px";
    body.appendChild(newMessage);
}

let btn = document.createElement("button");
btn.textContent = "Change Theme";
btn.style.display = "block";
btn.style.margin = "20px auto";
btn.style.padding = "10px 20px";
btn.style.fontSize = "20px";
btn.onclick = function () { changeTheme(this); };
body.appendChild(btn);

let infoBox = document.createElement("div");
infoBox.id = "infoBox";
infoBox.style.textAlign = "center";
infoBox.style.fontSize = "25px";
infoBox.style.marginTop = "10px";
body.appendChild(infoBox);

let inputBox = document.createElement("input");
inputBox.type = "text";
inputBox.placeholder = "Type something...";
inputBox.style.display = "block";
inputBox.style.margin = "15px auto";
inputBox.style.fontSize = "20px";
inputBox.onkeyup = updateLiveText;
body.appendChild(inputBox);

function changeTheme(btn) {
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "#a8c8dd";
        body.style.color = "white";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "yellow";
        btn.style.backgroundColor = "yellow";
        btn.style.color = "black";
    }
}

function updateLiveText() {
    let info = document.getElementById("infoBox");
    info.textContent = inputBox.value;
}
