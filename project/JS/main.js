//----------------------------------------------CLASS------------------------------------------------------------------
class Person {
    id;
    name;
    dob;
    gender;
    street;
   constructor(id, name, dob, gender, street) {
       this.id = id;
       this.name = name;
       this.dob = dob;
       this.gender = gender;
       this.street = street;
   }
}
class Teacher extends Person{
    manage;
    constructor(id, name, dob, gender, street,manage) {
        super(id, name, dob, gender, street);
        this.manage = manage;
    }
}
class Student extends Person{
    classX;
    constructor(id, name, dob, gender, street,classX) {
        super(id, name, dob, gender, street);
        this.classX = classX;
    }
}
//-----------------------------------------------VARIABLE---------------------------------------------------------------
let arrStudent = [];
arrStudent.push(new Student(1, "Nguyễn Văn A", "1/1/2007", "Nam", "Tây Ninh", "12A1"));
arrStudent.push(new Student(2, "Nguyễn Thị C ", "2/3/2007", "Nữ", "Tây Ninh", "12A1"));
let dialog = document.getElementById("editValue");
//----------------------------------------------FUNCTION----------------------------------------------------------------
function display() {
    let table = "<table style='width: 100%; text-align: center; border-collapse: collapse'>";
    table += "<tr>";
    table += "<th style='border: 1px solid black'>STT</th>";
    table += "<th style='border: 1px solid black'>Họ và tên</th>";
    table += "<th style='border: 1px solid black'>Ngày tháng năm sinh</th>";
    table += "<th style='border: 1px solid black'>Giới tính</th>";
    table += "<th style='border: 1px solid black'>Địa chỉ</th>";
    table += "<th style='border: 1px solid black'>Lớp</th>";
    table += "</tr>";
    for (let i = 0; i < arrStudent.length; i++) {
        table += `<td style='border: 1px solid black'>${arrStudent[i].id}</td>`;
        table += `<td style='border: 1px solid black'>${arrStudent[i].name}</td>`;
        table += `<td style='border: 1px solid black'>${arrStudent[i].dob}</td>`;
        table += `<td style='border: 1px solid black'>${arrStudent[i].gender}</td>`;
        table += `<td style='border: 1px solid black'>${arrStudent[i].street}</td>`;
        table += `<td style='border: 1px solid black'>${arrStudent[i].classX}</td>`;
        table += `<td><button id="edit" onclick="dialogShow(${i})" type="button">Sửa</button></td>`;
        table += `<td><button id="delete" onclick="deleted(${i})" type="button">Xóa</button></td>`;
        table += "</tr>";
    }

    table += "</table>"
    document.getElementById("view").innerHTML = table;
}
function deleted(i){
    let text = confirm(`Bạn có muốn xóa học sinh ${arrStudent[i].name} không?`)
    if(text)
    {
        arrStudent.splice(i,1);
        alert("Bạn đã xóa thành công");
        display();
    }
}
function add(){
    let id = document.getElementById("id").value;
    for(let i = 0; i < arrStudent.length; i++){
        if(id == arrStudent[i].id){
            alert("STT không được trùng. Mời bạn nhập lại!");
            return 0;
        }
    }
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let street = document.getElementById("street").value;
    let classX = document.getElementById("class").value;
    arrStudent.push(new Student(id, name, dob, gender, street, classX));
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("street").value = "";
    document.getElementById("class").value = "";
    display();
}
function edit(){
    let al = confirm(`Bạn có chắc muốn cập nhật không?`)
    if(al)
    {
        for (let i = 0; i < arrStudent.length; i++) {
            if(document.getElementById("idEdit").value == arrStudent[i].id)
            {
                if(document.getElementById("nameEdit").value !== arrStudent[i].name)
                {
                    arrStudent[i].name = document.getElementById("nameEdit").value;
                }
                if(document.getElementById("dobEdit").value !== arrStudent[i].dob)
                {
                    arrStudent[i].dob = document.getElementById("dobEdit").value;
                }
                if(document.getElementById("genderEdit").value !== arrStudent[i].gender)
                {
                    arrStudent[i].gender = document.getElementById("genderEdit").value;
                }
                if(document.getElementById("streetEdit").value !== arrStudent[i].street)
                {
                    arrStudent[i].street = document.getElementById("streetEdit").value;
                }
                if(document.getElementById("classEdit").value !== arrStudent[i].classX)
                {
                    arrStudent[i].classX = document.getElementById("classEdit").value;
                }
            }
        }
        alert("Cập nhật thành công!");
    }
    dialogCancel();
    display();
}
//Hiển thị dialog
function dialogShow(i) {
    dialog.showModal();
    document.getElementById("idEdit").value = arrStudent[i].id;
    document.getElementById("nameEdit").value = arrStudent[i].name;
    document.getElementById("dobEdit").value = arrStudent[i].dob;
    document.getElementById("genderEdit").value = arrStudent[i].gender;
    document.getElementById("streetEdit").value = arrStudent[i].street;
    document.getElementById("classEdit").value = arrStudent[i].classX;
}
//Tắt dialog
function dialogCancel() {
    dialog.close();
}
display();