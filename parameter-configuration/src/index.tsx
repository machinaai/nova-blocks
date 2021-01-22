import React from 'react';
import { ConfigParamsContainer } from './components/main-container/config-params';

interface ConfigParamsProps {
    fontFamily?: {
        fontTitle: string
        fontContent: string
    }
}

const ConfigParams: React.FC<ConfigParamsProps> = ({fontFamily}) => {  
  return (
    <>
      <ConfigParamsContainer font={fontFamily}/>      
    </>
  );
};

export default ConfigParams;
