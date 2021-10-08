import MainPage from "./JS/Pages/Main/MainPage";
import RenderFunctionsCode from './JS/Pages/Functions/RenderFunctionsCode';
import Alias from './JS/Pages/Alias/Alias';

export const routes = [
  { id: 'home', path: '/', exact: true, component: MainPage },
  { id: 'handleObjectChange', path: '/functions/handle-object-change', component: RenderFunctionsCode },
  { id: 'compare', path: '/functions/compare', component: RenderFunctionsCode },
  { id: 'getQueryParams', path: '/functions/get-query-params', component: RenderFunctionsCode },
  { id: 'clone', path: '/functions/clone', component: RenderFunctionsCode },
  { id: 'validation', path: '/functions/validation', component: RenderFunctionsCode },
  { id: 'checkEmptyFields', path: '/functions/check-empty-fields', component: RenderFunctionsCode },
  { id: 'calculateTableCell', path: '/functions/calculate-table-cell', component: RenderFunctionsCode },
  { id: 'getClosedAccordionBodyHeight', path: '/functions/get-closed-accordion-body-height', component: RenderFunctionsCode },
  { id: 'linuxAlias', path: '/alias', exact: true, component: Alias },
];