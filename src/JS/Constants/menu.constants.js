export const MENU_ITEMS = {
  main: [
    {
      title: 'Home',
      icon: 'FiAirplay',
      className: 'color--green-haze main-menu__icon',
      link: '/'
    },
    {
      title: 'Linux Alias',
      icon: 'FiEdit',
      className: 'color--gray-gull',
      link: '/alias'
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
      icon: 'FiTool',
      className: 'color--froly',
      children: [
        { id: 'functions', link: '/functions/handle-object-change', title: 'handleObjectChange' },
        { id: 'compare', link: '/functions/compare', title: 'compare' },
        { id: 'getQueryParams', link: '/functions/get-query-params', title: 'getQueryParams' },
        { id: 'clone', link: '/functions/clone', title: 'clone' },
        { id: 'validation', link: '/functions/validation', title: 'validation' },
        { id: 'checkEmptyFields', link: '/functions/check-empty-fields', title: 'checkEmptyFields' },
        { id: 'calculateTableCell', link: '/functions/calculate-table-cell', title: 'calculateTableCell' },
        { id: 'getClosedAccordionBodyHeight', link: '/functions/get-closed-accordion-body-height', title: 'getClosedAccordionBodyHeight' },
      ]
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
      className: 'color--primary',
      children: []
    },
  ],
  branch2: [
    {
      title: 'Chapter 2',
      icon: 'FiBriefcase',
      className: 'color--green-haze',
      link: '/',
    },
    {
      title: 'Chapter 3',
      icon: 'FiShuffle',
      className: 'color--primary',
      link: '/'
    }
  ],
  branch3: [
    {
      title: 'Chapter',
      icon: 'FiPieChart',
      className: 'color--gray-gull',
      link: '/'
    },
    {
      title: 'Chapter 2',
      icon: 'FiTool',
      className: 'color--sea-buckthorn'
    }
  ]
};
