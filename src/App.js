import logo from './logo.svg';
import './App.css';
//var browserLinkForPortApps = require('browser-link-for-port-apps');
//import { add, multiply } from './browserLinkForPortApps/js/browser-link-for-port-apps.js';
//import 'browser-link-for-port-apps/js/browser-link-for-port-apps.js';
//import 'browser-link-for-port-apps/css/browser-link-for-port-apps.css';
import  {BrowserLink} from './browserLink'

function App() {
  return (
        <p>
          <BrowserLink/>
        </p>
    /*<div className="kva">
    <div className="port">
    <section id="zeropass-port-qr"></section>
    </div>
      <script>
        var androidData = {"apn":"io.zeropass.port",
                            "afl":"https://play.google.com/store/apps/details?id=io.zeropass.port",
                            "version":'0.1'};

        var iosData = {"ibi":"io.zeropass.port",
                        "isi":"1596748294",
                        "imv":10}

        var shortLinkURL = "https://portapp.page.link";
        var deepLinkURL = "https://portapp.page.link/homeMagnetLink";

        var linkOtherPlatforms = 'https://port.link/';

        var callbackFunction = function buttonXpressed() {
          alert("Button X was pressed.");
      }
    
        ZeroPassPortWidget.render(shortLinkURL,
                      deepLinkURL,
                      androidData,
                      iosData,
                      linkOtherPlatforms,
                      callbackFunction,
                      {
                        userID: "fartinghouse", 
                        requestType: "attestation_request",
                        url: "https://pomelo.port.link",
                        version: 0.1
                      },
                      document.querySelector('#zeropass-port-qr'));
      </script>
  </div>*/
  );
}

export default App;
