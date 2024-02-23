import React, {Fragment} from 'react';
import {ISSRFunction} from '@/utils/type';
import {connect} from 'react-redux';
import {getUserData} from '../../store/features/userSlice';
import {Helmet} from 'react-helmet';

interface IProps {
  content?: string;
  getUserData?: (data: string) => void;
}

const User: ISSRFunction<IProps> = data => (
    <Fragment>
        <Helmet>
            <title>简易的服务器端渲染框架 - User</title>
            <meta name="description" content="服务器端渲染框架" />
        </Helmet>
        <div>
            <h1>{data.content}</h1>
            <button
                type="button"
                onClick={(): void => {
                    data?.getUserData?.('刷新过后的数据');
                }}
            >
        刷新
            </button>
        </div>
    </Fragment>
);

const mapStateToProps = (state: any): any =>
// 将对应reducer的内容透传回dom
    ({
        content: state?.user?.content,
    });

const mapDispatchToProps = (dispatch: any): Record<string, unknown> => ({
    getUserData: (data: string): void => {
        dispatch(getUserData(data));
    },
});

const storeUser: any = connect(mapStateToProps, mapDispatchToProps)(User);

storeUser.getInitProps = (store: any, data?: string): void => store.dispatch(getUserData(data || '这是初始化的User'));

export default storeUser;
