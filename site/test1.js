/*
Урок 1 Пример 1
function fun1() {
	var chb;
chb=document.getElementById('one');

if (chb.checked) {
	alert('Щас положу галочку, не касаться, быдло');
}
else{
	alert('Ты еблан? Гив ми май мазефакинг галочька, хуесос');
}
}

Урок 1 Пример 2
function fun1() {
	var rad=document.getElementsByName('r1');
	for (var i=0;i<rad.length; i++){
		if(rad[i].checked){
			alert("Element " +i+ " was chosen");
		}
	}
}
Урок 2 Пример 1
function fun1() {
	var sel=document.getElementById('mySel').selectedIndex;
	var options=document.getElementById('mySel').options;
	alert("Option " +options[sel].text+ " was chosen");

}

Урок 2 Пример 2
function fun1() {
	var rng=document.getElementById('r1');
	var p=document.getElementById('one');
	p.innerHTML=rng.value;
}
еще один
function fun1() {
	var rng=document.getElementById('r1');
	var div=document.getElementById('test');
	div.style.width=rng.value+'0.2px';
}
*/
Урок3
function f1() {
	var rtl=document.getElementById('rtl').value;
	var rtr=document.getElementById('rtr').value;
	var rbr=document.getElementById('rbr').value;
	var rbl=document.getElementById('rbl').value;
	var ttl=document.getElementById('ttl');
	var ttr=document.getElementById('ttr');
	var tbr=document.getElementById('tbr');
	var tbl=document.getElementById('tbl');

	var block=document.getElementById("block");
	ttl.value=rtl;
	ttr.value=rtr;
	tbr.value=rbr;
	tbl.value=rbl;
	block.style.borderRadius=rtl+'px ' +rtr+'px '+rbr+'px '+rbl+'px ';

}
