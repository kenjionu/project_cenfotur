


import { sideMenu } from '../../interfaces/menu/menu';


export const sideMenuPortal : Record<string, sideMenu> = {
  1: {
      title : 'Data panel' ,
      link : '/panel' ,
      logo: 'assets/icon/panel.svg'
  },
  2: {
    title: 'Punto de interes',
    link : '/interesting-sites',
    logo: 'assets/icon/interesting-sites.svg'

  },
  3: {
    title: 'Rutas',
    link : '/routes',
    logo: 'assets/icon/routes.svg'

  },
  4: {
    title: 'Usuarios',
    link: '/users',
    logo: 'assets/icon/users.svg'

  },
  5: {
    title: 'Spam',
    link: '/spam',
    logo: 'assets/icon/spam.svg',


  },
  6: {
    title: 'Reclamos',
    link: '/claims',
    logo: 'assets/icon/claims.svg'
  },
  7: {
    title: 'Configuración',
    link: '/config',
    logo: 'assets/icon/config.svg'
  },
  8: {
    title: 'Salir',
    link: '/config',
    logo: 'assets/icon/exit.svg'

  }
}
