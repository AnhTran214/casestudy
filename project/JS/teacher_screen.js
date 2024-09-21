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
    classX;
    constructor(id, name, dob, gender, street,classX) {
        super(id, name, dob, gender, street);
        this.classX = classX;
    }
}
//-----------------------------------------------VARIABLE---------------------------------------------------------------
let arrTeacher = [];
let arrTemp = [];
arrTeacher.push(new Teacher(1, "Nguyễn Văn T", "20/1/1989", "Nam", "Tây Ninh", "12A1"));
arrTeacher.push(new Teacher(2, "Nguyễn Văn D ", "02/10/1997", "Nam", "Tây Ninh", "12A2"));
let dialogEditTeacher = document.getElementById("editValueTeacher");
let dialogAddTeacher = document.getElementById("addValueTeacher");
let dialogSearchEditTeacher = document.getElementById("editValueTeacher");
//----------------------------------------------FUNCTION TEACHER--------------------------------------------------------
//hiển thị
function displayTeacher() {
    //Sắp xếp theo STT (id).
    arrTeacher.sort(function (a,b){
        if(a.id > b.id) return 1;
        if(a.id < b.id) return -1;
        return 0;
    })
    let tableTeacher = "<table style='width: 100%; text-align: center; border-collapse: collapse'>";
    tableTeacher += "<tr>";
    tableTeacher += "<th style='border: 1px solid black'>STT</th>";
    tableTeacher += "<th style='border: 1px solid black'>Họ và tên</th>";
    tableTeacher += "<th style='border: 1px solid black'>Ngày tháng năm sinh</th>";
    tableTeacher += "<th style='border: 1px solid black'>Giới tính</th>";
    tableTeacher += "<th style='border: 1px solid black'>Địa chỉ</th>";
    tableTeacher += "<th style='border: 1px solid black'>Chủ nhiệm lớp</th>";
    tableTeacher += "</tr>";
    for (let i = 0; i < arrTeacher.length; i++) {
        tableTeacher += "<tr>";
        tableTeacher += `<td style='border: 1px solid black'>${arrTeacher[i].id}</td>`;
        tableTeacher += `<td style='border: 1px solid black'>${arrTeacher[i].name}</td>`;
        tableTeacher += `<td style='border: 1px solid black'>${arrTeacher[i].dob}</td>`;
        tableTeacher += `<td style='border: 1px solid black'>${arrTeacher[i].gender}</td>`;
        tableTeacher += `<td style='border: 1px solid black'>${arrTeacher[i].street}</td>`;
        tableTeacher += `<td style='border: 1px solid black'>${arrTeacher[i].classX}</td>`;
        tableTeacher += `<td><button id="editTeacher" onclick="dialogShowEditTeacher(${i})" type="button">Sửa</button></td>`;
        tableTeacher += `<td><button id="deleteTeacher" onclick="deletedTeacher(${i})" type="button">Xóa</button></td>`;
        tableTeacher += "</tr>";
    }

    tableTeacher += "</table>"
    document.getElementById("view").innerHTML = tableTeacher;
}
//xóa
function deletedTeacher(i){
    let text = confirm(`Bạn có muốn xóa học sinh ${arrTeacher[i].name} không?`)
    if(text)
    {
        arrTeacher.splice(i,1);
        alert("Bạn đã xóa thành công");
        displayTeacher();
    }
}
//thêm
function addTeacher(){
    let id = document.getElementById("idTeacher").value;
    for(let i = 0; i < arrTeacher.length; i++){
        if(id == arrTeacher[i].id){
            alert("STT không được trùng. Mời bạn nhập lại!");
            return 0;
        }
    }
    let name = document.getElementById("nameTeacher").value;
    let dob = document.getElementById("dobTeacher").value;
    let gender = document.getElementById("genderTeacher").value;
    let street = document.getElementById("streetTeacher").value;
    let classX = document.getElementById("classTeacher").value;
    for(let i = 0; i < arrTeacher.length; i++){
        if(classX == arrTeacher[i].classX){
            alert("Lớp này đã có giáo viên chủ nhiệm. Mời nhập lại");
            return 0;
        }
    }
    arrTeacher.push(new Teacher(id, name, dob, gender, street, classX));
    alert("Thêm thành công!");
    document.getElementById("idTeacher").value = "";
    document.getElementById("nameTeacher").value = "";
    document.getElementById("dobTeacher").value = "";
    document.getElementById("genderTeacher").value = "";
    document.getElementById("streetTeacher").value = "";
    document.getElementById("classTeacher").value = "";
    dialogCancelAddTeacher();
    displayTeacher();
}
//sửa
function editTeacher(){
    let al = confirm(`Bạn có chắc muốn cập nhật không?`);
    if(al)
    {
        for (let i = 0; i < arrTeacher.length; i++) {
            if(document.getElementById("idEditTeacher").value == arrTeacher[i].id)
            {
                if(document.getElementById("nameEditTeacher").value !== arrTeacher[i].name)
                {
                    arrTeacher[i].name = document.getElementById("nameEditTeacher").value;
                }
                if(document.getElementById("dobEditTeacher").value !== arrTeacher[i].dob)
                {
                    arrTeacher[i].dob = document.getElementById("dobEditTeacher").value;
                }
                if(document.getElementById("genderEditTeacher").value !== arrTeacher[i].gender)
                {
                    arrTeacher[i].gender = document.getElementById("genderEditTeacher").value;
                }
                if(document.getElementById("streetEditTeacher").value !== arrTeacher[i].street)
                {
                    arrTeacher[i].street = document.getElementById("streetEditTeacher").value;
                }
                if(document.getElementById("classEditTeacher").value !== arrTeacher[i].classX)
                {
                    for (let j = 0; j < arrTeacher.length; j++)
                    {
                        if(document.getElementById("classEditTeacher").value == arrTeacher[j].classX)
                        {
                            alert("Lớp này đã có giáo viên chủ nhiệm. Mời nhập lại!");
                            return 0;
                        }
                    }
                    arrTeacher[i].classX = document.getElementById("classEditTeacher").value;
                }
            }
        }
        alert("Cập nhật thành công!");
    }
    dialogCancelEditTeacher();
    displayTeacher();
}
//Hiển thị dialog
function dialogShowEditTeacher(i) {
    dialogEditTeacher.showModal();
    document.getElementById("idEditTeacher").value = arrTeacher[i].id;
    document.getElementById("nameEditTeacher").value = arrTeacher[i].name;
    document.getElementById("dobEditTeacher").value = arrTeacher[i].dob;
    document.getElementById("genderEditTeacher").value = arrTeacher[i].gender;
    document.getElementById("streetEditTeacher").value = arrTeacher[i].street;
    document.getElementById("classEditTeacher").value = arrTeacher[i].classX;
}
//Tắt dialog
function dialogCancelEditTeacher() {
    dialogEditTeacher.close();
}
function dialogShowAddTeacher() {
    dialogAddTeacher.showModal();
}
function dialogCancelAddTeacher() {
    dialogAddTeacher.close();
}
//tìm kiếm
function searchTeacher() {
    arrTemp.splice(0, arrTemp.length);
    let searchValue = document.getElementById("searchTeacher").value;
    let check = false;
    let count = 0;
    for (let i = 0; i < arrTeacher.length; i++){
        if ( arrTeacher[i].name.includes(searchValue)) { //includes kiểm tra xem chuỗi này có nằm trong chuỗi kia không.
            check = true;
            count ++;
            arrTemp.push(new Teacher(arrTeacher[i].id, arrTeacher[i].name, arrTeacher[i].dob, arrTeacher[i].gender, arrTeacher[i].street, arrTeacher[i].classX));
        }
    }
    if(check)
    {
        displaySearchTeacher(arrTemp);
    } else
    {
        displayNotSearchTeacher();
    }
}
//hiển thị tìm thấy
function displaySearchTeacher(arr) {
    let tableSearchTeacher = "<table style='width: 100%; text-align: center; border-collapse: collapse'>";
    tableSearchTeacher += "<tr>";
    tableSearchTeacher += "<th style='border: 1px solid black'>STT</th>";
    tableSearchTeacher += "<th style='border: 1px solid black'>Họ và tên</th>";
    tableSearchTeacher += "<th style='border: 1px solid black'>Ngày tháng năm sinh</th>";
    tableSearchTeacher += "<th style='border: 1px solid black'>Giới tính</th>";
    tableSearchTeacher += "<th style='border: 1px solid black'>Địa chỉ</th>";
    tableSearchTeacher += "<th style='border: 1px solid black'>Lớp</th>";
    tableSearchTeacher += "</tr>";
    for (let i = 0; i < arr.length; i++) {
        tableSearchTeacher += "<tr>";
        tableSearchTeacher += `<td style='border: 1px solid black'>${arr[i].id}</td>`;
        tableSearchTeacher += `<td style='border: 1px solid black'>${arr[i].name}</td>`;
        tableSearchTeacher += `<td style='border: 1px solid black'>${arr[i].dob}</td>`;
        tableSearchTeacher += `<td style='border: 1px solid black'>${arr[i].gender}</td>`;
        tableSearchTeacher += `<td style='border: 1px solid black'>${arr[i].street}</td>`;
        tableSearchTeacher += `<td style='border: 1px solid black'>${arr[i].classX}</td>`;
        tableSearchTeacher += `<td><button id="edit" onclick="dialogShowSearchEditTeacher(${i})" type="button">Sửa</button></td>`;
        tableSearchTeacher += `<td><button id="delete" onclick="deletedSearchTeacher(${i})" type="button">Xóa</button></td>`;
        tableSearchTeacher += "</tr>";
    }

    tableSearchTeacher += "</table>"
    document.getElementById("view").innerHTML = tableSearchTeacher;
}
//Hiển thị không tìm thấy
function displayNotSearchTeacher() {
    let tableNotSearchTeacher = "<table style='width: 100%; text-align: center; border-collapse: collapse'>";
    tableNotSearchTeacher += "<tr>";
    tableNotSearchTeacher += "<th style='border: 1px solid black'>STT</th>";
    tableNotSearchTeacher += "<th style='border: 1px solid black'>Họ và tên</th>";
    tableNotSearchTeacher += "<th style='border: 1px solid black'>Ngày tháng năm sinh</th>";
    tableNotSearchTeacher += "<th style='border: 1px solid black'>Giới tính</th>";
    tableNotSearchTeacher += "<th style='border: 1px solid black'>Địa chỉ</th>";
    tableNotSearchTeacher += "<th style='border: 1px solid black'>Lớp</th>";
    tableNotSearchTeacher += "</tr>";
    tableNotSearchTeacher += "<tr>";
    tableNotSearchTeacher += `<td style='border: 1px solid black' colspan="6">Không tìm thấy dữ liệu</td>`;
    tableNotSearchTeacher += "</tr>";
    tableNotSearchTeacher += "</table>"
    document.getElementById("view").innerHTML = tableNotSearchTeacher;
}
//hiển thị dialog tìm kiếm edit
function dialogShowSearchEditTeacher(i) {
    dialogSearchEditTeacher.showModal();
    document.getElementById("idEditTeacher").value = arrTemp[i].id;
    document.getElementById("nameEditTeacher").value = arrTemp[i].name;
    document.getElementById("dobEditTeacher").value = arrTemp[i].dob;
    document.getElementById("genderEditTeacher").value = arrTemp[i].gender;
    document.getElementById("streetEditTeacher").value = arrTemp[i].street;
    document.getElementById("classEditTeacher").value = arrTemp[i].classX;
}
//xóa tìm kiếm
function deletedSearchTeacher(i){
    let text = confirm(`Bạn có muốn xóa học sinh ${arrTemp[i].name} không?`)
    if(text)
    {
        for(let j = 0; j <arrTeacher.length; j++)
        {
            if (arrTemp[i].id == arrTeacher[j].id) {
                arrTeacher.splice(j,1);
            }
        }
        arrTemp.splice(i,1);
        alert("Bạn đã xóa thành công");
        displayTeacher();
    }
}
function checkSearchTeacher(a) {
    if(a == "")
    {
        displayTeacher();
    } else searchTeacher();
}
displayTeacher();
//----------------------------------------------------------------------------------------------------------------------