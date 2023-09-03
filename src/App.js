import { useEffect, useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import StudyListPage from "./components/StudyListPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import StudyDiary from "./components/StudyDiary";
import WriteDiary from "./components/WriteDiary";
import TimeTable from "./components/TimeTable";
import Profile from "./components/Profile";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log(auth.currentUser);
  });
  return (
    <Routes>


      <Route index element={<Home setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* 다이어리작성 */}
      <Route path="/writediary" element={isLoggedin ? <WriteDiary /> : <Navigate to="/" />} />
        {/* 투두리스트 */}
        <Route path="/tostudy" element={isLoggedin ? <StudyListPage /> : <Navigate to="/" />} />
        {/* 다이어리 */}
        <Route path="/studydiary" element={isLoggedin ? <StudyDiary /> : <Navigate to="/" />} />
        
        {/* 타임테이블 */}
        <Route path="/timetable" element={isLoggedin ? <TimeTable /> : <Navigate to="/" />} />
        {/* 프로필 */}
        <Route path="/profile" element={isLoggedin ? <Profile /> : <Navigate to="/" />} />
      
    </Routes>
  );
}

export default App;
