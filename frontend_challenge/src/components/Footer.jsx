import React from 'react';

const divStyle = {
    padding: '40px 0 20px 0',
    color: '#435',
}

const Footer = () => {
    return (
        <footer className='sticky-footer' style={divStyle}>
            <div className="container text-center">
                <p>Copyright &copy; 2019</p>
            </div>
        </footer>
    )
}

export default Footer;
