import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Nosotros',
      href: getPermalink('/about'),
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'SIM Multi-Operador',
          href: getPermalink('/simMulti'),
        }
      ],
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    }
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Nosotros',
      links: [
        { text: 'Misión', href: getPermalink('/about') },
        { text: 'Visión', href: getPermalink('/about') },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { text: 'SIM Card Multi operador', href: getPermalink('/simMulti') }
      ],
    },
    {
      title: 'Contáctanos',
      links: [
        { text: 'Contacto', href: getPermalink('/contact') }
      ],
    }
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/wusla-m2m/', target: '_blank' }
  ],
  footNote: `
     <span class="text-muted"> Wusla. Todos los derechos reservados. </span>
  `,
};
