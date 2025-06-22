
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';

export default function Root() {
  return (
    <>
      <Header />
      <div id="mainContent" className="contentContainer">
        <Outlet />
      </div>
    </>
  );
}