# ReviewPay

Painel de avaliações remuneradas. Você conecta marketplaces, o **radar** caça
avaliações disponíveis e cada uma concluída vira saldo.

Roda **inteiro no navegador**. Não tem servidor, não tem banco, não tem build
obrigatório. Todo o estado fica no `localStorage` do navegador.

## Rodar

Abra o `index.html` direto no navegador. Só isso.

Se preferir servir por HTTP (recomendado, evita restrições de `file://`):

```bash
npm run preview
```

Abre em `http://localhost:4321`.

**Senha de acesso:** `netosaas`

## Estrutura

| arquivo | o que é |
| --- | --- |
| `index.html` | a aplicação inteira — markup, estilos e lógica |
| `tailwind.css` | CSS pré-compilado que o `index.html` carrega |
| `tailwind.config.js` | paleta e configuração usadas para gerar o CSS |
| `index.backup.html` | versão anterior ao redesign, para comparação |

## Área de membros

A área de membros é uma comunidade persistente, não um sorteio a cada refresh.
Ela vive em `accountState.community` no `localStorage`:

- **Membros fixos.** Doze pessoas com nome, cidade, time e números próprios. Os
  números só crescem — nunca são re-sorteados.
- **Tick de um minuto.** A cada minuto de relógio a comunidade anda sozinha:
  quem está online avança avaliações e ganhos, entra e sai do painel, comenta e
  responde. Ficar horas fora não congela nada — ao voltar, o app recupera o
  tempo perdido (limitado a 4 horas) e datas os comentários no horário certo.
- **Mural.** Você publica, curte, responde e apaga os próprios comentários.
  Depois de publicar, alguém do seu time responde em alguns segundos.
- **Times.** Quatro times para entrar. O painel mostra o seu, quanto o time
  faturou, sua fatia dentro dele e a posição no ranking. O filtro *Meu time*
  deixa no mural só os colegas.

Seus próprios números na comunidade (avaliações, aprovações, ganhos) vêm da
conta de verdade, não de sorteio.

## Avaliação

O formulário mostra o anúncio dentro dele: foto, nome, categoria, SKU e preço.
Não é mais preciso abrir outro modal, decorar o SKU e voltar para digitá-lo —
nome e SKU vêm do próprio anúncio. A conferência virou um passo explícito: o
botão "Ver anúncio completo" libera a caixa de confirmação, e sem marcá-la o
envio não passa.

O valor que você recebe aparece destacado, separado do preço do produto — eram
dois números parecidos na mesma tela e a confusão entre eles era garantida.

A nota virou cinco estrelas com rótulo (Péssimo → Excelente) e o comentário
exige 20 caracteres, com contador.

O formulário é um review de verdade, não um formulário genérico:

- **Notas por aspecto** — custo-benefício, qualidade e entrega, de 1 a 5.
  Clicar de novo na mesma nota limpa o aspecto.
- **Prós e contras** em chips, que entram na avaliação publicada.
- **Resumo em uma frase**, como o título de um review de marketplace.
- **Prévia ao vivo** de como a avaliação vai aparecer no anúncio: avatar,
  estrelas, selo de compra verificada, título, texto e as chips.
- A confirmação virou uma **chave** (`.rp-switch`), não um checkbox do sistema.

Tudo isso é salvo em `review.details` (`aspects`, `pros`, `cons`, `headline`).
O preenchimento por IA cobre os campos novos e mantém a coerência: 5 estrelas
não vêm mais com "preço alto" marcado nem com um resumo de 3 estrelas.

Categoria e preço do anúncio saem do nome do produto (`productProfiles`), não de
sorteio: antes um monitor podia aparecer como "Moda" por R$ 175.

## Geral da conta

Era um despejo de campos só leitura, metade deles em `--`, editáveis apenas no
sub painel admin escondido. Virou a página da conta:

- **Identidade** com avatar, nível e marketplaces conectados. A idade da conta
  não aparece em lugar nenhum da página — nem como data de criação, nem como
  "membro há X dias".
- **Barra de perfil completo** medindo os campos que realmente importam (nome,
  e-mail, celular, CPF/CNPJ, cidade) e dizendo qual está faltando.
- **Dados cadastrais editáveis ali mesmo**, com validação — não é mais preciso
  abrir o admin para preencher o próprio cadastro. O bloco nasce **fechado**:
  são dados pessoais, e só aparecem depois de clicar em "Mostrar". Sair da
  seção, entrar na conta ou recarregar fecha de novo.
- **Números derivados dos dados reais**: avaliações enviadas, taxa de aprovação,
  total ganho, total sacado, saldo, bônus, média por dia e marketplaces.
- **Progresso para o próximo nível**, com quanto falta em faturamento aprovado.
- **Dados e backup**: ID local (com botão de copiar), avaliações registradas e
  exportar/importar backup.

## Saques

Todo saque nasce com protocolo (`RP-AAMMDD-NNNN`), data, banco detectado pela
chave PIX e previsão de liberação. Mínimo de R$ 20,00. Quando o admin aprova,
grava a data de pagamento.

No sub painel admin, *Lançar saque manual* registra um saque com **qualquer
valor, data, banco e status**, independente do saldo — o desconto na carteira só
acontece se você marcar "descontar do saldo". Aprovar um saque maior que o saldo
também é permitido: avisa e não desconta, em vez de rejeitar sozinho como antes.

Cada solicitação pode ser rejeitada **com justificativa** (obrigatória), ter a
**data corrigida**, ser reaberta ou removida. A justificativa aparece para o
usuário no painel financeiro e no histórico.

O extrato aparece em dois lugares, com os mesmos dados:

- **Painel financeiro** → *Extrato de saques*: total sacado, quantos saques,
  média, último, quanto está em análise, quebra por banco e histórico completo.
- **Sub painel admin** (atalho: `7` duas vezes) → *Histórico de saques*: o mesmo,
  com filtro entre *Só pagos* e *Todos*.

## Mexer no visual

O design vive em dois blocos dentro do `index.html`:

- `<style id="rp-system">` — o sistema visual completo. Cores, tipografia e
  componentes saem de variáveis CSS no `:root`. O tema claro é só a troca
  dessas variáveis em `body.theme-light`.
- `<script id="rp-runtime">` — movimento e automações (radar, contadores
  animados, gráfico de 7 dias, modo leve).

As escalas `ink-*` (superfícies) e `glow-*` (acentos) do Tailwind estão
reapontadas em `tailwind.config.js`. Mudar a paleta lá recolore o painel todo.

Se você adicionar ou remover classes do Tailwind no HTML, regere o CSS:

```bash
npm run css
```

Durante a edição, o modo contínuo é mais prático:

```bash
npm run css:watch
```

## Limites conhecidos

- **O radar não consulta os marketplaces de verdade.** Ele sorteia produtos de
  um catálogo local. Virar produto real exige um backend com as APIs de cada
  marketplace.
- **Não existe backend.** O login, o saldo e as avaliações são simulados no
  navegador. Qualquer pessoa com acesso ao painel vê e altera os próprios dados.
- **A comunidade não tem outras pessoas do outro lado.** Os membros, comentários
  e times são gerados no seu próprio navegador e só existem nele. Ninguém lê o
  que você publica no mural. Uma comunidade real precisa de servidor.
- **O saque não move dinheiro.** O PIX não é enviado a lugar nenhum: o protocolo,
  o banco e as datas são registros locais, e a aprovação é você mesmo no admin.
- **O assistente de suporte chama a API da OpenAI direto do navegador.** Se você
  configurar uma chave, ela fica exposta a quem abrir o site e a cobrança é sua.
  Mova essa chamada para um backend antes de publicar.
- **O projeto não está em git.** Não há histórico nem desfazer.
