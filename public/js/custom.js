$(document).ready(function(){
    const words = ["astonishing.", "more professional.", "perfect in every way."];
    let i = 0;
    let timer;

    function typingEffect() {
        let word = words[i].split("");
        var loopTyping = function() {
            if (word.length > 0) {
                document.getElementById('word').innerHTML += word.shift();
            } else {
                setTimeout(function() { deletingEffect(); }, 2500);
                return false;
            };
            timer = setTimeout(loopTyping, 60);
        };
        loopTyping();
    };

    function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                document.getElementById('word').innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                };
                typingEffect();
                return false;
            };
            timer = setTimeout(loopDeleting, 30);
        };
        loopDeleting();
    };

    typingEffect();

    $("a.register-btn").click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1200);
    });

    // on preview show iframe
    $('#videoModal').on('show.bs.modal', function (e) {
        var idVideo = $(e.relatedTarget).data('id');
        $('#videoModal .modal-body').html('<iframe width="100%" height="500px" src="https://www.youtube.com/embed/' + idVideo + '?autoplay=true" frameborder="0" allowfullscreen></iframe>');
    });
    //on close remove
    $('#videoModal').on('hidden.bs.modal', function () {
        $('#videoModal .modal-body').empty();
    });
});