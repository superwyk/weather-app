import { useRoutes } from 'react-router-dom';
import { RouteObject } from 'react-router';
import Home from '../Home';
import Detail from '../Detail';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/detail',
        element: <Detail />
    },
    {
        path: '*',
        element: <div>404 Not Found</div>
    }
];

function Routes() {
    const element = useRoutes(routes);
    return element;
}

export default Routes;
