
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';

export default function Root() {
  return (
    <>
      <Header />
      <div id="mainContent" className="contentContainer min-h-[calc(100vh-81px)] bg-gradient-to-br from-pink-500 via-yellow-300 to-blue-500">
        <Outlet />
      </div>
    </>
  );
}