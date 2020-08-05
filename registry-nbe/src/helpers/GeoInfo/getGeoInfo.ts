const getGeoInfo = () => {
  //    const fetchGeo = await fetch('https://ipapi.co/json/'
  //    ).then((response:any) => {
  //         const { country_code, country_name} = response;
  //         return {
  //             country_code,
  //             country_name
  //         };
  //     }).catch(() => {

  //     });
  //     return fetchGeo;
  return {
    countryName: 'Mexico',
    countryCode: 'MX',
  };
};

export default getGeoInfo;
