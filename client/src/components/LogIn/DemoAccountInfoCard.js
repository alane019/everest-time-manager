import { yellow } from '@material-ui/core/colors';
import { rgba } from '@react-spring/shared';
import * as React from 'react';

export default function InfoCard() {
  return (
    <div style={{ 
	backgroundColor: 'rgba(12,17,13,0.75)', color: '#FFFF',
		 textShadow: '.5px .5px 2px 1px', padding: '8px',
		margin: '2px', borderRadius: '2px', marginTop: 12 }}>
      <div>
        <div style={{ marginLeft: 4 }} >
         Skip account registration?</div>
		 <div  style={{padding: 2}}>
        <b> Log in with the demo account! </b>
		</div>
        <div style={{ marginLeft: 6, fontSize: ".9rem" }} >
		To skip the sign up step, log in quickly with the demo account credentials below.
        </div>
        <div style={{ padding: 11, fontFamily: "arial"}}>
			<b>email: </b> &nbsp;
				 <b style={{color:'yellow'}}>everest-demo@gmail.com</b>  <br />
			<b>password: </b> &nbsp; 
				 <b style={{color:'yellow'}}>password123</b> 
        </div>
      </div>
    </div>
  );
}