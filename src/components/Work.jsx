import React, { useState } from 'react'
import MobileDesign from './MobileDesign';
import './work.scss';

const data = [
  "Web Design",
  "Mobile Apps",
  "Product Design",
  "Branding",
  "Marketing"
];

const section = {
  height: '100vh',
  scrollSnapAlign: 'center',
  display: 'flex',
  justifyContent: 'center'
};
const container = {
  width: '1400px',
  display: 'flex',
  justifyContent: 'space-between'
};
const left = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const list = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
};
const listItem = {
  fontSize: '90px',
  fontWeight: 'bold',
  cursor: 'pointer',
  color: 'transparent',
  WebkitTextStroke: '1px white',
  position: 'relative',
  '@media (maxWidth: 768px)': {
    fontSize: '24px',
    color: 'white',
    WebkitTextStroke: '0px',
  },
  '::after': {
    content: `${(props) => props.text}`,
    position: 'absolute',
    top: 0,
    left: 0,
    color: 'white',
    backgroundColor:"green",
    width: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '&:hover': {
    '::after': {
      animation: 'slide 0.5s linear both',
      color: 'white',
      '@keyframes slide': {
        'to': {
          width: '100%'
        }
      }
    }
  }
};

const right = {
  flex: 1
};

const Work = () => {
  // const [work, setWork] = useState("Web Design");
    return (
        <div style={section}>
          <div style={container}>
          <div style={left}>
            <ul style={list}>
              {data.map((item) => (
                <li className='text-outline-hover' data key={item} data-text={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={right}>
            <MobileDesign/>
            {/* {work === "Web Design" ? (
              <WebDesign />
            ) : work === "Development" ? (
              <Development />
            ) : (
              <ProductDesign />
            )} */}
          </div>
          </div>
        </div>
    )
}

export default Work