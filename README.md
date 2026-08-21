<h1 align="center">🌿 Próspera Verde</h1>

<p align="center">
  <strong>Reciclar bem começa por entender bem.</strong><br />
  Site institucional e educativo de uma cooperativa de reciclagem (fictícia, mas de coração legítimo) em Itaberaba, Bahia.
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white" />
  <img alt="Static Export" src="https://img.shields.io/badge/Export-Est%C3%A1tico-168821" />
  <img alt="License" src="https://img.shields.io/badge/uso-projeto%20acad%C3%AAmico-FFCD07" />
</p>

## O que é isso aqui?

A **Próspera Verde** não existe de verdade (ainda!), mas o site leva a sério a missão de ensinar reciclagem como se existisse. Foi feito pra Oficina Pedagógica 02 de Tecnologias Sociais e Cooperativismo, com a cara de um site gov.br: sóbrio, azul institucional, acessível, sem gradiente nenhum tentando parecer startup de Vale do Silício.

Por baixo do capô, porém, é tudo bem menos sério: tem lixeira que voa (literalmente, arrastando pela tela), quiz cronometrado com pergunta de legislação de verdade, jogo da memória com carta virando em 3D, e simuladores que fazem conta de água economizada e renda de cooperado em tempo real.

## O que dá pra fazer no site

- 📖 **Guia "Como reciclar"**: acordeão com 12 materiais (de papel a medicamento vencido), com cor da lixeira, o que pode/não pode e tempo de decomposição.
- 🎓 **Curso livre de reciclagem**: 4 módulos curtos, cada um com objetivos de aprendizagem, uma foto real, um vídeo do YouTube e uma verificação de 4 alternativas por pergunta. Sem certificado oficial, mas com uma declaração de conclusão simbólica no final.
- 🎯 **Jogo da separação**: arraste (ou navegue no teclado) o item até a lixeira certa, em ordem embaralhada a cada partida. Drag-and-drop de verdade, com feedback explicando o porquê de cada resposta.
- 🧠 **Jogo da memória**: vire as cartas e combine cada item de lixo com a lixeira colorida certa, no menor número de tentativas.
- 🔗 **Cadeia de reciclagem**: coloque em ordem as etapas reais do processo, da separação em casa até virar produto novo de novo.
- ⚖️ **Simulador de consumo consciente**: situações reais do dia a dia com duas escolhas possíveis, cada uma com a explicação do impacto ambiental por trás.
- 💧 **Simulador de impacto ambiental**: diz quanto de água, energia, árvores e CO₂ sua reciclagem mensal economiza, e quanto isso gera de renda pra cooperativa.
- ⏳ **Linha do tempo de decomposição**: compara visualmente quanto tempo cada material leva pra sumir da natureza (spoiler: vidro não some nunca).
- ❓ **Quiz de reciclagem**: 16 perguntas em ordem embaralhada (com alternativas embaralhadas também), do básico até legislação de verdade (PNRS, logística reversa), cronômetro que aperta a cada rodada, e classificação final de "continue aprendendo" até "expert em reciclagem".
- 🤝 **Simulador da cooperativa**: mostra como o faturamento da venda de material vira renda justa, dividida entre os cooperados.
- 📍 **Pontos de coleta**: endereços reais de Itaberaba/BA pra situar o projeto no mundo real.
- 🖼️ **Fotos e vídeos reais**: fotos do Wikimedia Commons (com crédito e licença visíveis, incluindo uma foto aérea real de Itaberaba) e um vídeo do YouTube por módulo do curso, todos verificados antes de entrar no site.
- ♿ **Barra de acessibilidade funcional**: aumentar/diminuir fonte e alto contraste, de verdade, sem enfeite.

As 8 simulações ficam organizadas por categoria em `/simulacoes`: Jogos, Simuladores e calculadoras, e Teste seus conhecimentos.

## Caixa de ferramentas

| Camada | Escolha |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, export estático) |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS v4 (CSS-first, sem `tailwind.config.js`) |
| Componentes | [shadcn/ui](https://ui.shadcn.com) sobre Base UI, mais primitivas [Radix UI](https://www.radix-ui.com) (accordion, radio-group, progress) escritas à mão |
| Arrastar e soltar | [dnd-kit](https://dndkit.com) |
| Animações | [Motion](https://motion.dev) |
| Ícones | [lucide-react](https://lucide.dev) |

Sem backend, sem banco de dados, sem chamada de API própria. Tudo roda no navegador e vira HTML estático puro no build. As únicas requisições a serviços externos são as fotos do Wikimedia Commons e os vídeos incorporados do YouTube.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

Pra gerar o site estático (o que realmente vai pro ar):

```bash
npm run build
```

Isso deixa tudo pronto dentro da pasta `out/`, prontinha pra jogar em qualquer hospedagem estática (Netlify, Vercel, GitHub Pages, ou um servidor Apache dos tempos das antigas). Pra conferir o resultado localmente antes de publicar:

```bash
npx serve out
```

## Estrutura, rapidinho

```
app/            rotas (App Router) e metadata de cada página
components/     UI reutilizável, organizada por área (layout, simulacoes, curso, ui...)
data/           todo o conteúdo do site vive aqui: materiais, quiz, curso, pontos de coleta...
hooks/          hooks compartilhados (números animados, etc.)
lib/            utilidades e metadata de SEO
```

Todo o conteúdo textual (materiais recicláveis, perguntas do quiz, módulos do curso, pontos de coleta, fatores de impacto ambiental) fica centralizado em `data/`, separado dos componentes. Trocar um texto ou adicionar um item nunca exige mexer em JSX.

<p align="center">Projeto desenvolvido para a Oficina Pedagógica 02 de Tecnologias Sociais e Cooperativismo. 🌱</p>
