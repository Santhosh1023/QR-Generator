function generateQRcode() {
    const textt = document.getElementById("text").value;
    const qrCodeContainer = document.getElementById("qrcode");
    qrCodeContainer.innerHTML = "";

    if (textt.trim() !== "") {
        new QRCode(qrCodeContainer, {text: textt, width: 150, height: 150});
    }
}