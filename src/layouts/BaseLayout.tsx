import { Outlet } from "react-router-dom";

const BaseLayout = () => {
    return (
        <div>
            Baseeee
         <Outlet></Outlet>    
        </div>
    );
};

export default BaseLayout;