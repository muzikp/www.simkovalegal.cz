/* global $*/

$(function(){
    $(".career-form").submit(function(){        
        const data = $(this).serializeArray();
        var o = {};
        data.forEach(e => o[e.name] = e.value);
        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/muzikp@gmail.com',
            dataType: 'json',
            accepts: 'application/json',
            data: o,
            success: function(data) {
                console.log("Vaše zpráva byla úspěšně odeslána.")
                $(".career-form").find(".callback").empty().append(`<small class="success">Vaše zpráva byla úspěšně odeslána.</small>`);
            },
            error: function(err) {
                console.error("Vaši zprávu se nepodařilo odeslat. Zprávu můžete poslat na recepce@simkovalegal.cz.")
                $(".career-form").find(".callback").empty().append(`<small class="error">Vaši zprávu se nepodařilo odeslat. Zprávu můžete poslat na recepce@simkovalegal.cz.</small>`)
            }
        });
        return false;
    });
})