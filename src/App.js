import React,{Suspense} from "react";
import './i18n';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styles from "./Layout.module.scss";
import Header from "./Header.js";
import About from "./About.js";
import Services from "./Services.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import Sitemap from "./Sitemap";
import Navbar from "./Navbar.js";
import Topic from "./Topic.js";
import Auth from "./Auth.js";
import Register from "./Register.js";
import AffiliateProgram from './AffiliateProgram.js';
import Leaderboard from "./Leaderboard.js";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <About/>,
    sitemap: (e) => <Sitemap e={e} title="About Me"/>
  },
  {
    path: "/affiliates",
    exact: true,
    main: () => <AffiliateProgram/>,
    sitemap: (e) => <Sitemap e={e} title="Affiliate Program" />  
  },
    {
    path: "/services",
    main: () => <Services/>,
    sitemap: (e) => <Sitemap e={e} title="Services Provided"/>  
  },
  {
    path: "/contact",
    main: () => <Contact/>,
    sitemap: (e) => <Sitemap e={e} title="Contact Me"/>  
  },
    {
    path: "/affiliates/leaderboard",
    main: () => <Leaderboard/>,
    sitemap: (e) => <Sitemap e={e} title="Leaderboard"/>  
  },
      {
    path: "/affiliates/projects",
    exact: true,
    main: () => <h2>topics</h2>,
    sitemap: (e) => <Sitemap e={e} title="Past projects" />  
  },
  {
    path: "/auth",
    main: () => <Auth />,
    sitemap: (e) => <Sitemap e={e} title="Log in"/>  
  },
    {
    path: "/register",
    main: () => <Register />,
    sitemap: (e) => <Sitemap e={e} title="Create an account"/>  
  }
];





class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isCollapsed:false,
    }
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }


  toggleDropdown() {
    console.log("toggleDropdown",!this.state.isCollapsed)
    this.setState({
        isCollapsed: !this.state.isCollapsed
    });
  }  

render(){
    return (
<Suspense fallback={null}>

    <Router>
      <div className={styles.Layout}>
      <Header isCollapsed={this.state.isCollapsed} toggleDropdown={ this.toggleDropdown }/>

        <Navbar fixed={ !this.state.isCollapsed} />


        <div className={styles.MainContainer}>
                      <div >
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={ <route.sitemap r={route.path} />}
              />
            ))}
          </Switch>
        </div>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
        

        <Footer />
      </div>
    </Router>
    </Suspense>
  );
}

}


export default App;
