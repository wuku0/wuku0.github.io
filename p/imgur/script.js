function copyToClipboard() {
    var imgurLink = document.getElementById('imgurLink');
    var tempInput = document.createElement('input');
    tempInput.value = imgurLink.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}
function openModal() {
    var modal = document.getElementById('popupModal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('popupModal');
    modal.style.display = 'none';
}

window.onload = function() {
    openModal();
};
var failedAttempts = 0;
function randomString() {
    var chars = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';
    var stringLength = 6;
    var text = '';
    for (var i = 0; i < stringLength; i++) {
        var randomNum = Math.floor(Math.random() * chars.length);
        text += chars.substring(randomNum,randomNum+1);
    }
    var source = 'https://i.imgur.com/' + text + '.jpg';
    $.get(source, function(data) {
    }).done(function() {
        var image = new Image();
        image.onload = function() {
            if (this.width == 161) {
                failedAttempts = failedAttempts + 1;
                randomString();
            }
            else {
                $('.stuff img').replaceWith(this);
                $('#imgurLink').attr('href', 'https://i.imgur.com/' + text + '.jpg').text('https://i.imgur.com/' + text + '.jpg');
                $('#failedAttempts').text(failedAttempts);
                failedAttempts = 0;
            }
        };
        image.src = source;a
    }).fail(function() {
            failedAttempts = failedAttempts + 1;
            randomString();
        }
    ).always(function() {
        console.log("ended");
    });
}

$(document).ready(function() {
    randomString();
});