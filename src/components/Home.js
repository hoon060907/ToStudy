import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useEffect } from "react";
import "./Home.scss";
import { CiMemoPad } from "react-icons/ci";
import { PiNotePencil } from "react-icons/pi";
// import { BsPencil } from 'react-icons/bs';
import logo from "../img/templogo.png";
import home from "../img/home.png";
import timetable from "../img/timetable.png";
import diary from "../img/diary.png";
import user from "../img/user.png";
import setting from "../img/settings.png";
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

  return (
    <div className="homebody">
      <div className="header">
        {/* 임시로고 */}
        <div className="title">
          <img src={logo} />
        </div>
        {/* 내비게이션바 */}
        <Link to="/" className="nav">
          <img src={home} />
        </Link>
        <div className="nav">
          <img src={timetable} />
        </div>
        {auth.currentUser ? (
          <Link to="/studydiary" className="nav">
            <img src={diary} />
          </Link>
        ) : (
          <span onClick={onClick} className="nav">
            <img src={diary} />
          </span>
        )}
        <div className="nav">
          <img src={user} />
        </div>
        <div className="nav">
          <img src={setting} />
        </div>
        {/* <h1 className="title">공100<BsPencil /></h1> */}
        <div></div>
        <div className="right">
          {auth.currentUser ? (
            <>
              <div onClick={onclick} className="logout">
                Logout
              </div>
              <div className="nav">
                {/* <Link to="/signup" className="inner">Sign Up</Link> */}
                <Link to="/">
                  <AiOutlineHome size="40" color="#fff" />
                </Link>
                <AiOutlineClockCircle size="40" color="fff" />
                <Link to="/tostudydiary" className="link">
                  <PiPencilSimpleLineDuotone
                    size="40"
                    color="#fff"
                    className="link"
                  />
                </Link>
                <Link to="/tostudy" className="link">
                  <PiNotePencil className="icon" size="40" color="#fff" />
                </Link>
                <Link to="/login">
                  <AiOutlineUser size="40" color="#fff" />
                </Link>
              </div>
            </>
          ) : (
            <div className="nav">
              {/* <Link to="/signup" className="inner">Sign Up</Link> */}
              <Link to="/">
                <AiOutlineHome size="40" color="#fff" />
              </Link>
              <AiOutlineClockCircle size="40" color="fff" />
              {auth.currentUser ? (
                <Link to="/tostudydiary" className="link">
                  <PiPencilSimpleLineDuotone
                    size="40"
                    color="#fff"
                    className="link"
                  />
                </Link>
              ) : (
                <PiPencilSimpleLineDuotone
                  size="40"
                  color="#fff"
                  onClick={onClick} // 여기에도 onClick 이벤트를 연결합니다
                  className="link"
                />
              )}
              {/* {auth.currentUser ?
                                <Link to="/tostudy" className="link">
                                    <h5 className="bigtext">ToStudy List</h5>
                                    <PiNotePencil className="icon" />
                                </Link> : 
                                <span onClick={onClick} className="link">
                                    <h5 className="bigtext">ToStudy List</h5>
                                    <PiNotePencil className="icon" />
                                </span>
                            }
                            {auth.currentUser ? 
                                <Link to="/studydiary" className="link">
                                    <h5 className="bigtext">Study Diary</h5>
                                    <CiMemoPad className="icon" />
                                </Link> : 
                                <span onClick={onClick} className="link">
                                    <h5 className="bigtext">Study Diary</h5>
                                    <CiMemoPad className="icon" />
                                </span>} */}
              <Link to="/login">
                <AiOutlineUser size="40" color="#fff" />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="main">
        {/* <div className="to">
                    {auth.currentUser ? <Link to="/tostudy" className="link">ToStudy List</Link> : <span onClick={onClick} className="linkwhenNoUser">ToStudy List</span>}
                    <PiNotePencil />
                </div>
                <div className="to">
                    {auth.currentUser ? <Link to="/studydiary" className="link">Study Diary</Link> : <span onClick={onClick} className="linkwhenNoUser">Study Diary</span>}
                    <CiMemoPad />
                </div> */}
        <div className="damagochiWindow">
          <div className="damagochi"></div>
        </div>
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
