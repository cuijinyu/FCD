import React, { FC } from 'react';
import Code from '../code/code';
import { Card, Collapse } from 'antd';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

interface PlayGoundProps {
    title: string,
    code: string,
    language: string,
    editAble: boolean
}

const PlayGound:FC<PlayGoundProps> = props => {
    return (
        <div>
            <Card title={props.title}>
                {props.children}
            </Card>
            <Collapse>
                <Panel key='code' header="代码示例">
                    <Code content={props.code}
                          language={props.language}
                          editAble={props.editAble}/>
                </Panel>
            </Collapse>
        </div>
    )
}

export default PlayGound;