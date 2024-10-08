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
class Student extends Person{
    classX;
    constructor(id, name, dob, gender, street,classX) {
        super(id, name, dob, gender, street);
        this.classX = classX;
    }
}
//-----------------------------------------------VARIABLE---------------------------------------------------------------
let arrStudent = [];
let arrTemp = [];
arrStudent.push(new Student(1, "Nguyễn Văn A", "1/1/2007", "Nam", "Tây Ninh", "12A1"));
arrStudent.push(new Student(2, "Nguyễn Thị C ", "2/3/2007", "Nữ", "Tây Ninh", "12A1"));
let dialogEdit = document.getElementById("editValue");
let dialogAdd = document.getElementById("addValue");
let dialogSearchEdit = document.getElementById("editValue");
//----------------------------------------------FUNCTION STUDENT--------------------------------------------------------
//hiển thị
function display() {
    //Sắp xếp theo STT (id).
    arrStudent.sort(function (a,b){
        if(a.id > b.id) return 1;
        if(a.id < b.id) return -1;
        return 0;
    })
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
        table += "<tr>";
        table += `<td style='border: 1px solid black'>${arrStudent[i].id}</td>`;
        table += `<td style='border: 1px solid black'>${arrStudent[i].name}</td>`;
        table += `<td style='border: 1px solid black'>${arrStudent[i].dob}</td>`;
        table += `<td style='border: 1px solid black'>${arrStudent[i].gender}</td>`;
        table += `<td style='border: 1px solid black'>${arrStudent[i].street}</td>`;
        table += `<td style='border: 1px solid black'>${arrStudent[i].classX}</td>`;
        table += `<td><button id="edit" onclick="dialogShowEdit(${i})" type="button">Sửa</button></td>`;
        table += `<td><button id="delete" onclick="deleted(${i})" type="button">Xóa</button></td>`;
        table += "</tr>";
    }

    table += "</table>"
    document.getElementById("view").innerHTML = table;
}
//xóa
function deleted(i){
    let text = confirm(`Bạn có muốn xóa học sinh ${arrStudent[i].name} không?`)
    if(text)
    {
        arrStudent.splice(i,1);
        alert("Bạn đã xóa thành công");
        display();
    }
}
//thêm
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
    alert("Thêm thành công!");
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("street").value = "";
    document.getElementById("class").value = "";
    dialogCancelAdd();
    display();
}
//sửa
function edit(){
    let al = confirm(`Bạn có chắc muốn cập nhật không?`);
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
    dialogCancelEdit();
    display();
}
//Hiển thị dialog
function dialogShowEdit(i) {
    dialogEdit.showModal();
    document.getElementById("idEdit").value = arrStudent[i].id;
    document.getElementById("nameEdit").value = arrStudent[i].name;
    document.getElementById("dobEdit").value = arrStudent[i].dob;
    document.getElementById("genderEdit").value = arrStudent[i].gender;
    document.getElementById("streetEdit").value = arrStudent[i].street;
    document.getElementById("classEdit").value = arrStudent[i].classX;
}
//Tắt dialog
function dialogCancelEdit() {
    dialogEdit.close();
}
function dialogShowAdd() {
    dialogAdd.showModal();
}
function dialogCancelAdd() {
    dialogAdd.close();
}
//tìm kiếm
function search() {
    arrTemp.splice(0, arrTemp.length);
    let searchValue = document.getElementById("search").value;
    let check = false;
    let count = 0;
    for (let i = 0; i < arrStudent.length; i++){
        if ( arrStudent[i].name.includes(searchValue)) { //includes kiểm tra xem chuỗi này có nằm trong chuỗi kia không.
            check = true;
            count ++;
            arrTemp.push(new Student(arrStudent[i].id, arrStudent[i].name, arrStudent[i].dob, arrStudent[i].gender, arrStudent[i].street, arrStudent[i].classX));
        }
    }
    if(check)
    {
        displaySearch(arrTemp);
    } else
    {
        displayNotSearch();
    }
}
//hiển thị tìm thấy
function displaySearch(arr) {
    let tableSearch = "<table style='width: 100%; text-align: center; border-collapse: collapse'>";
    tableSearch += "<tr>";
    tableSearch += "<th style='border: 1px solid black'>STT</th>";
    tableSearch += "<th style='border: 1px solid black'>Họ và tên</th>";
    tableSearch += "<th style='border: 1px solid black'>Ngày tháng năm sinh</th>";
    tableSearch += "<th style='border: 1px solid black'>Giới tính</th>";
    tableSearch += "<th style='border: 1px solid black'>Địa chỉ</th>";
    tableSearch += "<th style='border: 1px solid black'>Lớp</th>";
    tableSearch += "</tr>";
    for (let i = 0; i < arr.length; i++) {
        tableSearch += "<tr>";
        tableSearch += `<td style='border: 1px solid black'>${arr[i].id}</td>`;
        tableSearch += `<td style='border: 1px solid black'>${arr[i].name}</td>`;
        tableSearch += `<td style='border: 1px solid black'>${arr[i].dob}</td>`;
        tableSearch += `<td style='border: 1px solid black'>${arr[i].gender}</td>`;
        tableSearch += `<td style='border: 1px solid black'>${arr[i].street}</td>`;
        tableSearch += `<td style='border: 1px solid black'>${arr[i].classX}</td>`;
        tableSearch += `<td><button id="edit" onclick="dialogShowSearchEdit(${i})" type="button">Sửa</button></td>`;
        tableSearch += `<td><button id="delete" onclick="deletedSearch(${i})" type="button">Xóa</button></td>`;
        tableSearch += "</tr>";
    }

    tableSearch += "</table>"
    document.getElementById("view").innerHTML = tableSearch;
}
//Hiển thị không tìm thấy
function displayNotSearch() {
    let tableNotSearch = "<table style='width: 100%; text-align: center; border-collapse: collapse'>";
    tableNotSearch += "<tr>";
    tableNotSearch += "<th style='border: 1px solid black'>STT</th>";
    tableNotSearch += "<th style='border: 1px solid black'>Họ và tên</th>";
    tableNotSearch += "<th style='border: 1px solid black'>Ngày tháng năm sinh</th>";
    tableNotSearch += "<th style='border: 1px solid black'>Giới tính</th>";
    tableNotSearch += "<th style='border: 1px solid black'>Địa chỉ</th>";
    tableNotSearch += "<th style='border: 1px solid black'>Lớp</th>";
    tableNotSearch += "</tr>";
    tableNotSearch += "<tr>";
    tableNotSearch += `<td style='border: 1px solid black' colspan="6">Không tìm thấy dữ liệu</td>`;
    tableNotSearch += "</tr>";
    tableNotSearch += "</table>"
    document.getElementById("view").innerHTML = tableNotSearch;
}
//hiển thị dialog tìm kiếm edit
function dialogShowSearchEdit(i) {
    dialogSearchEdit.showModal();
    document.getElementById("idEdit").value = arrTemp[i].id;
    document.getElementById("nameEdit").value = arrTemp[i].name;
    document.getElementById("dobEdit").value = arrTemp[i].dob;
    document.getElementById("genderEdit").value = arrTemp[i].gender;
    document.getElementById("streetEdit").value = arrTemp[i].street;
    document.getElementById("classEdit").value = arrTemp[i].classX;
}
//xóa tìm kiếm
function deletedSearch(i){
    let text = confirm(`Bạn có muốn xóa học sinh ${arrTemp[i].name} không?`)
    if(text)
    {
        for(let j = 0; j <arrStudent.length; j++)
        {
            if (arrTemp[i].id == arrStudent[j].id) {
                arrStudent.splice(j,1);
            }
        }
        arrTemp.splice(i,1);
        alert("Bạn đã xóa thành công");
        display();
    }
}
function checkSearch(a) {
    if(a == "")
    {
        display();
    } else search();
}
display();
//----------------------------------------------------------------------------------------------------------------------