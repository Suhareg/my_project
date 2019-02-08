let summa = document.getElementById('summ'); 
let slider1 = document.getElementById('polzunok1'); 
let summa1 = document.getElementById('summ1'); 
let slider2 = document.getElementById('polzunok2'); 
var data = document.getElementById('date'); 
var radio1 = document.getElementById('radio1'); 
var radio2 = document.getElementById('radio2'); 
var radio3 = document.getElementById('radio3'); 
var radio4 = document.getElementById('radio4'); 
var menu = document.getElementById('menu'); 
var menum = document.getElementById('menumob'); 
var zakr = document.getElementById('otmena'); 
var op = 0;
slider1.onchange=func1;
summa.onchange=func2;
slider2.onchange=func3;
summa1.onchange=func4;
var date = new Date();
var day = date.getDate();
var year = date.getFullYear();
var month = date.getMonth();
data.value=day+'-'+month+'-'+year;
radio1.onclick=func5;
radio2.onclick=func6;
radio3.onclick=func7;
radio4.onclick=func8;
menu.onclick=func9;
zakr.onclick=func10;
function func1()
{
summa.value=slider1.value;
}
function func2()
{
slider1.value=summa.value;
if (summa.value>3000000)
{
	this.value="3000000";
}
if (summa.value<1000)
{
	this.value="1000";
}
}
function func3()
{
summa1.value=slider2.value;
}
function func4()
{
slider2.value=summa1.value;
if (summa1.value>3000000)
{
	this.value="3000000";
}
if (summa1.value<1000)
{
	this.value="1000";
}
}
function func5()
{
	radio1.checked=true;
	radio2.checked=false;
}
function func6()
{
	radio2.checked=true;
	radio1.checked=false;
}
function func7()
{
	radio3.checked=true;
	radio4.checked=false;
}
function func8()
{
	radio4.checked=true;
	radio3.checked=false;
}
function timer1()
	{ 
	    op+=0.1; 
		menum.style.opacity=op; 
	}
function func9()
{
	menum.style.display="block"; 
	var timer = setInterval(timer1, 60); 
}
function func10()
{
	menum.style.display="none"; 
}
$(function() {
    $("#date").datepicker(
	{
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель','Май', 'Июнь', 'Июль', 'Август', 'Сентябрь','Октябрь', 'Ноябрь', 'Декабрь'],
		dayNamesMin: ['Пн','Вт','Ср','Чт','Пт','Сб', 'Вс'],
		dateFormat:'d-m-y',
		}
	);
  } );
