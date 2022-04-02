var entry = document.getElementById("btnsub");
entry.addEventListener("click", displayInfo);
var row = 1;
function displayInfo(a) {
  a.preventDefault();
  var arr = [];
  var pname = document.getElementById("name").value;
  var adr = document.getElementById("adrno").value;
  var dob = document.getElementById("dob").value;
  var city = document.getElementById("city").value;
  var dateoftest = document.getElementById("dtest").value;
  var timeoftest = document.getElementById("ttest").value;
  select = document.getElementById('res');
  value = select.options[select.selectedIndex].value;
  var labname = document.getElementById("lname").value;
  var reportnumber = document.getElementById("report").value;
  var gender;
  if (document.getElementById("male").checked) {
    gender = "Male";
  }
  else {
    gender = "Female";
  }
  arr.push({
      user_name:pname,
      adhaar_no:adr,
      date_of_birth:dob,
      place:city,
      date_of_test:dateoftest,
      time_of_test:timeoftest,
      result:value,
      lab_name:labname,
      report:reportnumber,
      gen:gender
  })

  if (
    !pname ||
    !adr ||
    !dob ||
    !city ||
    !dateoftest ||
    !timeoftest ||
    !value ||
    !labname ||
    !reportnumber ||
    !gender
  ) {
    alert("Please Fill all the boxes");
    return;
  }
  var display = document.getElementById("myTable");
  var newRow = display.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  var cell8 = newRow.insertCell(7);
  var cell9 = newRow.insertCell(8);
  var cell10 = newRow.insertCell(9);
  var cell11 = newRow.insertCell(10);

  cell1.innerHTML = pname;
  cell2.innerHTML = adr;
  cell3.innerHTML = dob;
  cell4.innerHTML = city;
  cell5.innerHTML = dateoftest;
  cell6.innerHTML = timeoftest;
  cell7.innerHTML = value;
  cell8.innerHTML = labname;
  cell9.innerHTML = reportnumber;
  cell10.innerHTML = gender;

  row++;
  hide();
  gethistory();
  save();
  document.querySelector("form").reset();
}

function gethistory(){
  var history = document.getElementById("myTable");
}

function tableSearch() {
  var input, filter, table, tr, td, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];

    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function show() {
    document.getElementById("head").style.display = "flex";
    document.getElementById("main").style.display = "grid";
}

function hide() {
  document.getElementById("head").style.display = "none";
  document.getElementById("main").style.display = "none";
}

function save() {
    localStorage.setItem("user_entries", JSON.stringify(arr));
}

function display_history() {
    var stored_arr = [];
    stored_arr = localStorage.getItem("user_entries");
    stored_arr =  JSON.parse(stored_arr);
    arr = stored_arr;
    var display = document.getElementById("myTable");
    if (stored_arr) {
    
    stored_arr.forEach(element => {    
        var newRow = display.insertRow(row);
        var his_cell1 = newRow.insertCell(0);
        var his_cell2 = newRow.insertCell(1);
        var his_cell3 = newRow.insertCell(2);
        var his_cell4 = newRow.insertCell(3);
        var his_cell5 = newRow.insertCell(4);
        var his_cell6 = newRow.insertCell(5);
        var his_cell7 = newRow.insertCell(6);
        var his_cell8 = newRow.insertCell(7);
        var his_cell9 = newRow.insertCell(8);
        var his_cell10 = newRow.insertCell(9);

        his_cell1.innerHTML = element.user_name;
        his_cell2.innerHTML = element.adhaar_no;
        his_cell3.innerHTML = element.date_of_birth;
        his_cell4.innerHTML = element.place;
        his_cell5.innerHTML = element.date_of_test;
        his_cell6.innerHTML = element.time_of_test;
        his_cell7.innerHTML = element.result;
        his_cell8.innerHTML = element.lab_name;
        his_cell9.innerHTML = element.report;
        his_cell10.innerHTML = element.gen;
        row++;
    });  
    }
    else {
      console.log("no entries");
    }   
}