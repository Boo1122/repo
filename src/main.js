import {
    Header
} from "./components/Home_Page_Header/Home_Page_Header";
import {
    RegisterPage
} from "./components/Pages/Register_Page/Register_Page";
import {
    LoginPage
} from "./components/Pages/Login_Page/Login_Page";
import {
    HomePage
} from "./components/Pages/Home_Page/Home_Page";
import "./main.css";
import {
    Footer
} from "./components/Footer/Footer";
import {
    navigate
} from "./components/Navigate_History/Navigate_History";
import {
    SinglePage
} from "./components/Pages/Single_Page/Single_Page";
import {
    MoviePage
} from "./components/Pages/Movie_Page/Movie_Page";
import {
    LogOutPage
} from "./components/Pages/LogOut_Page/LogOut_Page";
import {
    AdvancedSearch
} from "./components/Advanced_Search/Advanced_Search";
// import {
//     UserOptions
// } from "./components/Pages/USER_Logged_In/User_Options";

new Header();
new HomePage();
new LoginPage();
new RegisterPage();
const singlePage = new SinglePage();
new LogOutPage();
new MoviePage();
new AdvancedSearch();
new Footer();
// new UserOptions();

navigate.init(singlePage);