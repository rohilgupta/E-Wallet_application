import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];
import axios from '../../services/API/axios';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

const removeBeneficiary = (bId) =>{
  const uniqueId = localStorage.getItem('uniqueId');
  axios.delete(`/beneficiary/${uniqueId}/${bId}`).then(
    (response)=>{
      console.log(response.data);
    },(error)=>{
      console.log(error);
    }
  );
};

export const RemoveBeneficaryButton = ({
  children,
  type,
  onClick={removeBeneficary},
  // path = '/user-profile',
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={`${path}`} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
