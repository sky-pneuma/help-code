import MainPage from "./JS/Pages/Main/MainPage";
import RenderFunctionsCode from './JS/Pages/Functions/RenderFunctionsCode';

export const routes = [
  { id: 'home', path: '/', exact: true, component: MainPage },
  { id: 'handleObjectChange', path: '/functions/handle-object-change', component: RenderFunctionsCode },
  { id: 'getParams', path: '/functions/get-params', component: RenderFunctionsCode },
];