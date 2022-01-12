import { Redirect } from "react-router-dom";

import MainPage from "./JS/Pages/Main/MainPage";
import RenderFunctionsCode from './JS/Pages/Functions/RenderFunctionsCode';
import Alias from './JS/Pages/Alias/Alias';
import PageNotFound from './JS/Pages/PageNotFound/PageNotFound';

export const routes = [
  { id: 'home', path: '/', exact: true, component: MainPage },
  { id: 'pageNotFound', path: '/page-not-found', exact: true, component: PageNotFound },
  { id: 'handleObjectChange', path: '/functions/handle-object-change', component: RenderFunctionsCode },
  { id: 'compare', path: '/functions/compare', component: RenderFunctionsCode },
  { id: 'getQueryParams', path: '/functions/get-query-params', component: RenderFunctionsCode },
  { id: 'clone', path: '/functions/clone', component: RenderFunctionsCode },
  { id: 'validation', path: '/functions/validation', component: RenderFunctionsCode },
  { id: 'checkEmptyFields', path: '/functions/check-empty-fields', component: RenderFunctionsCode },
  { id: 'calculateTableCell', path: '/functions/calculate-table-cell', component: RenderFunctionsCode },
  { id: 'getClosedAccordionBodyHeight', path: '/functions/get-closed-accordion-body-height', component: RenderFunctionsCode },
  { id: 'validationUni', path: '/functions/validationUni', component: RenderFunctionsCode },
  { id: 'omitKeys', path: '/functions/omitKeys', component: RenderFunctionsCode },
  { id: 'getQueryString', path: '/functions/getQueryString', component: RenderFunctionsCode },
  { id: 'getQueryParamsFromUrl', path: '/functions/getQueryParamsFromUrl', component: RenderFunctionsCode },
  { id: 'getQueryObj', path: '/functions/getQueryObj', component: RenderFunctionsCode },
  { id: 'getStoreQueryObj', path: '/functions/getStoreQueryObj', component: RenderFunctionsCode },
  { id: 'getUrl', path: '/functions/getUrl', component: RenderFunctionsCode },
  { id: 'useOutsideToggle', path: '/functions/useOutsideToggle', component: RenderFunctionsCode },
  { id: 'addKeyPressEvent', path: '/functions/addKeyPressEvent', exact: true, component: RenderFunctionsCode },
  { id: 'redirect', path: '/other/page-not-found', exact: true, component: RenderFunctionsCode },

  { id: 'linuxAlias', path: '/alias', exact: true, component: Alias },
  { path: '*', component: () => <Redirect to="/page-not-found" /> }
];