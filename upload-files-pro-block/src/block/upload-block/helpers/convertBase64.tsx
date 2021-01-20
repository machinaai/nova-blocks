/**
 * Fuction to convert base 64 data to hexadeximal data
 * @param stringData string data upload;
 * @returns string
 */
export const convertBase64 = (stringData: string) => {
        if (stringData !== undefined) {
          const urlString = stringData.split('base64,');
          return urlString[urlString.length - 1];
        } 
};

/**
 * Fuction to get type data file
 * @param stringType type file
 * @returns string
 */
export const convertType = (stringType: any) => {
  if (stringType?.type) {
    const arrString = stringType.type.split('/');
    return arrString[arrString.length - 1];
  }
  return '';
};