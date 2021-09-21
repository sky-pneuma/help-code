import MainPage from "./JS/Pages/Main/MainPage";
import RenderFunctionsCode from './JS/Pages/Functions/RenderFunctionsCode';

export const routes = [
  { id: 'home', path: '/', exact: true, component: MainPage },
  { id: 'handleObjectChange', path: '/functions/handle-object-change', component: RenderFunctionsCode },
  { id: 'compare', path: '/functions/compare', component: RenderFunctionsCode },
  { id: 'getQueryParams', path: '/functions/get-query-params', component: RenderFunctionsCode },
  { id: 'clone', path: '/functions/clone', component: RenderFunctionsCode },
  { id: 'validation', path: '/functions/validation', component: RenderFunctionsCode },
];