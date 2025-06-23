import entregador from '../assets/entregador.png';
import gestao from '../assets/gestao.png';
import web from '../assets/web.png';
import cheap_app from '../assets/cheap_app.jpg';
import juuntos from '../assets/juuntos.png';

const data = [
  {
    id: '1',
    title: 'CheapFood App',
    description:
      'Desenvolvi um aplicativo de compras com entrega rápida, disponível para iOS e Android, projetado para oferecer uma experiência de compra intuitiva e eficiente.',
    image: {
      src: cheap_app,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://www.facebook.com/cheapfoodapp/',
    },
    technologies: [
      '#typescript',
      '#expo',
      '#react-native',
      '#react-navigation',
      '#react-native-reanimated',
      '#payments',
      '#lottie',
      '#firebase',
    ],
  },
  {
    id: '2',
    title: 'CheapFood Entregador',
    description:
      'O CheapFood Entregador é um aplicativo projetado para otimizar a experiência dos entregadores de refeições. Com uma interface intuitiva, os entregadores podem receber e gerenciar pedidos com facilidade, rastrear rotas em tempo real e se comunicar diretamente com os clientes.',
    image: {
      src: entregador,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://github.com/tolypash/react-native-yoco',
    },
    technologies: [
      '#react-native',
      '#typescript',
      '#swift',
      '#kotlin',
      '#expo modules api',
      '#turbo modules',
      '#npm',
      '#payments',
      '#sdk',
    ],
  },
  {
    id: '3',
    title: 'Pontotel Gestão',
    description:
      'O Pontotel Gestão permite que você registre, acompanhe e maximize seus pontos de forma fácil e eficiente. Os usuários podem visualizar o saldo de pontos em tempo real, receber notificações sobre oportunidades de resgate e acessar análises detalhadas sobre suas atividades.',
    image: {
      src: gestao,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://apps.apple.com/br/app/pontotel-gest%C3%A3o/id1457844741',
    },
    technologies: [
      '#typescript',
      '#react-native',
      '#expo',
      '#mobx',
      '#react-navigation',
      '#i18next',
      '#jest',
      '#sentry',
      '#axios',
      '#styled-components',
      '#firebase',
      '#lottie',
      '#date-fns',
      '#reactotron',
      '#zustand',
      '#eslint',
      '#prettier',
      '#yup',
      '#jail-monkey',
      '#react-native-svg',
      '#expo-sqlite',
      '#expo-image-manipulator',
      '#redux',
      '#context-api',
      '#native-module',
    ],
  },
  {
    id: '4',
    title: 'BatePonto',
    description:
      'App exclusivo para marcação de pontos com segurança, rapidez e praticidade. O Bateponto é um aplicativo de ponto eletrônico que permite que os funcionários registrem sua entrada e saída do trabalho com facilidade e precisão.',
    image: {
      src: 'https://www.pontotel.com.br/local/wp-content/uploads/2019/05/como-funciona-o-pontotel-controle-de-ponto-pelo-celular.webp',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://apps.apple.com/br/app/bateponto/id1531898009',
    },
    technologies: [
      '#typescript',
      '#react-native',
      '#expo',
      '#mobx',
      '#react-navigation',
      '#i18next',
      '#jest',
      '#sentry',
      '#axios',
      '#styled-components',
      '#firebase',
      '#lottie',
      '#date-fns',
      '#reactotron',
      '#zustand',
      '#eslint',
      '#prettier',
      '#yup',
      '#jail-monkey',
      '#react-native-svg',
      '#expo-sqlite',
      '#expo-image-manipulator',
      '#redux',
      '#context-api',
      '#native-module',
    ],
  },
  {
    id: '5',
    title: 'Parceiro da Construção',
    description:
      'Desenvolvi um aplicativo educacional voltado para o setor da construção civil, com o objetivo de capacitar profissionais de maneira prática e acessível. A plataforma oferece uma variedade de cursos especializados, focados nas necessidades do mercado, abordando desde técnicas de construção até normas de segurança.',
    image: {
      src: 'https://cdn.prod.website-files.com/63efdee0086be8e9f2b90d1d/640b8a6fee255ab41171be32_Plataforma%205.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://apps.apple.com/br/app/parceiro-da-constru%C3%A7%C3%A3o/id1567978563',
    },
    technologies: [
      '#react-native',
      'expo',
      '#redux',
      '#redux-toolkit',
      '#react-navigation',
      '#nodejs',
      '#express',
      '#mongodb',
    ],
  },
  {
    id: '6',
    title: 'Luriko Nakayama Psicologia',
    description:
      'Desenvolvi um site de psicologia com foco em criar um ambiente acolhedor e intuitivo para os usuários. A plataforma permite agendamentos online.',
    image: {
      src: web,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://lurikopsicologa.com/',
    },
    technologies: ['#html', '#css', '#wordpress', '#scss'],
  },
  {
    id: '7',
    title: 'Juuntos',
    description:
      'Plataforma que facilita o uso de benefícios corporativos na compra de medicamentos e outros produtos medicinais.',
    image: {
      src: juuntos,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://play.google.com/store/apps/details?id=com.juuntos.farmacia',
    },
    technologies: [
      '#typescript',
      '#expo',
      '#react-native',
      '#react-navigation',
      '#react-native-reanimated',
      '#payments',
      '#lottie',
      '#firebase',
      '#zustand',
      '#react-native-svg',
      '#expo-sqlite',
      '#expo-image-manipulator',
      '#redux',
      '#local-authentication',
    ],
  },
];

export default data;
