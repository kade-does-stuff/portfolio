// import React from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Annotation,
//   ZoomableGroup
// } from "react-simple-maps";

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/south-africa/south-africa-provinces.json"

// const Map = () => {
//   return (
//     <ComposableMap
//       projection="geoAzimuthalEqualArea"
//       projectionConfig={{
//         center: [25, -28],
//         scale: 2300
//       }}
//       style={{ width: "100%", height: "100%" }}
//     >
//       <Geographies
//         geography={geoUrl}
//         fill="#2C065D"
//         stroke="#FFFFFF"
//         strokeWidth={0.5}
//       >
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography key={geo.rsmKey} geography={geo} />
//           ))
//         }
//       </Geographies>
//       <Annotation
//         subject={[30.9944444, -29.8283333]}
//         dx={60}
//         dy={120}
//         connectorProps={{
//           stroke: "white",
//           strokeWidth: 3,
//           strokeLinecap: "round"
//         }}
//       >
//         <text x="-8"  textAnchor="end" alignmentBaseline="middle" fill="white">
//           {"I'm here"}
//         </text>
//       </Annotation>
//     </ComposableMap>
//   );
// };

// export default Map;
