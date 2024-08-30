import { Outlet } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { BreadCrum } from '../components/BreadCrum/BreadCrum';
import { Loader } from '../components/Loader/Loader';

export const MainLayout = () => {
  return (
    <>
      <Loader />
      <SearchBar />
      <BreadCrum />
      <Outlet />
    </>
  );
};
