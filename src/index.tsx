import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/layout/layout';
import 'antd/dist/antd.css'

const App = () => (
    <div>
        <Layout Header={<div>123</div>}>
        </Layout>
    </div>
)

window.onload = () => {
    const app = document.getElementById('app');
    ReactDOM.render(<App />, app);
};