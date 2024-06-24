import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Sign';
import TeacherArea from './pages/TeacherArea/index.jsx';
//import StudentDashboard from './components/Dashboard/StudentDashboard';
import CreateRoom from './pages/CreateRoom/index.jsx';
import ManageRoom from './pages/ManageRoom/index.jsx';
import Settings from './pages/Settings/index.jsx';
import QuestionArea from './pages/QuestionArea/index.jsx';
import TakeExam from './pages/TakeExam/index.jsx';
import Home from './pages/Home/index.jsx'
import StudentArea from './pages/StudentArea/index.jsx';

const App = () => {
  return (
    <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/teacher-area" element={<TeacherArea />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/student-area" element={<StudentArea />} />
          <Route path="/create-room" element={<CreateRoom />} />
          <Route path="/manage-room/:id" element={<ManageRoom />} />
          {/*<Route path="/create-exam/:roomId" component={CreateExam} />*/}
          <Route path="/take-exam/:examId" element={<TakeExam />} />
          
    </Routes>
  );
};

export default App;
