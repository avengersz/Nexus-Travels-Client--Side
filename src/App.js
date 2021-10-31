import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Book from './Pages/Book/Book';
import Login from './Pages/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import MyBooking from './Pages/MyBooking/MyBooking';
import ManageAllBooking from './Pages/ManageAllBooking/ManageAllBooking';
import AddNewTour from './Pages/AddNewTour/AddNewTour';
import DeleteTour from './Pages/DeleteTour/DeleteTour';
function App() {
  return (
    <div className="app">
    <AuthProvider>
    <Router>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <PrivateRoute path="/tours/:id">
           <Book></Book>
         </PrivateRoute>
         <Route path="/mybooking">
           <MyBooking></MyBooking>
         </Route>
         <Route path="/manageallbooking">
           <ManageAllBooking></ManageAllBooking>
         </Route>
         <Route path="/addanewtour">
           <AddNewTour></AddNewTour>
         </Route>
         <Route path="/deleteTours">
           <DeleteTour></DeleteTour>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
    </AuthProvider>

    </div>
  );
}

export default App;
