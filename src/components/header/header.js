import { useState } from 'react';
import Authorization from "./auth/auth";
import Registration from "./reg/reg";
import './header.css';

const Header = () => {
  const accessToken = localStorage.getItem('access');
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleShowAuth = () => {
    setCurrentComponent('auth');
  };

  const handleShowReg = () => {
    setCurrentComponent('reg');
  };

  const handleClose = () => {
    localStorage.clear();
    setCurrentComponent(null);
  };

  return (
    <div className="header-block">
      {!accessToken && !currentComponent && (
        <div className="form">
          <button type="button" className="button" onClick={handleShowReg}>Регистрация</button>
          <button type="button" className="button" onClick={handleShowAuth}>Авторизация</button>
        </div>
      )}
      
      {currentComponent === 'auth' && <Authorization />}
      {currentComponent === 'reg' && <Registration />}
      
      {accessToken && (
          <><div>Welcome dear user! This is my test job!</div><div>
          <button type="button" className="button" onClick={handleClose}>Выход</button>
        </div></>
      )}
    </div>
  );
};

export default Header;