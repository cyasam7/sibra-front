import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px",
};

interface IProps {
    lat: number;
    lng: number;
}

const MyComponent = ({ lat, lng }: IProps) => {
    console.log(lat, lng);
    return (
        <LoadScript googleMapsApiKey="AIzaSyBnE4L96YbsfaXuxULJL6UCsN_rCyC_Yco">
            <GoogleMap mapContainerStyle={containerStyle} center={{ lat, lng }} zoom={12}>
                <Marker position={{ lat, lng }} />
            </GoogleMap>
        </LoadScript>
    );
};

export default React.memo(MyComponent);
