import { useIntl } from 'umi';
/**
 * Hook useListRequeriments
 *
 * @param {number} [requeriments=3]
 * @return {*} 
 */
export const useListRequerments = (requeriments: number = 3) => {

    const internationalization =  useIntl();

    const arrayTemp = [];

    for (let index = 0; index < requeriments; index += 1) {
        arrayTemp.push({
            title: internationalization.formatMessage({
                id: `identityVerification.verifyIdentify.requeriments.${index+1}.title`
            }),
            content: internationalization.formatMessage({
                id: `identityVerification.verifyIdentify.requeriments.${index+1}.content`
            })
        })
    }
    return arrayTemp;
}