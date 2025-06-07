let MyName = "Lara";
let MyAge = 13;
let LikesSushi = true;

function greeting(MyName) {
    console.log("Hello", MyName);
}
greeting("Lara");

function saveName() {
    let newName = document.getElementById("greeter").value; //text field value from user//
    document.getElementById("username").textContent = newName;
    document.getElementById("greeter").value = "";
}
