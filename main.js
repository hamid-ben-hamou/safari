function openMenu(){
	document.getElementById('nemu').style.height = 'fit-content';
	document.getElementById('x-1').style.transform = 'translate(0px, 8px) rotate(45deg)';
	document.getElementById('x-2').style.display = 'none'
	document.getElementById('x-3').style.transform = 'translate(0px, -8px) rotate(-45deg)'
}

function closeMenu(){
	document.getElementById('nemu').style.height = '0';
	document.getElementById('x-1').style.transform = 'translate(0px, 0px) rotate(0)';
	document.getElementById('x-2').style.display = 'block'
	document.getElementById('x-3').style.transform = 'translate(0px, 0px) rotate(0deg)'	
}