---
name: Estética Lu de Souza
description: Massoterapia de Luxo & Cuidados Corporais a Domicílio em Alphaville
colors:
  primary: "#8c5123"
  primary-dark: "#613a17"
  primary-light: "#a54f16"
  terracotta: "#d0653f"
  gold-accent: "#ce824f"
  gold-text: "#8c5123"
  bronze: "#976b42"
  fendi: "#8c8069"
  olive: "#414225"
  peach-soft: "#e0a47a"
  neutral-bg: "#fbf7f2"
  neutral-card: "#ffffff"
  neutral-alt: "#f5ece1"
  border-subtle: "#ebdcd0"
  text-main: "#331d0d"
  text-muted: "#6b5a4b"
  text-subtle: "#8c8069"
  text-inverse: "#f7ebe1"
  whatsapp: "#25d366"
  whatsapp-hover: "#1eaa4f"
  google-blue: "#4285f4"
  star-gold: "#ce824f"
  dark-surface: "#241509"
  device-frame: "#4a2910"
  device-screen: "#1e1005"
  pure-black: "#000000"
typography:
  display:
    fontFamily: "'Marcellus', Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4.4rem)"
    fontWeight: 500
    lineHeight: 1.15
  headline:
    fontFamily: "'Marcellus', Georgia, serif"
    fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.2
  title:
    fontFamily: "'Marcellus', Georgia, serif"
    fontSize: "1.4rem"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  caption:
    fontFamily: "'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "8px"
  md: "14px"
  lg: "22px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "0.8rem 1.6rem"
  button-cta-gold:
    backgroundColor: "{colors.gold-accent}"
    textColor: "#331d0d"
    rounded: "{rounded.full}"
    padding: "1rem 2.2rem"
---

# Design System — Estética Lu de Souza

## Overview
O sistema visual da marca **Estética Lu de Souza** traduz exclusividade, serenidade e alto padrão para serviços terapêuticos e estéticos domiciliares em Alphaville e região. A estética abraça uma paleta terrosa nobre, calorosa e orgânica (terracota, âmbar canela, cobre, mogno cacau, bronze caramelo, taupe fendi e oliva botânico) aliada a superfícies sedosas de caxemira/linho off-white e tipografia editorial sofisticada.

## Paleta de Cores (Paleta Oficial de 9 Tons)
- **#ce824f (Âmbar Canela Dourado)**: Acentos nobres, estrelas de avaliação, brasão, ícones e bordas refinadas.
- **#8c5123 (Terracota Nobre / Âmbar Escuro)**: Cor primária da marca, botões de ação e títulos em destaque (contraste WCAG AA > 5.5:1).
- **#a54f16 (Cobre Intenso)**: Gradientes primários de botões e badges de destaque.
- **#d0653f (Argila Quente Terracota)**: Realces interativos e hovers calorosos.
- **#8c8069 (Taupe Fendi Terroso)**: Equilíbrio neutro e orgânico para bordas refinadas e rótulos secundários.
- **#e0a47a (Pêssego Dourado Terracota)**: Halos sutis, gradientes secundários e fundos de badges.
- **#613a17 (Mogno Cacau Profundo)**: Base nobre escura, molduras de destaque e tipografia principal de alto contraste.
- **#414225 (Oliva Botânico Profundo)**: Transições orgânicas de gradiente botânico profundo e selos verificados.
- **#976b42 (Bronze Caramelo Nobre)**: Numeração de diferenciais, tags e acentos metálicos secundários.

## Superfícies Neutras & Acolhedoras
- **Fundo Principal (`#fbf7f2`)**: Cashmere suave e quente, transmitindo conforto residencial imediato.
- **Superfície Secundária (`#f5ece1`)**: Linho nobre para quebras de ritmo e seções de contraste suave.
- **Bordas e Linhas Sutis (`#ebdcd0`)**: Divisórias discretas sem rispidez.

## Typography
- **Display & Títulos**: `Marcellus` (Google Fonts). Elegância atemporal, proporções clássicas e presença refinada para todos os títulos de seção e nome da marca.
- **Corpo & Interface**: `Jost` (Google Fonts). Família geométrica contemporânea, legibilidade impecável tanto em telas retina desktop quanto em dispositivos móveis.
- **Hierarquia Estrita**:
  - H1: Hero Display (`clamp(2.8rem, 5vw, 4.4rem)`)
  - H2: Títulos de Seção (`clamp(2.2rem, 4vw, 3.2rem)`)
  - H3: Cards, Diferenciais e Benefícios (`1.35rem` a `1.6rem`)
  - Corpo: Parágrafos informativos (`0.9rem` a `1.125rem`)

## Layout
- **Grid Responsivo Fluido**:
  - Hero: 2 colunas assimétricas no desktop (1.1fr / 0.9fr), unificando-se em coluna única no mobile.
  - Tratamentos: 4 colunas no desktop, 2 no tablet e 1 no mobile.
  - Vídeos: 2 colunas com molduras de smartphone verticais (proporção 9:16).
- **Espaçamento e Ritmo**: Seções com respiro generoso (`6.5rem 0`), transmitindo calma e sofisticação sem poluição visual.

## Elevation & Depth
- Sombras suaves e naturais baseadas em tons de mogno/cacau difusos (`rgba(97, 58, 23, 0.08)`).
- Rejeição absoluta de efeitos glow ou sombras coloridas sintéticas.
- Efeito vidro fosco suave no cabeçalho sticky (`backdrop-filter: blur(12px)`).

## Shapes
- Raio de borda generoso nos cards (`14px` a `22px`), conferindo suavidade ao toque.
- Botões e tags totalmente arredondados (`rounded-full` / `9999px`), transmitindo acolhimento orgânico.
- Molduras dos vídeos reais no formato smartphone com acabamento em tons nobres de madeira e cacau.

## Components
- **Moldura Mobile para Vídeos Reais**: Smartphone com play/pause suave ao toque, indicador de áudio e tags do procedimento.
- **Botão Flutuante de WhatsApp**: Concierge discreto no canto inferior direito com indicador online e tooltip sutil.
- **Cards de Tratamento**: Imagem aspiracional, descrição ética sem promessas milagrosas e botão direto para consulta personalizada via WhatsApp.
- **Selo de Confiança Google**: Exibição da nota 5,0 estrelas e 53 avaliações reais em pílula de luxo de duas linhas, estritamente alinhada em mobile e desktop.

## Do's and Don'ts
- **DO**:
  - Priorizar a conversão para WhatsApp com mensagens contextuais pré-configuradas.
  - Destacar a exclusividade do atendimento domiciliar em Alphaville e região.
  - Manter sempre a foto real da Lu de Souza com sua expressão calorosa e profissional.
- **DON'T**:
  - Nunca inventar certificações, associações ou promessas clínicas de cura/resultado garantido.
  - Nunca usar rosa excessivo, roxos genéricos de IA ou layouts poluídos de clínica comum.
  - Nunca incluir outras cidades ou bairros além de Alphaville e região.
