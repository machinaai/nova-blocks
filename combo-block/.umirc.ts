import { IConfig } from 'umi-types';

const config: IConfig = {
  plugins: [
    ['umi-plugin-block-dev', {}],
    ['umi-plugin-react',{
      antd: true,
      location: true
    }]
  ],
}

export default config;
