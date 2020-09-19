import React, { useLayoutEffect } from 'react';
import Button from './component/child/Button';
import Layout from './component/Layout';
import logo from './image/request.PNG';
import MyRouter from './router';

const App = (props) => {
    return (
        <Layout>
            <Button>Click Here </Button><img src={logo} width={100} height={100} />
            <MyRouter />
        </Layout>
    )
}

export default App;
