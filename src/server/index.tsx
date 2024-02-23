import express from 'express';
import childProcess from 'child_process';
import path from 'path';
import {matchRoutes, RouteObject} from 'react-router-dom';
import {routesConfig} from '@/router';
import {serverStore} from '@/store';
import {render} from './util';

const app = express();

const bodyParser = require('body-parser');

// 请求body解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 注入事件处理的脚本
app.use(express.static(path.resolve(process.cwd(), 'client_build')));

// demo api
app.post('/api/getDemoData', (req, res) => {
    res.send({
        data: req.body,
        status_code: 0,
    });
});

app.get('*', (req, res) => {
    const routeMap = new Map<string, () => Promise<any>>(); // path - loaddata 的map
    routesConfig.forEach(item => {
        if (item.path && item.loadData) {
            routeMap.set(item.path, item.loadData(serverStore));
        }
    });

    // 匹配当前路由的routes
    const matchedRoutes = matchRoutes(routesConfig as RouteObject[], req.path);

    const promises: Array<() => Promise<any>> = [];
    matchedRoutes?.forEach(item => {
        if (routeMap.has(item.pathname)) {
            promises.push(routeMap.get(item.pathname) as () => Promise<any>);
        }
    });

    Promise.all(promises).then(() => {
    // 统一放到state里
    // 编译需要渲染的JSX, 转成对应的HTML STRING
        res.send(render(req));
    });
});

app.listen(3000, () => {
    console.log('ssr-server listen on 3000');
});

childProcess.exec('start http://127.0.0.1:3000');
