$(document).ready(function(){
	var musicFlag=0;
	$("#playIt").click(function(){
		if(musicFlag==0){
		console.log("点击播放")
		$("#bgMusic")[0].play();
		$("#musicBtn").removeClass("fa-play-circle");
		$("#musicBtn").addClass("fa-pause-circle");
		musicFlag=1;
	}else if(musicFlag==1){
		console.log("暂停播放");
		$("#bgMusic")[0].pause();
		$("#musicBtn").removeClass("fa-pause-circle");
		$("#musicBtn").addClass("fa-play-circle");
		musicFlag=0;
	}
	});
})