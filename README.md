# ReviewPay — site (GitHub Pages)

Esta pasta tem **só o que o GitHub precisa pra rodar o site** (frontend estático).
Nada de backend aqui — o ReviewPay roda 100% no navegador (dados em `localStorage`).

## Arquivos
- `index.html` — o app inteiro (HTML + CSS + JS).
- `tailwind.css` — estilos (Tailwind pré-compilado).
- `manifest.webmanifest` — deixa o site instalável como app no celular (PWA).
- `sw.js` — service worker (PWA + notificações locais).
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` — ícones do app.
- `.nojekyll` — impede o GitHub de processar os arquivos com Jekyll.

## Como publicar no GitHub Pages
1. Crie um repositório no GitHub (ex.: `reviewpay`).
2. Suba **o conteúdo desta pasta** na raiz do repositório (todos os arquivos acima,
   incluindo o `.nojekyll`). O `index.html` tem que ficar na raiz.
3. No GitHub: **Settings → Pages**.
4. Em **Source**, escolha a branch (`main`) e a pasta `/root`. Salve.
5. Aguarde 1–2 min. O site fica no ar em
   `https://SEU-USUARIO.github.io/reviewpay/`.

> Login do painel: e-mail `Saasmilhao@gmail.com` e senha `NetoSaas`.

## Importante (notificações no celular)
As notificações e a instalação como app só funcionam em **HTTPS** — e o GitHub Pages
já serve em HTTPS, então está tudo certo ao publicar. No celular, abra o site no
Chrome, toque no sino 🔔 para ativar as notificações e use "Adicionar à tela inicial"
para instalar como app.

Sem servidor de push, os avisos chegam enquanto o app está aberto/rodando no
celular (notificar com o app totalmente fechado exigiria um backend).
