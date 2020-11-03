
import React from 'react';
import { ExpandOutlined, InsertRowBelowOutlined, UploadOutlined } from '@ant-design/icons';

const action=()=>1
export const dataFixture= [
        {
            icon: <ExpandOutlined />,
            valOption: 'option1',
            action:()=>5
        },
        {
            icon: <UploadOutlined />,
            valOption: 'option2',
            action:action
        },
        {
            icon: <InsertRowBelowOutlined />,
            valOption: 'option3',
            action:action
        }
    ]
