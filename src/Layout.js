import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "./img/templogo.png";
import home from "./img/home.png";
import timetable from "./img/timetable.png";
import diary from "./img/diary.png";
import user from "./img/user.png";

const Layout = () => {
    return (
        <div className="layoutbody">
        <div className="layheader">
            {/* 임시로고 */}
            <div className="laytitle">
                <img src={logo} />
            </div>

            {/* 홈 */}
            <Link to="/" className="laynav">
                <img src={home} />
            </Link>
            {/* 타임테이블 */}
            <Link to="/timetable" className="laynav">
                <img src={timetable} />
            </Link>
            {/* 다이어리 */}
            <Link to="/studydiary" className="laynav">
                <img src={diary} />
            </Link>
            {/* 프로필 */}
            <Link to="/profile" className="laynav">
                <img src={user} />
            </Link>
            <main>
                <Outlet />
            </main>
            </div>
            </div>

    );
};
export default Layout;