import Header from "../Header/index"
import { Outlet } from "react-router-dom";
import './index.css'

function Layout() {
    return (
        <div>
            <div className="stars"></div>
            <div className="twinkling"></div>
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;