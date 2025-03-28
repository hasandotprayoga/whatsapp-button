(function() {
    // Ambil parameter dari script
    var scripts = document.getElementsByTagName("script");
    var myScript = scripts[scripts.length - 1];
    
    var phoneNumber = myScript.getAttribute("data-phone") || "6282394403311";
    var message = encodeURIComponent(myScript.getAttribute("data-message") || "Halo, ada yang bisa saya bantu?");
    var bgColor = myScript.getAttribute("data-bgcolor") || "#25D366";
    var position = myScript.getAttribute("data-position") || "right";
    
    var url = `https://wa.me/${phoneNumber}?text=${message}`;

    // Buat tombol chat
    var widget = document.createElement("div");
    widget.id = "whatsapp-widget";
    widget.innerHTML = `
        <a href="${url}" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Chat WhatsApp">
        </a>
    `;

    // Styling tombol
    widget.style.position = "fixed";
    widget.style.bottom = "20px";
    widget.style[`${position}`] = "20px";
    widget.style.backgroundColor = bgColor;
    widget.style.width = "60px";
    widget.style.height = "60px";
    widget.style.borderRadius = "50%";
    widget.style.display = "flex";
    widget.style.alignItems = "center";
    widget.style.justifyContent = "center";
    widget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    widget.style.cursor = "pointer";
    widget.style.transition = "all 0.3s ease";
    widget.style.zIndex = "9999";

    // Tambahkan ke body
    document.body.appendChild(widget);
})();
