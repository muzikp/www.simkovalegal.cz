$(function(){
    $(".career-form").submit(function(){        
        const data = $(this).serializeArray();
        var o = {};
        data.forEach(e => o[e.name] = e.value);
        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/recepce@aksh.cz',
            dataType: 'json',
            accepts: 'application/json',
            data: o,
            success: function(data) {
                console.log("Vaše zpráva byla úspěšně odeslána.")
                iziToast.success({
                    title: 'Odesláno',
                    message: 'Vaše zpráva byla úspěšně odeslána.'
                });
            },
            error: function(err) {
                console.error("Vaši zprávu se nepodařilo odeslat. Zprávu můžete poslat na recepce@simkovalegal.cz.")
                iziToast.error({
                    title: 'Odeslání se nezdařilo',
                    message: 'Vaši zprávu se nepodařilo odeslat. Zprávu můžete poslat na recepce@simkovalegal.cz.'
                });
            }
        });
        return false;
    });
})