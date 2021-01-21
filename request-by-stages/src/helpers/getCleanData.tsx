import { DataOption, ItemsStatistic } from '../interfaces/ProblockProps..interface';
import { getPercentage } from '../../../ConsoleUsedChannels/src/helpers/getPercentage';
import { DataDevice } from '../../../ConsoleUsedChannels/src/interfaces/componentsDefinition.interface';

export const getCleanData = (data: any) => {
    let dataDevice: DataOption[] = [];
    let dataStatistic:ItemsStatistic[]=[];

    if(data) {
        const totalReq=data[0].count;
        const newData={...data};
        delete newData[0];
        for (const property in newData) {
            const {type,count,averageTime}=newData[property];        
            dataDevice = [...dataDevice, {
                key:Number(property),
                type: type,
                percentage: totalReq === 0 ? 0 : Number(((100 * count) / totalReq).toFixed(2))
            }];
            dataStatistic=[...dataStatistic,{
                type,
                count,
                averageTime
            }]
        }    
        return {dataDevice,dataStatistic}
    }
    return {
        dataDevice : null,
        dataStatistic: null,
    }
}


