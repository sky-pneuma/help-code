export const MENU_ITEMS = {
  main: [
    {
      title: 'Home',
      icon: 'FiAirplay',
      className: 'color--green-haze main-menu__icon',
      link: '/'
    },
    {
      title: 'Test',
      icon: 'FiUser',
      className: 'color--primary main-menu__icon',
      link: '/test',
    },
  ],
  branch: [
    {
      title: 'Components',
      icon: 'FiLayers',
      className: 'color--sea-buckthorn',
      children: []
    },
    {
      title: 'Functions',
      // icon: 'FiTag',
      icon: 'FiTool',
      className: 'color--froly',
      children: [{ id: 'functions', link: '/functions/handle-object-change', title: 'handleObjectChange' }]
    },
    {
      title: 'Chapter 3',
      icon: 'FiUsers',
      className: 'color--gray-gull',
      children: []
    },
    {
      title: 'Chapter 4',
      icon: 'FiSliders',
      className: 'color--primary'
    }
  ],
  branch2: [
    {
      title: 'Chapter',
      icon: 'FiShoppingBag',
      className: 'color--froly',
      link: '/merchants/',
    },
    {
      title: 'Chapter 2',
      icon: 'FiBriefcase',
      className: 'color--green-haze',
      link: '/lenders/',
    },
    {
      title: 'Chapter 3',
      icon: 'FiShuffle',
      className: 'color--primary',
      link: '/ping-tree/'
    }
  ],
  branch3: [
    {
      title: 'Chapter',
      icon: 'FiPieChart',
      className: 'color--gray-gull',
      link: '/reports/'
    },
    {
      title: 'Chapter 2',
      icon: 'FiTool',
      className: 'color--sea-buckthorn'
    }
  ]
};
