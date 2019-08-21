import React, { FC, ReactElement,  } from 'react';
import MaybeNull from '../maybeNull/MaybeNull';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

interface FCDLayoutProps {
    Sider: ReactElement,
    Header: ReactElement,
    Content: ReactElement,
    Footer: ReactElement
}

const FCDLayout:FC<Partial<FCDLayoutProps>> = (props) => {
    return (
        <Layout>
            <Sider>
                <MaybeNull component={props.Sider} />
            </Sider>
            <Layout>
                <Header>
                    <MaybeNull component={props.Header} />
                </Header>
                <Content>
                    <MaybeNull component={props.Content} />
                </Content>
                <Footer>
                    <MaybeNull component={props.Footer} />
                </Footer>
            </Layout>
        </Layout>
    )
}

export default FCDLayout;

