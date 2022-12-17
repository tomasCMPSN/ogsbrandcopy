import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooter } from './StyledFooter';

const Footer = () => {
    return (
        <StyledFooter className='d-flex flex-column flex-xl-row text-center justify-content-between mt-5 mb-3'>
            <p className='my-1'>&copy;2022. All rights reserved</p>
            <Link className='text-dark text-decoration-none my-1'>SHIPPING POLICY</Link>
            <Link className='text-dark text-decoration-none my-1'>CONTACT</Link>
            <Link className='text-dark text-decoration-none my-1'>PURCHASE CONDITIONS</Link>
            <Link className='text-dark text-decoration-none my-1'>TERMS OF SERVICE</Link>
            <Link className='text-dark text-decoration-none my-1'>PRIVACY POLICY</Link>
            <Link className='text-dark text-decoration-none my-1'>COOKIES POLICY</Link>
            <Link className='text-dark text-decoration-none my-1'>LEGAL</Link>
            <Link className='text-dark text-decoration-none my-1'>SIZES</Link>
            <Link className='text-dark text-decoration-none my-1'>CARE RECOMMENDATIONS</Link>
        </StyledFooter>
    );
};

export default Footer;