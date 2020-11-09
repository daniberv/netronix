/**
 * Map Marker SVG
 */

import React from 'react';
import L from 'leaflet'
import ReactDOMServer from 'react-dom/server';

const SVGIconComponent = (props) => {
  return  <svg width="92px" height="54px" viewBox="0 0 92 54">
    <g id="Web" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="11-parcours-1---map" transform="translate(-782.000000, -214.000000)">
        <g id="actionpoints" transform="translate(250.000000, 147.000000)">
          <g id="18" transform="translate(547.000000, 67.000000)">
            <circle id="Oval" stroke="#8884d8" fill="#8884d8" cx="43.75" cy="13.75" r="13.25"></circle>
          </g>
        </g>
      </g>
    </g>
  </svg>
}

const icon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(<SVGIconComponent />)
});

export default icon;