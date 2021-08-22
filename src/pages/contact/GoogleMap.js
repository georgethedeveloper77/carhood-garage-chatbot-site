import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {Styles} from './styles/contact.js';

const AnyReactComponent = ({text}) => <div>{text}</div>;

class GoogleMap extends Component {

    static defaultProps = {
        center: {
            lat: 1.1018,
            lng: 37.0144
        },
        zoom: 11
    };

    render() {
        return (
            <Styles>
                {/* Google Map */}
                <div className="google-map-area">
                    <GoogleMapReact
                        bootstrapURLKeys={{key: "AIzaSyATY4Rxc8jNvDpsK8ZetC7JyN4PFVYGCGM"}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent lat={1.1018} lng={37.0144} text="My Marker"/>
                    </GoogleMapReact>
                </div>
            </Styles>
        )
    }
}

export default GoogleMap