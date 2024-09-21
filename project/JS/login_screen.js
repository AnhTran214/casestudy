let acc = "admin";
let pass = "1234";
let link = "";
function login(){
    let tk = document.getElementById("account").value;
    let mk = document.getElementById("pass").value;
    if(tk == acc && mk == pass){
        alert("Đăng nhập thành công");
        document.getElementById("linkLogin").href = "../HTML/main.html";
    } else if(tk == "" && mk == "" || tk == "" || mk == ""){
        alert("Không được để trống");
    } else
    {
        alert("Tài khoản hoặc mật khẩu không đúng. Mời bạn kiểm tra lại!");
    }
}