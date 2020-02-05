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

		//console.log( selectedFile );

		
		//Papa.parse(file, config)
		//var config = {};
		//var parsedData = Papa.parse(selectedFile, config);

		//Papa.parse(selectedFile);
		Papa.parse(selectedFile,{
			complete: function(results, file) {
				//console.log("Parsing complete:", results, file);
				//console.log(results.data);
				//console.log(results.errors);
				console.log(results.meta);
				onGotData(results.data);
			}
		})
		

		//
		return false
	} // onChangeSelectFile/
	var onGotData = function(aData){
		console.log('onGotData');
		console.log(aData);
	}
	//
	//
	//$('#btn_choose_file').on('click', onChooseFile);
	$('#id_file_input').on('change', onChangeSelectFile);
})// end jQuery.ready