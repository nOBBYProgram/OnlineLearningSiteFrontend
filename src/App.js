
import Cart from "./Components/Cart";
import CourseRegister from "./Components/CourseRegister/CourseRegister";
import Wishlist from "./Components/Wishlists/Wishlist";
import Course from "./Pages/CourseId";
import Courses from "./Pages/Courses";
import Home from "./Pages/Home";
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import SecureUpload from "./Uploads/SecureUpload";
import StartCourse from "./WatchCourse/StartCourse";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";


import EditProfile from "./Components/Profile/EditProfile";
import UserProfile from "./Components/Profile/UserProfile";
import Register1 from "./Authentication/Register1";
import Login1 from "./Authentication/Login1";


function App() {
  return (


<BrowserRouter>
<Routes>
  <Route path="/" element=<Home/> />
  <Route path="/course/:id" element=<Course/> />
  <Route path="/courses" element=<Courses/> />
  <Route path="/cart" element=<Cart/> />
  <Route path="/success" element=<Success/> />
  <Route path='/cancel' element=<Cancel/> />
  <Route path='/watchVideo/:id' element=<StartCourse/> />
  <Route path='/secureUpload' element=<SecureUpload/> />
  <Route path="/wishList" element=<Wishlist/> />

  <Route path="/login1" element=<Login1/> />

  <Route path="/register1" element=<Register1/> />
  <Route path="/editProfile" element=<EditProfile/> />
  <Route path="/profile/:id" element=<UserProfile/> />
  <Route path="/courseRegister" element=<CourseRegister/> />
</Routes>
</BrowserRouter>

 
  );
}

export default App;
