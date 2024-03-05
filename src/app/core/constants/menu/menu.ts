


import { sideMenu } from '../../interfaces/menu/menu';
const adminFeaturesUrl = '/auth/admin-features'

export const sideMenuPortal : Record<string, sideMenu> = {
  1: {
      title : 'Data panel' ,
      link : `${adminFeaturesUrl}/panel` ,
      logo: 'assets/icon/panel.svg'
  },
  2: {
    title: 'Punto de interes',
    link : `${adminFeaturesUrl}/interesting-sites`,
    logo: 'assets/icon/interesting-sites.svg'

  },
  3: {
    title: 'Rutas',
    link : `${adminFeaturesUrl}/routes`,
    logo: 'assets/icon/routes.svg'

  },
  4: {
    title: 'Usuarios',
    link: `${adminFeaturesUrl}/users`,
    logo: 'assets/icon/users.svg'

  },
  5: {
    title: 'Spam',
    link: `${adminFeaturesUrl}/spam`,
    logo: 'assets/icon/spam.svg',


  },
  6: {
    title: 'Reclamos',
    link: `${adminFeaturesUrl}/claims`,
    logo: 'assets/icon/claims.svg'
  },
  7: {
    title: 'Configuración',
    link: `${adminFeaturesUrl}/config`,
    logo: 'assets/icon/config.svg'
  },
  8: {
    title: 'Salir',
    link: `${adminFeaturesUrl}/logout`,
    logo: 'assets/icon/exit.svg'

  }
}
