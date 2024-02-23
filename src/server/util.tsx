import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';
import {Provider} from 'react-redux';
import {serverStore} from '../store';
import {getRoutes, routesConfig} from '../router';
import {Helmet} from 'react-helmet';
import StyleContext from 'isomorphic-style-loader/StyleContext';

export const render = (req: any) => {
    // 定义存储组件 css 的变量
    const css = new Set();
    // const context = {
    //     css: []
    // };
    // 定义收集 css 的方法.此方法会在`withStyles`高阶组件内获得，然后执行该方法，完成 css 内容搜集。
    const insertCss = (...styles: any) => styles.forEach((style:any) => css.add(style._getCss()));
    const content = renderToString(
        <StyleContext.Provider value={{insertCss}}>
            <Provider store={serverStore}>
                <StaticRouter location={req.path}>
                    {getRoutes(routesConfig)}
                </StaticRouter>
            </Provider>
        </StyleContext.Provider>
    );
    // 可以提供渲染时添加的所有内容
    const helmet = Helmet.renderStatic();
    return `
    <html>
    <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <style>${[...css].join('')}</style>
    </head>
    <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
              state: ${JSON.stringify(serverStore.getState())}
          }
        </script>
        <script src="/index.js"></script>
    </body>
    </html>
  `;
};