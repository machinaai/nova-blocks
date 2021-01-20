import React from 'react';
import { useIntl } from 'umi';
import { InfoCircleOutlined } from '@ant-design/icons';
import { PropsTotalReq } from '@/interfaces/totalReq.interface';
import { PropsComponent} from '@/interfaces/ProblockProps.interface';
import TotalRequestCard from '../card/src/index';


export const RequestContainer: React.FC<PropsComponent> = ({
    requestOptions,
    fontFam ,
    icons,
    actionOpInfo
}) => {
    const intl = useIntl();

    const dataTotalReq: PropsTotalReq= {
        title: intl.formatMessage({ id: 'totalRequest.title' }),
        fontFam,
        imgTitle: icons?.iconTotalReq,
        totalRequest: requestOptions?.totalRequest === undefined ? 0 : requestOptions?.totalRequest,
        optionInfo: {
            tooltipTitle:intl.formatMessage({ id: 'totalRequest.titleTooltip' }),
            icon: <InfoCircleOutlined style={{ fontSize: '16px' }} />,
            action: actionOpInfo
        },
        subtitle: intl.formatMessage({ id: 'totalRequest.subtitle' }),
        options: [
            {
                nameOption: `${intl.formatMessage({ id: 'totalRequest.op1' })}`,
                totalRequest: requestOptions?.initiated === undefined ? 0 : requestOptions?.initiated,
                icon: icons?.iconOp1
            },
            {
                nameOption: intl.formatMessage({ id: 'totalRequest.op2' }),
                totalRequest: requestOptions?.inProccess === undefined ? 0 : requestOptions?.inProccess,
                icon: icons?.iconOp2
            },
            {
                nameOption: intl.formatMessage({ id: 'totalRequest.op3' }),
                totalRequest: requestOptions?.abandoned === undefined ? 0 : requestOptions?.abandoned,
                icon: icons?.iconOp3
            },
            {
                nameOption: intl.formatMessage({ id: 'totalRequest.op4' }),
                totalRequest: requestOptions?.finished === undefined ? 0 : requestOptions?.finished,
                icon: icons?.iconOp4
            }
        ]
    }
    return (
        <div>
            <TotalRequestCard {...dataTotalReq} />
        </div>
    )
}
