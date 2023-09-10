import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useEffect } from "react";
import './Layout.scss';
import { CiMemoPad } from 'react-icons/ci';
import { PiNotePencil } from 'react-icons/pi';
import { BsPencil } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

const Layout = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const logOut = () => {
        auth.signOut();
        setIsLoggedIn(false);
        window.location.reload();
        // location.reload();
        // console.log(auth.currentUser);
    };
    useEffect(() => {
        console.log(auth.currentUser);
        if(auth.currentUser) {
            setIsLoggedIn(true);
        }
        else {
            setIsLoggedIn(false);
        }
    }, []);

    const onClick = () => {
        alert('로그인하세요!');
    };

    return (
        <div className="body">
            <div className="header">
                <div className="left">
                    <h3 className="title" onClick={() => {navigate('/');}}>다마고치 벤쿄<BsPencil /></h3>
                    {auth.currentUser ?
                        <Link to="/profile" className="nav">
                            <BiUser />
                        </Link> : 
                        <span onClick={onClick} className="nav">
                            <BiUser />
                        </span>
                    }
                    {auth.currentUser ?
                        <Link to="/tostudy" className="nav">
                            <PiNotePencil />
                        </Link> : 
                        <span onClick={onClick} className="nav">
                            <PiNotePencil />
                        </span>
                    }
                    {auth.currentUser ? 
                        <Link to="/studydiary" className="nav">
                            <CiMemoPad />
                        </Link> : 
                        <span onClick={onClick} className="nav">
                            <CiMemoPad />
                        </span>}
                </div>
                <div className="right">
                    {auth.currentUser ? 
                        <div onClick={logOut} className="logout">Logout</div> : 
                        <div className="loginsignup">
                            <Link to="/login" className="inner">Login</Link>
                            <Link to="/signup" className="inner">Sign Up</Link>
                        </div>}
                </div>
            </div>
            <div className="main">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;