// JavaScript Document



function insertRow(id){
var form = document.forms.main;
var table = document.getElementById(id);
if(form.name.value == "")alert("リングネームを入力してください！");
else{

var row = table.insertRow(-1);
var cell1 = row.insertCell(-1);
var cell2 = row.insertCell(-1);
var cell3 = row.insertCell(-1);


cell1.innerHTML = ('0' + table.rows.length).slice(-2);
cell2.innerHTML = form.name.value;
if(form.check.checked == true){
	cell3.innerHTML = "●";
	cell3.align = 'center';
}

form.name.value = "";
form.check.checked = false;

}
};

$(function(){
	$('#s tbody').sortable();
});