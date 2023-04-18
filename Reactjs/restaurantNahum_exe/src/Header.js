import React from 'react'
import NavMenu from './components/NavMenu'

const Header = ({navigation}) => {
  return (
    <div>
      <div className="col-md-12 text-center  marb-35">
        <h1 className="header-h">Menu las carnes del Nahum</h1>
      </div>
      <div className="col-md-12 text-center" id="menu-filters">
        <NavMenu navigation={navigation}/>
      </div>
    </div>
  )
}

export default Header