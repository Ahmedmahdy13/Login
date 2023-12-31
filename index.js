var MyUsers;
if (localStorage.getItem("MyUsers") != null) {
  MyUsers = JSON.parse(localStorage.getItem("MyUsers"));
} else {
  MyUsers = [];
}
function login() {

  var inputEmail = document.getElementById("Email");
  var inputPassword = document.getElementById("Password");
  var WrongMessage = document.getElementById("WrongMessage");
  var Email = inputEmail.value;
  var Password = inputPassword.value;
  var loginAccount = MyUsers.find(x=>x.email == Email);
  if (loginAccount!=undefined && loginAccount.password==Password) {
    localStorage.setItem("loginAccount", JSON.stringify(loginAccount));
    window.location.href ="file:///Users/mac/Desktop/Assigment%204%20js/index3.html";
  }else
  {
    WrongMessage.className="text-danger text-center d-block mb-3 fw-bold"

  }

}

function SignUp() {
  var SignName = document.getElementById("SignName");
  var SignEmail = document.getElementById("SignEmail");
  var SignPassword = document.getElementById("SignPassword");
  var SuccessMessage = document.getElementById("SuccessMessage");
  var Email = SignEmail.value;
  var Password = SignPassword.value;
  var Name = SignName.value;
  var checkEmailFound = MyUsers.find(x=>x.email == Email);
  if (Email != "" &&Password != "" &&Name != "" &&checkEmailFound == undefined){
    var newUser = {
      name: Name,
      email: Email,
      password: Password,
    };
    MyUsers.push(newUser);
    localStorage.setItem("MyUsers", JSON.stringify(MyUsers));
  SuccessMessage.className="text-success text-center d-block mb-3 fw-bold"
  
  clearForm()

  }else{
    ExistMessage.className="text-warning text-center d-block mb-3 fw-bold"
  }
}

function clearForm(){
    SignName.value = "";
    SignEmail.value = "";
    SignPassword.value = "";
}
