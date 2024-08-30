import { useSelector } from 'react-redux';
import { Spinner } from '@core/components/Spinner/Spinner';

export const Loader = () => {
  const { isLoading } = useSelector(state => state.notifications);
  return <Spinner active={isLoading} />;
};
