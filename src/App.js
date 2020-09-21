import React, { useLayoutEffect } from 'react';
// import Button from './component/child/Button';
import Layout from './component/Layout';
// import logo from './image/request.PNG';
import MyRouter from './router';

const App = (props) => {
    return (
        <Layout>
            <MyRouter />
        </Layout>
    )
}

export default App;
