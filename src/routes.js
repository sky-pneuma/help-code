import MainPage from "./JS/Pages/Main/MainPage";
import HandleObjectChange from './JS/Pages/Functions/HandleObjectChange';

export const routes = [
  { id: 'home', path: '/', exact: true, component: MainPage },
  { id: 'handleObjectChange', path: '/functions/handle-object-change', component: HandleObjectChange },
];