import { globalDispatch } from '../store/globals/useGlobals';
import { isLoading } from '../store/notifications/notificationsSlice';
import { STATUS_TYPE } from '../utils/constants';

export const wrapperTryCatch = async (functionToExecute, functionOnError) => {
  try {
    globalDispatch(isLoading(true));
    await functionToExecute?.();
    return STATUS_TYPE.SUCCESS;
  } catch (error) {
    await functionOnError?.(error);
  } finally {
    globalDispatch(isLoading(false));
  }
};
