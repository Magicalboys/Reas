import React from 'react';
import Home from '@/pages/Home';
import User from '@/pages/User';
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
        path: '/user',
        element: <User />,
        loadData: User.getInitProps,
    },
];

export const getRoutes = (routesConfig: Array<IRouter>) => {
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
