import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '@/store/slices/authSlice';
import { AppDispatch, RootState } from '@/store';


const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { token, user } = useSelector((state: RootState) => state.user);
  
  useEffect(() => {
    // Chỉ fetch thông tin user khi có token nhưng chưa có thông tin user
    if (token && !user) {
      dispatch(fetchCurrentUser());
    }
  }, [token, user, dispatch]);

  // Không điều hướng ở đây, chỉ render children
  return <>{children}</>;
};

export default AuthProvider;