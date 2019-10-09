const video=document.getElementById("video")
function startVideo(){
	navigator.getUserMedia({
		video: {0};
		stream => video.srcObject=stream
		err=> console.error(err)
	})
}	
startVideo()