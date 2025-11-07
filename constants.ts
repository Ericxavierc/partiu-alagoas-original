import { Tour, Category } from './types';

export const TOURS_DATA: Tour[] = [
  {
    id: 1,
    title: 'Combo Litoral Sul - Francês & Gunga',
    shortDescription: 'Descubra dois paraísos imperdíveis no mesmo dia: as piscinas naturais...',
    fullDescription: 'Descubra dois paraísos imperdíveis no mesmo dia: as piscinas naturais do Francês e o visual exuberante do Gunga. Inclui transporte ida e volta + guia.',
    price: 139.90,
    originalPrice: 159.90,
    imageUrl: 'https://storage.googleapis.com/aai-web-samples/user-assets/image.png',
    isPromo: true,
    category: 'Litoral Sul',
    discount: '15% Off'
  },
  {
    id: 2,
    title: 'Aventura na Barra - São Miguel',
    shortDescription: 'Viva a experiência de um dia inteiro na Barra de São Miguel! Mar calmo e cristalino...',
    fullDescription: 'Bateu a vontade de relaxar? Temos um passeio novo na área! Barra de São Miguel (mar calmo e transparente), perfeito para banho e descanso. O passeio de lancha não está incluso, apenas o transporte com guia.',
    price: 79.90,
    originalPrice: 99.90,
    imageUrl: 'https://picsum.photos/id/1016/400/400',
    isPromo: true,
    category: 'Litoral Sul',
    discount: '20% Off'
  },
  {
    id: 3,
    title: 'Gunga Express - Falésias + Mirante',
    shortDescription: 'O passeio mais procurado! Transporte de van ou micro-ônibus até o Gunga, com parada no Mirante...',
    fullDescription: 'O passeio mais procurado! Transporte de van ou micro-ônibus até o Gunga, com parada no Mirante. Aventura opcional de buggy ou quadriciclo (não inclusa).',
    price: 59.90,
    originalPrice: 75.00,
    imageUrl: 'https://picsum.photos/id/1018/400/400',
    isPromo: true,
    category: 'Litoral Sul',
  },
  {
    id: 4,
    title: 'Praia do Francês (30km de Maceió)',
    shortDescription: 'Famosa por suas águas claras e recifes de corais que formam piscinas naturais...',
    fullDescription: 'A Praia do Francês é um dos cartões postais de Alagoas. Dividida entre um lado com ondas, ideal para surf, e outro protegido por recifes, perfeito para famílias. Aproveite a culinária local nas barracas à beira-mar.',
    price: 45.00,
    imageUrl: 'https://picsum.photos/id/1025/400/400',
    isPromo: false,
    category: 'Litoral Sul',
  },
  {
    id: 5,
    title: 'Ipioca (Hibiscus/Vivari)',
    shortDescription: 'Relaxe em um dos beach clubs mais charmosos do litoral norte, com total infraestrutura...',
    fullDescription: 'Ipioca é sinônimo de tranquilidade e sofisticação. Passe o dia no beach club Hibiscus ou no Vivari, com piscinas, redes, e serviço de bar e restaurante de alta qualidade. Uma experiência premium à beira-mar.',
    price: 60.00,
    imageUrl: 'https://picsum.photos/id/103/400/400',
    isPromo: false,
    category: 'Litoral Norte',
  },
  {
    id: 6,
    title: 'Maragogi (Piscinas Naturais)',
    shortDescription: 'Conhecido como o "Caribe Brasileiro", Maragogi encanta com suas galés...',
    fullDescription: 'Navegue em um catamarã até as famosas piscinas naturais de Maragogi. Mergulhe com snorkel em águas cristalinas repletas de peixes coloridos. Um passeio inesquecível e essencial em sua visita a Alagoas.',
    price: 120.00,
    imageUrl: 'https://picsum.photos/id/1040/400/400',
    isPromo: false,
    category: 'Litoral Norte',
  },
  {
    id: 7,
    title: 'São Miguel dos Milagres',
    shortDescription: 'Descubra a Rota Ecológica dos Milagres, um santuário de praias desertas e coqueirais...',
    fullDescription: 'São Miguel dos Milagres é o destino perfeito para quem busca paz e contato com a natureza. Suas praias de águas mornas e piscinas naturais formadas pelo Rio Tatuamunha, onde se pode ver o peixe-boi, são um espetáculo à parte.',
    price: 150.00,
    imageUrl: 'https://picsum.photos/id/1043/400/400',
    isPromo: false,
    category: 'Litoral Norte',
  },
   {
    id: 8,
    title: 'Centro Histórico e Pontal da Barra',
    shortDescription: 'Mergulhe na cultura alagoana com um tour pelo centro histórico de Maceió e o bairro das rendeiras.',
    fullDescription: 'Conheça a rica história de Maceió visitando seus museus, igrejas e casarões coloniais. Em seguida, encante-se com o artesanato do Pontal da Barra, famoso pelo filé, e aprecie o pôr do sol na Lagoa Mundaú.',
    price: 50.00,
    imageUrl: 'https://picsum.photos/id/1047/400/400',
    isPromo: false,
    category: 'City Tour e Cultura',
  },
  {
    id: 9,
    title: 'Piscinas Naturais de Pajuçara (Jangada)',
    shortDescription: 'Um passeio clássico e imperdível em Maceió: navegue de jangada até as piscinas da Pajuçara.',
    fullDescription: 'A apenas 2km da costa, as piscinas naturais de Pajuçara são um oásis de águas tranquilas e cristalinas. O passeio de jangada é uma experiência autêntica e relaxante, ideal para todas as idades.',
    price: 40.00,
    imageUrl: 'https://picsum.photos/id/1050/400/400',
    isPromo: false,
    category: 'City Tour e Cultura',
  }
];

export const CATEGORIES_DATA: Category[] = [
  {
    name: 'Litoral Sul',
    tours: TOURS_DATA.filter(t => t.category === 'Litoral Sul' && !t.isPromo),
  },
  {
    name: 'Litoral Norte',
    tours: TOURS_DATA.filter(t => t.category === 'Litoral Norte'),
  },
  {
    name: 'City Tour e Cultura',
    tours: TOURS_DATA.filter(t => t.category === 'City Tour e Cultura'),
  },
];