import { Outlet } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { BreadCrum } from '../components/BreadCrum/BreadCrum';

export const MainLayout = () => {
  return (
    <>
      <SearchBar />
      <BreadCrum />
      <Outlet />
    </>
  );
};
