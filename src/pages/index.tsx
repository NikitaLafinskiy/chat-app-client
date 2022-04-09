import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const nav = useNavigate();
  useEffect(() => {
    console.log('landing reached');
    if (localStorage.getItem('token')) {
      nav('/chat');
    }
    nav('/register');
  }, [nav]);
  return <div></div>;
}

export default LandingPage;
