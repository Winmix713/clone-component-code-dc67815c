import * as React from 'react';
import {useLocation} from 'react-router-dom';

const useAuthRoute = () => {
    const authRoutes = ['/login', '/sign-up'];
    const location = useLocation();
    const [isAuthRoute, setIsAuthRoute] = React.useState(false);

    React.useEffect(() => {
        setIsAuthRoute(authRoutes.includes(location.pathname));

        return () => {
            setIsAuthRoute(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return isAuthRoute;
}

export default useAuthRoute
