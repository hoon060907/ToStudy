import { Link } from "react-router-dom";
import { auth } from "../firebase";
import React, { useEffect } from "react";
import "./Home.scss";
import { CiMemoPad } from "react-icons/ci";
import { PiNotePencil } from "react-icons/pi";
// import { BsPencil } from 'react-icons/bs';
import logo from "../img/templogo.png";
import home from "../img/home.png";
import timetable from "../img/timetable.png";
import diary from "../img/diary.png";
import user from "../img/user.png";
import { AiOutlineHome, AiOutlineClockCircle } from "react-icons/ai";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import TodoListItem from "./TodoListItem";
import TodoInsert from "./TodoInsert";

const Home = ({ setIsLoggedIn }) => {
  const logOut = () => {
    auth.signOut();
    setIsLoggedIn(false);
    window.location.reload();
    // location.reload();
    // console.log(auth.currentUser);
  };
  useEffect(() => {
    console.log(auth.currentUser);
    if (auth.currentUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const onClick = () => {
    alert("로그인하세요!");
  };

  var nav = document.querySelectorAll('.nav');

  function clickNavHandler() {
    for (var i=0; i<nav.length; i++){
      nav[i].classList.remove('nav-active');
    }
    this.classList.add('nav-active');
  }
  for (var i=0; i<nav.length; i++){
    nav[i].addEventListener('click', clickNavHandler);
  }

  return (
    <div className="homebody">
      <div className="header">
        {/* 임시로고 */}
        <div className="title">
          <img src={logo} />
        </div>

        {/* 내비게이션바 */}
        <div className="navbar">
          {/* 홈 */}
          <Link to="/" className="nav">
            <img src={home} />
          </Link>
          {/* 타임테이블 */}
          {/* <div className="nav">
            <img src={timetable} />
          </div> */}
          {auth.currentUser ? (
            <Link to="/timetable" className="nav">
              <img src={timetable} />
            </Link>
          ) : (
            <div onClick={onClick} className="nav">
              <img src={timetable} />
            </div> 
          )}
          {/* 다이어리 */}
          {/* <div className="nav">
            <img src={diary} />
          </div> */}
          {auth.currentUser ? (
            <Link to="/studydiary" className="nav">
              <img src={diary} />
            </Link>
          ) : (
            <div onClick={onClick} className="nav">
              <img src={diary} />
            </div>
          )}
          {/* 프로필 */}
          {/* <div className="nav">
            <img src={user} />
          </div> */}
          {auth.currentUser ? (
            <Link to="/profile" className="nav">
              <img src={user} />
            </Link>
          ) : (
            <div onClick={onClick} className="nav">
              <img src={user} />
            </div>
          )}
        </div>
        
        
        {/* 로그아웃, 로그인, 회원가입 */}
        <div className="right">
          {auth.currentUser ? (
            <div onClick={logOut} className="logout">
              Logout
            </div>
          ) : (
            <div className="loginsignup">
              <Link to="/login" className="inner">
                Login
              </Link>
              <Link to="/signup" className="inner">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="main">
        {/* 다마고치 화면 */}
        <div className="damagochiWindow">
          <div className="damagochi"></div>
        </div>
        {/* 투두리스트 */}
        <div className="todoContainer">
          <div className="dagym"></div>
          <div className="todo">
            <div className="color"></div>
            <div className="list"></div>
          </div>
          <div className="todoInsert">
            <TodoInsert />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
