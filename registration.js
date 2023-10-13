let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];//to get items from local storage
console.log(getUsersdata); //JSON data type to store data in backend or local storage

function Register() {
    let username = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userData = {
        username:username,
        mobile:mobile,
        email:email,
        password:password,
    }
    //created an array to store details of users stringify the user array
    let users = [...getUsersdata, userData];
    //Send to local storage the details
    localStorage.setItem("usersdata", JSON.stringify(users));

    alert("Registration Successfull");
    window.location.href = "login.html"
}
