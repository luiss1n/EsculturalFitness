# Escultural Fitness

Landing page da academia Escultural Fitness, em Jesuânia e Olímpio Noronha, Minas Gerais. O site foi desenvolvido com HTML, CSS e JavaScript puros, sem etapa de build.

## Arquivos

- `index.html` — página completa, com estilos e scripts incorporados.
- `logo-escultural-fitness.jpg` — logo usada na página.
- `styles.css` e `script.js` — arquivos auxiliares mantidos no projeto; a página atual concentra o código em `index.html`.

## Visualizar localmente

Abra `index.html` diretamente no navegador. Para uma prévia usando um servidor local, execute na pasta do projeto:

```bash
python3 -m http.server 8000
```

Em seguida, acesse <http://localhost:8000>.

## Criar o repositório no GitHub

1. Acesse [github.com/new](https://github.com/new) e crie um repositório, por exemplo `escultural-fitness`.
2. Deixe desmarcada a opção para adicionar README, `.gitignore` ou licença, pois este projeto já contém um README.
3. No terminal, dentro desta pasta do projeto, configure o endereço do repositório e envie os arquivos:

```bash
git remote add origin https://github.com/SEU-USUARIO/escultural-fitness.git
git add index.html logo-escultural-fitness.jpg styles.css script.js README.md
git commit -m "Adiciona landing page da Escultural Fitness"
git branch -M main
git push -u origin main
```

Substitua `SEU-USUARIO` pelo seu nome de usuário ou organização no GitHub. Se o repositório já tiver um remoto chamado `origin`, atualize-o com `git remote set-url origin URL-DO-REPOSITORIO`.

## Publicar com GitHub Pages

No repositório, abra **Settings → Pages**, escolha a publicação pela branch `main` e pela pasta `/ (root)`, e salve. O GitHub exibirá o endereço público do site nessa mesma seção após a publicação.

## Atualizar o site

Depois de editar e salvar os arquivos, envie as alterações:

```bash
git add index.html logo-escultural-fitness.jpg styles.css script.js README.md
git commit -m "Atualiza landing page"
git push
```
