import React from 'react'
import './header.css'
import './assets/avatarr.png'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DehazeIcon from '@material-ui/icons/Dehaze';


function Header() {
    return (
        <header className="main-header">
            <span className="nav-bar" id="btnMenu"><i className=""><DehazeIcon fontSize="small"/></i></span>
            <nav className="navbar navbar-static-top" role="navigation">
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="tutton">
                </a>
                <a href="#" className="btn btn-danger recarga" role="button">
                    <span className="glyphicon glyphicon-phone">

                    </span>
                        <PhoneIphoneIcon/>
                        TAE
                    < span className="glyphicon glyphicon-usd">

                    </span>
                    <span className="saldotae"><AttachMoneyIcon/>
                    0.00
                    </span>
                </a>
                
                            
                            
                           
                                
            </nav>
        </header>
    )
}

export default Header
