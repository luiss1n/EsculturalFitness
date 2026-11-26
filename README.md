# Escultural Fitness

Site da **Escultural Fitness**, academia com unidades em Jesuânia e Olímpio Noronha, Minas Gerais. A página apresenta a academia, seus diferenciais, modalidades, equipe de personal trainers, horários, planos e informações para contato e visita.

## Tecnologias

- **HTML5** para a estrutura semântica e acessível da página.
- **CSS3** para identidade visual, animações e layout responsivo.
- **JavaScript puro (vanilla)** para interações, navegação, horários e formulários.
- **Google Fonts** para as famílias tipográficas usadas no site.
- **Google Maps Embed** para exibir os mapas das unidades.
- **WhatsApp Click to Chat** para facilitar contato e matrícula.

O site não requer framework, dependências locais ou etapa de compilação.

## Galeria do espaço

A seção `#espaco`, entre os diferenciais e a equipe, segue o modelo de legendas sobre as fotos. Tem três abas com duas imagens cada e uma aba de vídeo. As fotos são fictícias e estão identificadas como ilustrativas na página.

- Fotos: `assets/espaco/vista-1.png`, `vista-2.png`, `angulo-1.png`, `angulo-2.png`, `detalhes-1.png` e `detalhes-2.png`. Ao substituir por fotos reais, atualize também os textos alternativos e os avisos de imagens ilustrativas no HTML e em `gallery.js`.
- Vídeo: coloque o arquivo, por exemplo, em `assets/espaco/academia.mp4` e preencha `data-video-src="assets/espaco/academia.mp4"` no elemento `<video>` de `index.html`. O player será exibido com controles, sem reprodução automática. Enquanto não houver arquivo configurado, a aba mostra uma mensagem de "Em breve".
- Estilos e interações: `assets/espaco/gallery.css` e `assets/espaco/gallery.js`. As fotos abrem ampliadas; as setas alternam entre as duas fotos da categoria e Escape fecha a ampliação.

## Vídeo de abertura

O hero usa `assets/hero-academia.mp4` como fundo, sem som e em loop. `assets/hero-video.css` define o enquadramento para desktop e celular. `assets/hero-video.js` controla reprodução e pausa e respeita a preferência por movimento reduzido. A imagem `assets/hero-escultural.png` permanece como poster e alternativa caso o vídeo não carregue. Esse vídeo é independente da aba de vídeo da galeria.
