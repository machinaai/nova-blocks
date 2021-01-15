
import React from 'react';
import { ExpandOutlined, InsertRowBelowOutlined, UploadOutlined } from '@ant-design/icons';

const action=()=>1
export const dataFixture= [
        {
            icon: <ExpandOutlined />,
            valOption: 'option1',
            action,
            color:'black'
        },
        {
            icon: <UploadOutlined />,
            valOption: 'option2',
            action,
            color:'black'
        },
        {
            icon: <InsertRowBelowOutlined />,
            valOption: 'option3',
            action,
            color:'black'
        }
    ]
