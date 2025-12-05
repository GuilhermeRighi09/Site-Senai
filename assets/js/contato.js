        function enviarWhatsApp(event) {
            event.preventDefault();

            let nome = document.getElementById("nome").value;
            let email = document.getElementById("email").value;
            let telefone = document.getElementById("telefone").value;
            let mensagem = document.getElementById("mensagem").value;

            let numeroWhatsApp = "5519998588924"; 
            

            let texto = `*Contato Novembro Azul - SENAI*%0A%0A
*Nome:* ${nome}%0A
*E-mail:* ${email}%0A
*Telefone:* ${telefone}%0A
*Mensagem:* ${mensagem}`;

            let link = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

            window.open(link, "_blank");
        }