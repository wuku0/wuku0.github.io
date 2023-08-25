document.addEventListener("DOMContentLoaded", () => {
    const generateThumbnailButton = document.getElementById("generateThumbnail");
    const copyUrlButton = document.getElementById("copyUrl");
    const copyImageButton = document.getElementById("copyImage");
    const thumbnailImg = document.getElementById("thumbnailImg");

    generateThumbnailButton.addEventListener("click", () => {
        const videoUrl = document.getElementById("videoUrl").value;
        const videoId = extractVideoId(videoUrl);
        if (videoId) {
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            thumbnailImg.src = thumbnailUrl;
        } else {
            thumbnailImg.src = "";
        }
    });

    copyUrlButton.addEventListener("click", () => {
        const thumbnailUrl = thumbnailImg.src;
        if (thumbnailUrl) {
            copyToClipboard(thumbnailUrl);
            alert("Thumbnail URL copied to clipboard!");
        }
    });

    copyImageButton.addEventListener("click", () => {
        const thumbnailUrl = thumbnailImg.src;
        if (thumbnailUrl) {
            copyImageToClipboard(thumbnailUrl);
            alert("Thumbnail image copied to clipboard!");
        }
    });
});

function extractVideoId(url) {
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
    return match ? match[1] : null;
}

function copyToClipboard(text) {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function copyImageToClipboard(imageUrl) {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(function (blob) {
            const item = new ClipboardItem({ "image/png": blob });
            navigator.clipboard.write([item]).then(function () {
                console.log("Image copied to clipboard");
            });
        }, "image/png");
    };
}
