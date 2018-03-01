export default {
  header: 'Visão geral',
  headerText: 'Esta visão geral foi projetada para ajudá-lo a se tornar fluente no template Vue SSR do **Vuetify**. Se você não tem instalado o template <code>webpack-ssr</code>, por favor, faça isso no <router-link to="/vuetify/quick-start">Começar</router-link>.',
  structureHeader: 'Estrutura',
  structureText1: 'Este template Vue CLI foi projetado para desempenho, otimização de SEO e usabilidade. Este template está configurado para pré-processadores css, sass e stylus.',
  structureText2: 'A pasta **Build** contém todas as configurações de compilação específicas do webpack para o seu projeto. A **src** é onde todos os arquivos do projeto de desenvolvimento ficam. Observe que o template do Webpack-SSR está configurado para usar o [Vue Router](https://router.vuejs.org/en/), [Vuex](https://vuex.vuejs.org/en/intro.html) e o [Vue Server Renderer](https://vuejs.org/v2/guide/ssr.html). Isso permitirá que você faça aplicativos simples ou complexos que não sejam apenas rápidos/eficientes, mas com **SEO** amigável.',
  structureSubHeader: 'Estruturas de pastas',
  applicationHeader: 'Aplicação',
  applicationText1: 'Navegue até a pasta **src** e abra o <code>App.vue</code>. Vuetify é uma framework semântica. O código que você escreve deve ser fácil de lembrar e fácil de gerenciar. Para fazer isso, um dos principais componentes do Vuetify é o <code>v-app</code>. Este componente permite que você defina o layout da aplicação. Isso é usado em conjunto com <code>v-toolbar</code>, <code>v-navigation-drawer</code> e <code>v-footer</code>.',
  applicationText2: 'O código abaixo indica a aplicação que ela possui uma <code>toolbar</code> e um <code>footer</code>. Uma vez definido, a área de conteúdo irá ser redimensionada para acomodar-se. Para obter mais informações sobre layouts, navegue até a seção <router-link to="/layouts/pre-defined">Layouts</router-link>.',
  applicationText3: 'Coloque todos os arquivos que serão estáticos na <code>static</code>.Isso pode ser acessado por referência <code>/static/imagem-da-hora.png</code>, por exemplo.',
  applicationText4: 'A pasta de componentes é onde seus componentes personalizados devem ser colocados. Edite o arquivo <code>components/_index.js</code> para ter esses arquivos automaticamente inicializados para você.',
  applicationSubHeader1: 'Assets estáticos',
  applicationSubHeader2: 'Componentes',
  routingHeader: 'Roteamento',
  routingText1: 'O modelo Webpack-SSR usa o Vue Router oficial para controlar o fluxo da aplicação. Localizado em <code>/src/router/index.js</code>, todas as roteas da sua aplicação e as rotas lógicas serão definidas aqui. Inside you will also see a function that allows you to setup dynamically imported pages. This is not required, however, it will help break up your application and only load views that are needed, clearing up space in your eventual bundle output.',
  routingText2: 'Essas rotas podem ser acessadas criando um link para o caminho especificado ou usando o componente de roteamento do Vue `<router-link>`. Para mais informações, leia a [documentação](https://router.vuejs.org/en/) oficial do Vue Router. A função padrão assume que você está colocando as views na pasta <kbd>/pages</kbd> contendo **View** no fim do arquivo. Exemplo <code>HomeView.vue</code>.',
  stateControlHeader: 'Controle de estado',
  stateControlText1: 'O controle de estado é gerenciado pela biblioteca oficial Vuex. Esse plugin do Vue segue os padrões de projeto do Reflux do Facebook. Navegar para <code>/store/index.js</code>.Por padrão, o Vuex é configurado para pré-pesquisar dados antes de sua página ser inicialmente renderizada. Para ativar essa funcionalidade, crie um método <code>preFetch</code> no seu componente de visão.',
  stateControlText2: 'Isso é útil para inicializar seu aplicativo para que todos os dados necessários estejam disponíveis antes da renderização inicial.',
  stateControlText3: 'Para mais informações sobre Controle de Estado e Vuex, leia a [documentação](https://vuex.vuejs.org/en/intro.html) oficial.',
  stateControlText4: 'O Vuetify integra-se no Vuex para permitir um debug fácil e acesso a propriedades armazenadas. Você também pode usar observadores para ligar os store states e reagir quando eles mudam. Mais informações podem ser encontradas [aqui](https://vuejs.org/v2/guide/reactivity.html).',
  metaDataHeader: 'Metadados',
  metaDataText: 'Para garantir que os metadados específicos da página sejam visíveis quando suas páginas são rastreadas, você pode definir as informações específicas da sua página de aplicativos em <code>router/meta.json</code>. Isso permitirá que você defina o título da página, a descrição e as palavras-chave para cada rota. Isso será automaticamente aplicado para você na página carregar e mudar.',
  redirectsHeader: 'Redirecionamentos',
  redirectsText: 'À medida que as aplicações evoluem, as rotas mudam. Se você quiser manter a autoridade já obtida de bots que indexam sua página, é melhor atribuir um redirecionamento 301 para o novo local. Localizado em <code>router/301.json</code> você pode definir redirecionamentos 301 para suas páginas que serão automaticamente manipuladas para você na página carregar.',
  webAppSupportHeader: 'Suporte a aplicativos da Web',
  webAppSupportText: 'O Vuetify SSR tem suporte para aplicativos da Web nativos em smartphones. Também conhecidos como progressive web apps, seus sites podem ser salvos na tela inicial de um dispositivo, permitindo que ele seja desativável e receba notificações push. Para obter mais informações sobre o Web App Manifest\'s, navegue até [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Manifest). Para ver um exemplo ao vivo, adicione a documentação do Vuetify na tela inicial do seu dispositivo móvel.',
  toc: [
    {
      text: 'Visão geral',
      href: 'introdução'
    },
    {
      text: 'Estrutura',
      href: 'estrututra'
    },
    {
      text: 'Aplicação',
      href: 'aplication'
    },
    {
      text: 'Roteamento',
      href: 'roteamento'
    },
    {
      text: 'Controle de estado',
      href: 'controle-de-estado'
    },
    {
      text: 'Metadados',
      href: 'metadados'
    },
    {
      text: 'Redirecionamentos',
      href: 'redirecionamentos'
    },
    {
      text: 'Suporte à Web app',
      href: 'suporte-web-app'
    }
  ]
}
