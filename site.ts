export default {
  name: 'Vega Solidaria',
  description: 'Ayudando a personas en situación de calle',
  logo: '/vega_solidaria_logo.jpg',
  author: 'Vega Solidaria',
  url: 'https://vega-solidaria.org',
  github: 'https://github.com/vega-solidaria',
  defaultLocale: 'es',
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vegasolidaria',
  trailingSlash: false,
  titleSeparator: '|',
  nav: [
    { text: 'Inicio', link: '/', type: 'primary', icon: 'i-mdi-home' },
    { text: 'Donar', link: 'https://www.flow.cl/btn.php?token=u811c413954341e980f050e92e592655480ab096', type: 'primary', icon: 'i-mdi-home' },
  ],
}