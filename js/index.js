function callWhatsApp() {
    const name = document.getElementById("inputWppValue").value;
    if (name == null || name == "" || name == undefined) {
        window.open("https://api.whatsapp.com/send?phone=5581983452314&text=Olá, quero ser um escoteiro!");
        return
    }
    window.open(`https://api.whatsapp.com/send?phone=5581983452314&text=Olá, me chamo ${name} e quero ser um escoteiro!`);
}