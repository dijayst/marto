import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const CustomMap = () => {

  const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 42.615,
  lng: -82.520
};
  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyBvZ76ObrBdRQu9FxTQPiiL0r28KsOTma0">
              <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
              >
                  {/* Child components like markers, overlays, etc., can be added here */}
              </GoogleMap>
          </LoadScript></>
  );
}

export default CustomMap;