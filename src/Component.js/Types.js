import React from 'react';
import classification from '../assets/img/classification.png'
import Fade from 'react-reveal/Fade';

class Types extends React.Component  {
	render(){

	return (
		<div className="Types bg-black p-5 d-flex justify-content-center" style={{width: "100vw"}}>
            <Fade left><img src={classification} style={{width:"80vw"}}/></Fade>
		</div>
	);
	}
}

export default Types;
