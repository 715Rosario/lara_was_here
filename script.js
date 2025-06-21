let MyName = "Lara";
let MyAge = 13;
let LikesSushi = true;
const PASSWORD = "SOLSTICE";

function greeting(MyName) {
    console.log("Hello", MyName);
}
greeting("Lara");

function saveName() {
    let newName = document.getElementById("greeter").value; //text field value from user//
    document.getElementById("username").textContent = newName;
    document.getElementById("greeter").value = "";
}

document.querySelectorAll('.accordion-header').forEach( function(button) { //retrieve each accordion header button (getting buttons labelled "accordion-header")
    button.addEventListener('click', function() { //if you click, do function
        let content = this.nextElementSibling; //retrieves accordion-content (accordion-content goes into "content")
        content.style.display = (content.style.display === 'block') ? 'none' : 'block' ; //if it's shown, hide it and vice versa
    });
});

function validatePass() {
    const login = document.getElementById('password');
    const msg = document.getElementById('message');
    const hiddenEntries = document.querySelectorAll('.hidden');

    if (login.value === PASSWORD) {
        msg.textContent="Password confirmed.";
        hiddenEntries.forEach(function(entry) {entry.style.display ='flex';});
    } else {
        hiddenEntries.forEach(function(entry) {entry.style.display ='none';});
        msg.textContent='Incorrect password.';
    }

    login.value = '';
}