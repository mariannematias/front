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

    $(".yearly-section").hide();

    /* add active class on selected navigation */
    $(".btn-secondary").click(function(){
        var btnId = $(this).attr('id');
        $(".btn-secondary").removeClass("active");
        $(this).addClass("active");
        $(".monthly-section").hide();
        $("#div"+btnId).show();
    });
});