import {useLocation} from 'react-router-dom';

const useAuthRoute = () => {
    const authRoutes = ['/login', '/sign-up'];
    const location = useLocation();
    
    // Simply return the boolean value derived from the current location
    return authRoutes.includes(location.pathname);
}

export default useAuthRoute
