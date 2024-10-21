import Header from "./components/Header"
import FeaturedJobs from "./components/FeaturedJobs"
import TopCompanies from "./components/TopCompanies"
import Footer from "./components/Footer"
import LoginPage from "./components/LoginPage"
import Registration from "./components/Registration"
import JobSearch from "./components/JobSearch"
import PostJob from "./components/PostJob"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        
        <Switch>

          <Route exact path="/">
            <Header/>
            <FeaturedJobs/>
            <TopCompanies />
            <Footer/>
          </Route>

          <Route exact path="/Header.jsx">
            <Header/>
            <FeaturedJobs/>
            <TopCompanies />
            <Footer/>
          </Route>

          <Route path="/JobSearch.jsx">
            <JobSearch/>
          </Route>

          <Route path="/PostJob.jsx">
            <PostJob/>
          </Route>

          <Route path="/LoginPage.jsx">
            <LoginPage/>
          </Route>

          <Route path="/Registration.jsx">
            <Registration />
          </Route>

        </Switch>

      </div>
    </Router>
    
  )
}

export default App
