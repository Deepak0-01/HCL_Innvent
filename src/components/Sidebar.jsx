import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className="sidebar">
            <ul>
                <li onClick={() => navigate("/")} className="sidebar-item">Exchange Rates</li>
                <li onClick={() => navigate("/dashboard")} className="sidebar-item">Visualize Rates</li>
                <li onClick={() => navigate("/interest-rate")} className="sidebar-item">Interest Rates</li>
                <li onClick={() => navigate("/interest-rate")} className="sidebar-item">Alerts</li>
                <li onClick={() => navigate("/goals")} className="sidebar-item">Goals</li>
            </ul>
        </div>
    );
};

export default Sidebar;
