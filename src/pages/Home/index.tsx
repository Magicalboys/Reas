import React, {FC, Fragment} from 'react';
import {Helmet} from 'react-helmet';
import './index.css';

const Home: FC = () => (
    <Fragment>
        <Helmet>
            <title>简易的服务器端渲染框架 - HOME</title>
            <meta name="description" content="服务器端渲染框架" />
        </Helmet>
        <div className='test'>
            <h1>hello-ssr</h1>
            <button
                type="button"
                onClick={(): void => {
                    alert('hello-ssr');
                }}
            >
        alert
            </button>
        </div>
    </Fragment>
);

export default Home;
