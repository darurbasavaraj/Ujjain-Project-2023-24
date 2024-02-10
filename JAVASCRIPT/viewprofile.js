
document.getElementById("userName1").innerHTML=sessionStorage.getItem("user")

var storedMobileNumber = sessionStorage.getItem("mobileNumber");
if (storedMobileNumber) {
    document.getElementById("mobileNumber1").innerText = "+91 " + storedMobileNumber;
}

// -------------------------------upload-picture--------------------------------------

window.onload = function() {
    const savedImageData = sessionStorage.getItem('profilePicture');
    if (savedImageData) {
        // Set image source for the original location
        document.getElementById('previewImage').src = savedImageData;
        
        // Set image source for the other location
        document.getElementById('otherPreviewImage').src = savedImageData;
    }
};

// Handle file input change
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const imageData = event.target.result;
        document.getElementById('previewImage').src = imageData;
        document.getElementById('otherPreviewImage').src = imageData; // Set image source for the other location

        // Save image data to session storage
        sessionStorage.setItem('profilePicture', imageData);
    };

    reader.readAsDataURL(file);
});

// window.onload = function() {
//     const savedImageData = sessionStorage.getItem('profilePicture');
//     if (savedImageData) {
//       document.getElementById('previewImage').src = savedImageData;
//     }
//   };

//   // Handle file input change
//   document.getElementById('fileInput').addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = function(event) {
//       const imageData = event.target.result;
//       document.getElementById('previewImage').src = imageData;

//       // Save image data to session storage
//       sessionStorage.setItem('profilePicture', imageData);
//     };

//     reader.readAsDataURL(file);
//   });
