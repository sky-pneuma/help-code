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
        { id: 'validationUni', link: '/functions/validationUni', title: 'validationUni' },
        { id: 'checkEmptyFields', link: '/functions/check-empty-fields', title: 'checkEmptyFields' },
        { id: 'calculateTableCell', link: '/functions/calculate-table-cell', title: 'calculateTableCell' },
        { id: 'getClosedAccordionBodyHeight', link: '/functions/get-closed-accordion-body-height', title: 'getClosedAccordionBodyHeight' },
        { id: 'omitKeys', link: '/functions/omitKeys', title: 'omitKeys' },
        { id: 'getQueryString', link: '/functions/getQueryString', title: 'getQueryString' },
        { id: 'getQueryParamsFromUrl', link: '/functions/getQueryParamsFromUrl', title: 'getQueryParamsFromUrl' },
        { id: 'getQueryObj', link: '/functions/getQueryObj', title: 'getQueryObj' },
        { id: 'getStoreQueryObj', link: '/functions/getStoreQueryObj', title: 'getStoreQueryObj' },
        { id: 'getUrl', link: '/functions/getUrl', title: 'getUrl' },
        { id: 'useOutsideToggle', link: '/functions/useOutsideToggle', title: 'useOutsideToggle' },
        { id: 'addKeyPressEvent', link: '/functions/addKeyPressEvent', title: 'addKeyPressEvent' },
        { id: 'scrollToFirstFieldWithError', link: '/functions/scrollToFirstFieldWithError', title: 'scrollToFirstFieldWithError' },
        { id: 'animatedScrollTo', link: '/functions/animatedScrollTo', title: 'animatedScrollTo' },
        { id: 'formatPriceInput', link: '/functions/formatPriceInput', title: 'formatPriceInput' },
        { id: 'defineBoxPositionByScreen', link: '/functions/defineBoxPositionByScreen', title: 'defineBoxPositionByScreen' },
        { id: 'formatPhone', link: '/functions/formatPhone', title: 'formatPhone' },
        { id: 'copyToClipboard', link: '/functions/copyToClipboard', title: 'copyToClipboard' },
      ]
    },
    {
      title: 'RegExp',
      icon: 'FiUsers',
      className: 'color--gray-gull',
      children: [
        { id: 'phoneNumberHyphen', link: '/regExp/phoneNumberHyphen', title: 'phoneNumberHyphen' },
      ]
    },
    {
      title: 'Other',
      icon: 'FiSliders',
      className: 'color--primary',
      children: [
        { id: 'redirect', link: '/other/page-not-found', title: 'redirect' },
      ]
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
