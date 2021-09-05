import React, {Component} from 'react';

class KommunicateChat extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        (function (d, m) {
            const kommunicateSettings = {
                "appId": "2aa015ba04528820a863e1d03e56ad448",
                "popupWidget": true,
                "automaticChatOpenOnNavigation": true
            };
            const s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            const h = document.getElementsByTagName("head")[0];
            h.appendChild(s);
            window.kommunicate = m;
            m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default KommunicateChat;