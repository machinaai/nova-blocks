import React, { useEffect, useState } from 'react';
import {  Button, Checkbox, Card, Radio } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import 'moment/locale/es';
import Map from './components/Google-maps/map'
import credencial from './enviroments/credencials';
import { connect, useIntl, useDispatch } from 'umi';

import { StateModel } from './models/model';
import Panel_Directions from './components/panel-directions';


interface GoogleMapsprops {
  dataSave?: StateModel['data'];
  saveGeo?: StateModel['geo'];
}

 const GoogleMaps: React.FC<GoogleMapsprops> = ({
  googleMap,
  dataSave,
  saveGeo,
}) =>{
  
useEffect(() => {
  console.log(googleMap);
  
}, [googleMap])

  let mapkey = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credencial.mapsKey}`
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  const [mygeo, setmygeo] = useState();
  const [matrix, setmatrix] = useState();
  const [polygon, setpolygon] = useState(false);
  const [indications, setindications] = useState(false);
  const [route, setroute] = useState(false);
  const intl = useIntl();
  let [mode, setmode] = useState({mode: 'driving'});
  

  const options = [
    { label: intl.formatMessage({id: "Google_Maps.title_option1_distance"}), value: 'walking' },
    { label: intl.formatMessage({id: "Google_Maps.title_option2_distance"}), value: 'driving' },
    { label: intl.formatMessage({id: "Google_Maps.title_option3_distance"}), value: 'bicycling' },
  ];
/*  */
  useEffect(() => {
  console.log(saveGeo);
  setmygeo(saveGeo?.location);
  if(saveGeo){

    setshow(true);
  }
  }, [saveGeo])
  
  useEffect(() => {
    console.log(dataSave);
    
    }, [dataSave])
    
    useEffect(() => {
     console.log(matrix);
     
    }, [matrix])
  /*  */
 
useEffect(() => {
  dispatch({
    type: 'googleMap/submitgetMyGeolocation',
  });
  
}, [])

const getMyLocation = () => {
  dispatch({
    type: 'googleMap/submitgetMyGeolocation',
  });
}

const getRoute = (mode) =>{
  console.log(mode);
  
  dispatch({
    type: 'googleMap/submitgetDistance',
    payload: {matrix, mode}
  });
}

 const changeRoute = (value:any) => {
  console.log(value);
  
 setmode(value);
 getRoute(value);
}
 
console.log(matrix);




  return (
    <div className='container'>
{show &&
<>
<Map
mode={mode}
route={route}
setindications={setindications}
indications={indications}
polygon={polygon}
setmatrix={setmatrix}
mygeo={mygeo}
googleMapURL= {mapkey}
containerElement= {<div style={{height: '400px'}}></div>}
mapElement= {<div style={{height: '100%'}}></div>}
loadingElement= {<p>Cargando..</p>}
/>

</>
}

      <button onClick={getMyLocation}>{intl.formatMessage({id: "Google_Maps.title_button_geolocation"})}</button>
     
     
      <Card style={{ width: 400 }}>
      <Radio.Group
          options={options}
          onChange={(ev)=> {changeRoute({mode: ev.target.value})}}
          optionType="button"
        />
  </Card>
  

      <br/>
      {
        indications! && matrix &&
      <Button onClick={() => {setroute(!route)}}><EnvironmentOutlined /> {intl.formatMessage({id: "Google_Maps.title_button_indication"})}</Button>
      }
      <br/>
      <Checkbox onChange={(ev)=> {setpolygon(ev.target.checked)}}>{intl.formatMessage({id: "Google_Maps.title_radiobutton_polygon"})}</Checkbox>

{show && dataSave &&
      <div>
    <Panel_Directions
    dataSave={dataSave}
    />
    
      </div>
}

    </div>
  )
};


export default connect(({ googleMap }: { googleMap: StateModel }) => ({
  dataSave: googleMap.data,
  saveGeo: googleMap.geo,
}))(GoogleMaps);
