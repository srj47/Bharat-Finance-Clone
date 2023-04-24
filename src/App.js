import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./AdminPanel/Components/Sidebar";
import SignIn from "./SignIn";
import SignUP from "./SignUP";
import NavBar from "./AdminPanel/Components/NavBar";
// Landing pages
import HomePage from "./LandingPages/HomePage";
import Contact from "./LandingPages/Contact";
import TermsConditions from "./LandingPages/TermsConditions";
import Disclaimer from "./LandingPages/Disclaimer";
import PolicyPrivacy from "./LandingPages/PolicyPrivacy";
import About from "./LandingPages/About";

// admin Pages
import Dashboard from "./AdminPanel/Dashboard";
import Profile from "./AdminPanel/Profile";
import DirectTeam from "./AdminPanel/DirectTeam";
import LevelTeam from "./AdminPanel/LevelTeam";
import ViewTask from "./AdminPanel/ViewTask";
import TaskHistory from "./AdminPanel/TaskHistory";
import ScanPay from "./AdminPanel/ScanPay";
import PaymentHistory from "./AdminPanel/PaymentHistory";
import Support from "./AdminPanel/Support";
import SupportHistory from "./AdminPanel/SupportHistory";
import DirectWithdraw from "./AdminPanel/DirectWithdraw";
import AdsViewWithdraw from "./AdminPanel/AdsViewWithdraw";
import WithdrawHistory from "./AdminPanel/WithdrawHistory";
import Refer from "./AdminPanel/Refer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUP />} />
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <>
              <TermsConditions />
            </>
          }
        />
        <Route
          path="/disclaimer"
          element={
            <>
              <Disclaimer />
            </>
          }
        />
        <Route
          path="/policy-privacy"
          element={
            <>
              <PolicyPrivacy />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Sidebar />
<NavBar/>
              <Dashboard />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Sidebar />
<NavBar/>
              <Profile />{" "}
            </>
          }
        />
        <Route
          path="/direct-team"
          element={
            <>
              <Sidebar />
<NavBar/>
              <DirectTeam />{" "}
            </>
          }
        />
        <Route
          path="/level-team"
          element={
            <>
              <Sidebar />
<NavBar/>
              <LevelTeam />{" "}
            </>
          }
        />
        <Route
          path="/view-task"
          element={
            <>
              <Sidebar />
<NavBar/>
              <ViewTask />{" "}
            </>
          }
        />
        <Route
          path="/task-history"
          element={
            <>
              <Sidebar />
<NavBar/>
              <TaskHistory />{" "}
            </>
          }
        />
        <Route
          path="/scan-pay"
          element={
            <>
              <Sidebar />
<NavBar/>
              <ScanPay />{" "}
            </>
          }
        />
        <Route
          path="/payment-history"
          element={
            <>
              <Sidebar />
<NavBar/>
              <PaymentHistory />{" "}
            </>
          }
        />
        <Route
          path="/support"
          element={
            <>
              <Sidebar />
<NavBar/>
              <Support />{" "}
            </>
          }
        />
        <Route
          path="/support-history"
          element={
            <>
              <Sidebar />
<NavBar/>
              <SupportHistory />{" "}
            </>
          }
        />
        <Route
          path="/direct-withdraw"
          element={
            <>
              <Sidebar />
<NavBar/>
              <DirectWithdraw />{" "}
            </>
          }
        />
        <Route
          path="/ads-view-withdraw"
          element={
            <>
              <Sidebar />
<NavBar/>
              <AdsViewWithdraw />{" "}
            </>
          }
        />
        <Route
          path="/withdraw-history"
          element={
            <>
              <Sidebar />
<NavBar/>
              <WithdrawHistory />{" "}
            </>
          }
        />
        <Route
          path="/refer"
          element={
            <>
              <Sidebar />
<NavBar/>
              <Refer />{" "}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
