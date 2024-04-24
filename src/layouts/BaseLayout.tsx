import { Outlet } from "react-router-dom";

const BaseLayout = () => {
    return (
        <div>
            Baseeee
            <br />
            <button
                onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                }}
            >
                Logout
            </button>
            <Outlet></Outlet>
        </div>
    );
};

export default BaseLayout;
