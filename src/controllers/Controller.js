class Controller {

    constructor() {
        AOS.init()
        this.init()
    }

    init() {
        $('#generate').on('click', function() {
            if ($('#url').val() === "") {
                swal('Ops!', 'Adicione uma URL!', 'warning')
                return
            } else {
                window.Controller.generate({
                    target: 'ready',
                    text: $('#url').val(),
                    width: '250',
                    height: '250',
                    colorDark: '#000000',
                    colorLight: '#ffffff'
                })
            }
        })
    }

    generate(data) {
        $("#your-qrcode .url").html("")
        $(".loading").fadeIn()

        setTimeout(() => {
            $(".loading").fadeOut()
        }, 500)

        setTimeout(() => {
            var qrcode = new QRCode(data.target, {
                text: data.text,
                width: data.width,
                height: data.height,
                colorDark: data.colorDark,
                colorLight: data.colorLight,
                correctLevel: QRCode.CorrectLevel.H
            })
        }, 1000)

        setTimeout(() => {
            $('#download-qrcode button').removeAttr('disabled')
            $('#download-qrcode').attr('href', $('#ready img').attr("src"))
        }, 1500)
    }

}

export default Controller