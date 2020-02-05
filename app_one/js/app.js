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
	var onChangeSelectFile = function(event){
		console.log('onChangeSelectFile');
		//
		event.stopPropagation();
		event.preventDefault();
		//
		console.log( 'files' );
		//console.log( event );
		//console.log( event.target );
		//console.log( event.target );
		//console.log( event.target.files );
		var aFiles = event.target.files;
		var selectedFile = aFiles[0];

		console.log( selectedFile );

		//
		return false
	}
	//
	//$('#btn_choose_file').on('click', onChooseFile);
	$('#id_file_input').on('change', onChangeSelectFile);
})// end jQuery.ready