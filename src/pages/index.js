import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './home';
import About from './about';
import Experience from './experience';
import Projects from './projects';
import Privacy from './privacy';
import TermsOfUse from './termsofuse';
import Error404 from './Error404';

const Webpages = () => {
    return(
        <Router>
            <Switch> 
                <Route exact path="/" component= {Home} />
                <Route path = "/over-mij" component = {About} />
                <Route path = "/ervaring" component = {Experience} />
                <Route path = "/projecten" component = {Projects} />
                {/* <Route path = "/privacy" component = {Privacy} />
                <Route path = "/gebruiksvoorwaarden" component = {TermsOfUse} /> */}
                <Route path = "/404" component = {Error404} />
                <Route component={Error404} />
            </Switch>
        </Router>
    );
};
export default Webpages;