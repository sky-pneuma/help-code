export const MENU_ITEMS = {
  main: [
    {
      title: 'Dashboard',
      icon: 'FiAirplay',
      className: 'color--green-haze main-menu__icon',
      link: '/'
    },
    {
      title: 'Consumers',
      icon: 'FiUser',
      className: 'color--primary main-menu__icon',
      link: '/consumers/'
    },
  ],
  mainMenu: [
    {
      title: 'Ticket Desk',
      icon: 'FiTag',
      className: 'color--froly',
      children: []
    },
    {
      title: 'Accounting',
      icon: 'FiDollarSign',
      className: 'color--sea-buckthorn',
      children: []
    },
    {
      title: 'Users',
      icon: 'FiUsers',
      className: 'color--gray-gull',
      children: []
    },
    {
      title: 'Settings',
      icon: 'FiSliders',
      className: 'color--primary'
    }
  ],
  partners: [
    {
      title: 'Merchants',
      icon: 'FiShoppingBag',
      className: 'color--froly',
      link: '/merchants/',
    },
    {
      title: 'Lenders',
      icon: 'FiBriefcase',
      className: 'color--green-haze',
      link: '/lenders/',
    },
    {
      title: 'Lender Ping Tree',
      icon: 'FiShuffle',
      className: 'color--primary',
      link: '/ping-tree/'
    }
  ],
  other: [
    {
      title: 'Reports',
      icon: 'FiPieChart',
      className: 'color--gray-gull',
      link: '/reports/'
    },
    {
      title: 'Tools',
      icon: 'FiTool',
      className: 'color--sea-buckthorn'
    }
  ]
};
