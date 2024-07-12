import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '#',
    },
    {
      text: 'Nosotros',
      href: getPermalink('/#features'),
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'SIM Card Multioeprador',
          href: getPermalink('/services'),
        },
        {
          text: 'Tracker mas Conectividad',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Plataforma',
          href: getPermalink('/about'),
        },
        {
          text: 'Insumos',
          href: getPermalink('/contact'),
        }
      ],
    },
    {
      text: 'Información',
      href: getPermalink('/#features'),
    }
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Nosotros',
      links: [
        { text: 'Misión', href: '#' },
        { text: 'Visión', href: '#' },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { text: 'SIM Card Multioeprador', href: '#' },
        { text: 'Tracker mas Conectividad', href: '#' },
        { text: 'Plataforma', href: '#' },
        { text: 'Insumos', href: '#' }
      ],
    },
    {
      title: 'Contactanos',
      links: [
        { text: 'Whatsapp', href: '#' }
      ],
    }
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: '#' }
  ],
  footNote: `
    <img class="w-7 h-5 md:w-8 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="./src/assets/favicons/icon2.png" alt="Wusla logo" loading="lazy"></img>
     <span class="text-muted"> Wusla. Todos los derechos reservados. </span>
  `,
};
