//
console.log('App Entry');

$(function(){
	console.log('jquery:ready');
	//
	var onChooseFile = function(event){
		event.stopPropagation();
		//
		console.log('Choose file');
		//
		return false;
	}
	//
	$('#btn_choose_file').on('click', onChooseFile);
})// end jQuery.ready