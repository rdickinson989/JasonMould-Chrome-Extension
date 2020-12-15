
$( document ).ready(function() {
	if(isPluginActive()){
		$("#active").show();
		$("#disabled").hide();

	}else{
		$("#active").hide();
		$("#disabled").show();
	}

	$(document).on('click',"#activatePlugin",function() {
		console.log("Disable plugin");
		enablePlugin();
		$("#disabled").hide();
		$("#active").show();
		return false;
	});

	$(document).on('click',"#disablePlugin",function() {
		console.log("Resume plugin");
		disablePlugin();
		$("#active").hide();
		$("#disabled").show();
		return false;
	});

});

function enablePlugin(){
	setLocalStorageValue("status","true");
	chrome.browserAction.setIcon({
 		path : "../img/icon_active.png"
	});
}


function disablePlugin(){
	setLocalStorageValue("status","false");
	chrome.browserAction.setIcon({
 		path : "../img/icon_active.png"
	});
}

function isPluginActive(){
	return getBooleanLocalStorageValue("status");
}

function getBooleanLocalStorageValue(value){
	var value = localStorage.getItem(value);
	if( value == "false" ){
		return false;
	}else{
		return true;
	}
}	

function setLocalStorageValue(key,value){
	localStorage.setItem(key, value)
}

