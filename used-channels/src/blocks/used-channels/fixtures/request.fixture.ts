import mobile from './Mobile.svg';
import tablet from './Tablet.svg';
import web from './Web.svg';

export const dataFixture = [
    {
        icon:mobile,
        name:'mobile',
        backgroungCol:'red',
        action:()=>{console.log('mobile')}
    },
    {
        icon:web,
        name:'web',
        backgroungCol:'blue',
        action:()=>{console.log('web')}
    },
    {
        icon:tablet,
        name:'tablet',
        backgroungCol:'red',
        action:()=>{console.log('tablet')}
    }
]