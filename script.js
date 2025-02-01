document.addEventListener("DOMContentLoaded", function() {
   /* ==========================
      Carrossel de Imagens
      ========================== */
   const images = document.querySelectorAll('.carousel-container img');
   let currentIndex = 0;
   const totalImages = images.length;
   
   // Certifica que a primeira imagem esteja ativa
   images[currentIndex].classList.add('active');
   
   function showNextImage() {
       // Remove a classe 'active' da imagem atual
       images[currentIndex].classList.remove('active');
       
       // Calcula o índice da próxima imagem
       currentIndex = (currentIndex + 1) % totalImages;
       
       // Adiciona a classe 'active' à próxima imagem
       images[currentIndex].classList.add('active');
   }
   
   // Troca de imagens a cada 5 segundos (5000 milissegundos)
   setInterval(showNextImage, 5000);
   
   /* ==========================
      Cursor Customizado e Animação de Hover (já implementado anteriormente)
      ========================== */
   
   // Cursor customizado (bola)
   const customCursor = document.createElement('div');
   customCursor.id = "custom-cursor";
   document.body.appendChild(customCursor);
   
   // Esconde o cursor padrão
   document.body.style.cursor = "none";
   
   // Atualiza a posição do cursor customizado conforme o mouse se move
   document.addEventListener('mousemove', function(e) {
       customCursor.style.left = e.pageX + "px";
       customCursor.style.top = e.pageY + "px";
   });
   
   // Animação de elementos no hover
   const animatedItems = document.querySelectorAll("nav ul li, button, .social a, #sobre h2, #sobre p");
   animatedItems.forEach(item => {
      item.addEventListener("mouseenter", function() {
           item.style.transition = "transform 0.3s ease";
           item.style.transform = "translateY(-5px) scale(1.05)";
      });
      
      item.addEventListener("mouseleave", function() {
           item.style.transform = "translateY(0) scale(1)";
      });
   });
   
   /* ==========================
      Cabeçalho Dinâmico (Shrink ao scroll)
      ========================== */
   const header = document.getElementById('header');
   window.addEventListener('scroll', function() {
       if(window.pageYOffset > 50) {
           header.classList.add('shrink');
       } else {
           header.classList.remove('shrink');
       }
   });
});
