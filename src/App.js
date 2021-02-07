import React from "react";
import Header from "./components/layout/Header";
import { Route, Switch , useLocation} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Project from "./components/Pages/Project";
import Footer from "./components/layout/Footer";

function App() {
  const location = useLocation();
  return (
    <main className="container">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/:project_id" component={Project} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </main>
  );
}

export default App;
