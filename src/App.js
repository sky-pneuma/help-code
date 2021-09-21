import { Route, Switch } from "react-router-dom";

import { routes } from './routes';
import { MENU_ITEMS } from './JS/Constants/menu.constants';
import MainMenu from './JS/Components/MainMenu/MainMenu';

import './App.scss';

const App = () => {
  return (
    <div className="df">
      <aside>
        <MainMenu items={MENU_ITEMS} />
      </aside>

      <main>
        <div className="page-container">
          <Switch>
            {
              routes.map(route => {
                let Component = route.component;
                return <Route key={route.id} path={route.path} exact={route.exact}>
                  <Component id={route.id} />
                </Route>
              })
            }
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
