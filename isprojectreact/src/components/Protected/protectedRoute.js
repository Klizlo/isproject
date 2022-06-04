import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({ role, restriction ,children}) => {
    if (!role || !role.includes(restriction)) {
        return <Navigate to={'/'} replace />;
    }

    return children;
};

export default ProtectedRoute;