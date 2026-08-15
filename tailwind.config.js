/**
 * Configuracao do Tailwind usada para gerar tailwind.css.
 * Regerar com: npm run css   (ou npm run css:watch enquanto edita)
 */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif']
      },
      /**
       * O markup tem centenas de `bg-ink-800`, `text-glow-400` etc.
       * Reapontar essas escalas recolore o painel inteiro de uma vez,
       * sem tocar em uma linha de HTML.
       *   ink  = superficies (quase preto -> elevado)
       *   glow = acentos (verde-dinheiro + violeta de automacao)
       */
      colors: {
        ink: {
          900: '#08090c',
          800: '#101218',
          700: '#161922',
          600: '#1d212b'
        },
        glow: {
          300: '#6df0b8',
          400: '#3ee9a0',
          500: '#2bd68d',
          600: '#a78bfa'
        }
      }
    }
  },
  /**
   * Classes montadas dentro de template strings no JS do painel.
   * O scanner do Tailwind le index.html como texto, entao a maioria
   * ja e encontrada — a safelist cobre as variantes de tom que so
   * aparecem via variavel.
   */
  safelist: [
    { pattern: /^(text|bg|border)-(emerald|rose|sky|amber|slate|cyan|violet|indigo|teal)-(100|200|300|400|500|600|700)$/ },
    { pattern: /^(text|bg|border)-(emerald|rose|sky|amber)-(300|400)\/(20|30|40)$/ },
    'text-white',
    'text-white/60',
    'bg-white/10'
  ]
};
