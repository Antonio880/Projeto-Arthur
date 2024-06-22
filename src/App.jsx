import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Sign';
import TeacherArea from './pages/TeacherArea/index.jsx';
//import StudentDashboard from './components/Dashboard/StudentDashboard';
import CreateRoom from './pages/CreateRoom/index.jsx';
//import ManageRoom from './components/Room/ManageRoom';
//import CreateExam from './components/Exam/CreateExam';
//import TakeExam from './components/Exam/TakeExam';
import Home from './pages/Home/index.jsx'

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/teacher-area" component={TeacherArea} />
          {/*<Route path="/student/dashboard" component={StudentDashboard} />*/}
          <Route path="/create-room" component={CreateRoom} />
          {/*<Route path="/manage-room/:roomId" component={ManageRoom} />
          <Route path="/create-exam/:roomId" component={CreateExam} />
          <Route path="/take-exam/:examId" component={TakeExam} />
          */}
        </Switch>
    </Router>
  );
};

export default App;
