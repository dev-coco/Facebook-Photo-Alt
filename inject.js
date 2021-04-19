setInterval(function() {
    var get_data = document.querySelectorAll("div.do00u71z.ni8dbmo4.stjgntxs.l9j0dhe7 > div.pmk7jnqg.kr520xx4");
    for (var i = 0; i < get_data.length; i++) {
        try {
            get_data[i].outerHTML.match(/show_picture_alt/g)[0];
        } catch {
            try {
                var dd = get_data[i].outerHTML.match(/(?<=alt=".*?：).*?(?=")/g)[0];
                var para = document.createElement("p");
                var node = document.createTextNode(dd);
                para.appendChild(node);
                get_data[i].appendChild(para);
                para.setAttribute("id","show_picture_alt");
                para.setAttribute("style", "position: absolute; z-index: 1000; background-color:white;  color: black;");
            } catch {}
        }
    }
}, 1500);
