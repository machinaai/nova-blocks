import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  withGoogleMap,
  Polygon,
  withScriptjs,
  Marker,
  DirectionsRenderer,
} from "react-google-maps";
import pin from "../../assets/188987.png";
import pin2 from "../../assets/marker3.png";

const Map = (props: any) => {
  const { mygeo, setmatrix, polygon, indications, setindications, route, mode } = props;
  const [marker2, setmarker2] = useState();
  const [showmarker2, setshowmarker2] = useState(false);
  const [showpolygon, setshowpolygon] = useState(false);
  const [path, setPath] = useState([]);
  const [directions, setdirections] = useState();
  let path2 = [];
  const [cont, setcont] = useState(1);
  const [geo, setgeo] = useState();


  const DirectionsService = new google.maps.DirectionsService();

  console.log(mygeo);
  
  useEffect(() => {
    console.log('jaja', marker2, geo, route, mode);
    setmatrix({origin: geo, destination: marker2})
    
  if(marker2 && geo && route && mode ){
    DirectionsService.route({
      origin: geo,
      destination: marker2,
      travelMode: mode.mode.toUpperCase(),
    }, (result, status)=> {
      if(status === 'OK'){
        setdirections(result);
      } else {
        console.log('error al trazar: '+ result);
        
      }
      
    })
  }
  }, [route, indications, mode])
  

  const createPolygon = (data: any) => {
    if (path2?.length <= 2) {
      path2.push({ lat: data.lat(), lng: data.lng() });
    }

    if (path2?.length === 3) {
      setPath(path2);
      setTimeout(() => {
        setshowpolygon(showpolygon!);
      }, 3000);
    }
  };

  const createMarker = (data) => {
    if(cont == 1){
      setmarker2({ lat: data.lat(), lng: data.lng() });
      setshowmarker2(true);
      setindications(true);
      
      setcont(2);
    } else {
      setshowmarker2(false);
      setmarker2({});
      setcont(1);
      setdirections(null);
      
    }
       
       
      
    
  };

  const selectFunction = (data)=> {
    if(polygon){
      createPolygon(data);
    } else {
      createMarker(data);
    }
  }

  useEffect(() => {
   setgeo(mygeo);
  }, [mygeo])

  return (
    <div>
      <GoogleMap
        onClick={(data) => {
          selectFunction(data.latLng);
        }}
        defaultZoom={15}
        defaultCenter={mygeo}
      >
        {geo && <Marker title={'Mi ubicacion'} icon={pin} position={{lat: mygeo.lat, lng: mygeo.lng}} />}
        {showmarker2 && <Marker title={'Destino'} icon={pin2} position={marker2} />}
      </GoogleMap>



      <Polygon editable draggable path={path} />

      {directions && (
        <DirectionsRenderer
          directions={directions}
        />
      )}
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
