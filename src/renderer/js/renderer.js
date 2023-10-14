// render camera feed
document.addEventListener('DOMContentLoaded', function () {
    // Access the camera stream
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            width:     { min: 1920, ideal: 1920 },
            height:    { min: 1080, ideal: 1080 },
            frameRate: { min: 30,   ideal: 60 },
        },
    })
        .then(function (stream) {
            const videoElement = document.getElementById('camera-feed');
            videoElement.srcObject = stream;
        })
        .catch(function (error) {
            console.error('Error accessing camera:', error);
        });
});
// camera feed end


