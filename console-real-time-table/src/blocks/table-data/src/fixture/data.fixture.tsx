import React from 'react';
import { CheckCircleFilled, CloseCircleFilled, VideoCameraFilled } from '@ant-design/icons';

export const dataFixture = [
    {key: '13692468',
    idRequest: '13692468',
    name: `Andres Loma Palacios`,
    origin:'android',
    statusIne:true,
    statusVal:false,
    statusOtp:true,
    statusSign:true,
    statusBen:false,
    action:''}
  ];

export const setValField = (val:any)=>{
    const {idRequest}   = val;
    console.log('idRequest',idRequest);
    
}
  


export const columnsFixture = [
    {
        title: 'Número de solicitud',
        dataIndex: 'idRequest',
        key: 'idRequest',
      },
      {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Dispositivo',
        dataIndex: 'origin',
        key: 'origin',
      },
      {
        title: 'INE/IFE',
        dataIndex: 'statusIne',
        key: 'statusIne',
        render: (status : any) => {
          if (status) {
            return <CheckCircleFilled style={{ fontSize: '16px', color: '#4caf50' }}/>;
          } else {
            return <CloseCircleFilled style={{ fontSize: '16px', color: '#f96132' }}/>;
          }
        },
      },
      {
        title: 'Val. ID',
        dataIndex: 'statusVal',
        key: 'statusVal',
        render: (status:any) => {
          if (status) {
            return <CheckCircleFilled style={{ fontSize: '16px', color: '#4caf50' }}/>;
          } else {
            return <CloseCircleFilled style={{ fontSize: '16px', color: '#f96132' }}/>;
          }
        },
      },
      {
        title: 'OTP',
        dataIndex: 'statusOtp',
        key: 'statusOtp',
        render: (status:any) => {
          if (status) {
            return <CheckCircleFilled style={{ fontSize: '16px', color: '#4caf50' }}/>;
          } else {
            return <CloseCircleFilled style={{ fontSize: '16px', color: '#f96132' }}/>;
          }
        },
      },
      {
        title: 'Firma',
        dataIndex: 'statusSign',
        key: 'statusSign',
        render: (status: any) => {
          if (status) {
            return <CheckCircleFilled style={{ fontSize: '16px', color: '#4caf50' }}/>;
          } else {
            return <CloseCircleFilled style={{ fontSize: '16px', color: '#f96132' }}/>;
          }
        },
      },
      {
        title: 'Beneficiarios',
        dataIndex: 'statusBen',
        key: 'statusBen',
        render: (status:any) => {
          if (status) {
            return <CheckCircleFilled style={{ fontSize: '16px', color: '#4caf50' }}/>;
          } else {
            return <CloseCircleFilled style={{ fontSize: '16px', color: '#f96132' }}/>;
          }
        },
      },
      {
        title: 'En línea',
        dataIndex: 'action',
        key: 'action',
        render: (text:any) => {
          if (text) {
            return (
              <>
                <VideoCameraFilled />
                <a>{text}</a>
              </>
            );
          } else {
            return <a>{text}</a>;
          }
        },
      },
]