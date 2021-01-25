import { ItemFile } from '../interfaces/uploadInterface.interface';
import { transform } from 'lodash';
import { ItemFileAudio } from '../interfaces/audioInterface';

/*
   * Function that only allows letters from A-Z, a-z
   */
export const onlyLetters = (e: any) => {
    let key = e.key;
    let expReg = new RegExp(/[A-Za-z\s]/);
    let validate = expReg.test(key);
    if (!validate) {
        e.preventDefault();
    }
};

/*
 * Function that only allows numbers 0-9
 */
export const onlyNumbers = (e: any) => {
    let key = e.key;
    let special = e.keyCode;
    let expReg = new RegExp(/[0-9\s]/);
    let validate = expReg.test(key);
    if (!validate) {
        if (
            special === 32 ||
            special === 46 ||
            special === 8 ||
            special === 37 ||
            special === 39 ||
            special === 9
        ) {
            return key;
        }
        e.preventDefault();
    }
};

/*
 * Function that only allows numbers 0-9 and letters a-z, A-Z
 */
export const onlyLettersAndNumbers = (e: any) => {
    let key = e.key;
    let expReg = new RegExp(/[A-Za-z0-9\s]/);
    let validate = expReg.test(key);
    if (!validate) {
        e.preventDefault();
    }
};

/*
 * Function that disabled paste and paste on input
 */
export const disableCopyPaste = (e: any) => {
    e.preventDefault();
};

/**
 * Function to get filtered data
 * @param data about documents received
 */
export const getCleanDocuments = (data: any) => {
    const result = data?.map((el: any) => {
        const { url, type } = el;
        const arrType = type.split('_');
        return { url, arrType }
    });
    const imagesDocs = getNewFilter(result?.filter((v: any) => v.arrType[0] === 'IMAGE'));
    const videoDocs = getNewFilter(result?.filter((v: any) => v.arrType[0] === 'VIDEO'));
    const audioDocs = getNewFilter(result?.filter((v: any) => v.arrType[0] === 'AUDIO'));
    return { imagesDocs, videoDocs, audioDocs }
}
/**
 * Function to get correct data
 * @param data about documents received
 */
const getNewFilter = (data: any) => {
    let result: any[] = [];
    data?.map((ell: any) => {
        if (ell.url !== null && ell.arrType !== null) {
            const { url, arrType } = ell
            const type = arrType.toString().replace(/,/g, '_');
            result = [...result, { url, type }]
        }
    });
    return result;
}
/**
 * Function that transforms the received data to be displayed in the component
 * @param data 
 */
export const transformDataImage = (data: any) => {
    let newDta: ItemFile[] = [];
    data.map((element: any, index: any) => {
        const { url, type } = element
        newDta = [...newDta, { uid: String(index), name: `${type}`, status: 'done', url: `https://rao.reboot.vc${url}` }]
    })
    return newDta
}

/**
 * Function that transform the received data to be correct displayed in the component.
 * @param data 
 */
export const setAudioVideo = (data: any)=>{
    let newDta: ItemFileAudio[] = [];
    data.map((element: any, index: any) => {
        const { url } = element
        newDta = [...newDta, { uid: String(index), url: `https://rao.reboot.vc${url}` }]
    })
    return newDta
}

