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
//----------------------------------------------FUNCTION----------------------------------------------------------------
function display() {
    let table = "<table style='width: 50%; text-align: center; border-collapse: collapse'>";
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
        table += `<td><button id="edit" onclick="">Sửa</button></td>`;
        table += `<td><button id="delete" onclick="">Xóa</button></td>`;
        table += "</tr>";
    }

    table += "</table>"
    document.getElementById("view").innerHTML = table;
}
display();