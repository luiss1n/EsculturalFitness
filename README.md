# Escultural Fitness

Site institucional da **Escultural Fitness**, academia com unidades em Jesuânia e Olímpio Noronha, Minas Gerais. A página apresenta a academia, seus diferenciais, modalidades, equipe de personal trainers, horários, planos e informações para contato e visita.

## Tecnologias

- **HTML5** para a estrutura semântica e acessível da página.
- **CSS3** para identidade visual, animações e layout responsivo.
- **JavaScript puro (vanilla)** para interações, navegação, horários e formulários.
- **Google Fonts** para as famílias tipográficas usadas no site.
- **Google Maps Embed** para exibir os mapas das unidades.
- **WhatsApp Click to Chat** para facilitar contato e matrícula.

O site não requer framework, dependências locais ou etapa de compilação.

## Executar localmente

Abra `index.html` em um navegador. Para iniciar um servidor local, execute na pasta do projeto:

```bash
python3 -m http.server 8000
```

Depois, acesse <http://localhost:8000>.

## Publicação

O projeto pode ser publicado como site estático em serviços como GitHub Pages. No GitHub, acesse **Settings → Pages**, selecione a branch `main` e a pasta `/ (root)` como origem da publicação.

## Estrutura do projeto

```text
.
├── index.html
├── logo-escultural-fitness.jpg
├── script.js
├── styles.css
└── README.md
```

Os arquivos `styles.css` e `script.js` são auxiliares mantidos no repositório. A versão atual da landing page reúne seu CSS e JavaScript diretamente em `index.html`.
