window.onload = function() {
    var img = document.getElementById('profileImage');
    var container = img.parentElement;

    function adjustImage() {
        var imgAspectRatio = img.naturalWidth / img.naturalHeight;
        var containerAspectRatio = container.offsetWidth / container.offsetHeight;

        if (imgAspectRatio > containerAspectRatio) {
            img.style.width = 'auto';
            img.style.height = '100%';
        } else {
            img.style.width = '100%';
            img.style.height = 'auto';
        }

        // Center the image
        img.style.left = '50%';
        img.style.top = '50%';
        img.style.transform = 'translate(-50%, -50%)';
    }

    // Ensure the image has loaded before adjusting
    if (img.complete) {
        adjustImage();
    } else {
        img.onload = adjustImage;
    }
};