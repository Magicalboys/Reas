import React from 'react';
import Home from '@/pages/Home';
import Demo from '@/pages/Demo';
import {Route, Routes} from 'react-router-dom';

interface IRouter {
  path: string;
  element: JSX.Element;
  loadData?: (store: any) => any;
}

export const routesConfig: Array<IRouter> = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/demo',
        element: <Demo />,
        loadData: Demo.getInitProps,
    },
];

export const getRoutes = (routesConfig: Array<IRouter>) => { // TODO: 增加嵌套路由子<Route />的生成
    return (
        <Routes>
            {
                routesConfig.map((route, index) => (
                    <Route {...route} key={index} />
                ))
            }
        </Routes>
    );
};
