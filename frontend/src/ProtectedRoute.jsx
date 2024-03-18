import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

export function ProtectedRoute() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    if (isAuthenticated) {
        return <Outlet />;
    } else {
        return <Navigate to="/" />;
    }

}
