import { Outlet } from "react-router-dom";

export default function MyNavBar() {
    return (
        <div>
            <p>hello!<a href="/my-alerts">wow!</a></p>
            <Outlet/>
        </div>
    )
}

