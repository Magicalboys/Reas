import {hydrateRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {getRoutes, routesConfig} from '@/router';
import {clientStore} from '@/store';
import {Provider} from 'react-redux';
import React from 'react';
import StyleContext from 'isomorphic-style-loader/StyleContext';

const insertCss = (...styles: any[]) => {
    // 客户端执行，插入style
    const removeCss = styles.map(style => style._insertCss());
    // 组件卸载时 移除当前的 style 标签
    return () => removeCss.forEach(dispose => dispose());
};
  
const Client = (): JSX.Element => (
    <Provider store={clientStore}>
        <BrowserRouter>
            <StyleContext.Provider value={{insertCss}}>
                {getRoutes(routesConfig)}
            </StyleContext.Provider>
        </BrowserRouter>
    </Provider>
);

// 将事件处理加到ID为root的dom下
hydrateRoot(document.getElementById('root') as Document | Element, <Client />);
