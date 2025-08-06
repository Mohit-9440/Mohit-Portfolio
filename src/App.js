import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  getInTouch,
  experiences,
} from './editable-stuff/config.js';

// Lazy load components for better performance
const MainBody = React.lazy(() => import('./components/home/MainBody'));
const AboutMe = React.lazy(() => import('./components/home/AboutMe'));
const Project = React.lazy(() => import('./components/home/Project'));
const Footer = React.lazy(() => import('./components/Footer'));
const Navbar = React.lazy(() => import('./components/Navbar'));
const Skills = React.lazy(() => import('./components/home/Skills'));
const GetInTouch = React.lazy(() => import('./components/home/GetInTouch'));
const Experience = React.lazy(() => import('./components/home/Experience'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
);

const Home = React.forwardRef((props, ref) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-50 to-dark-100 dark:from-dark-900 dark:to-dark-800">
      <Suspense fallback={<LoadingSpinner />}>
        <MainBody
          gradient={mainBody.gradientColors}
          title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
          message={mainBody.message}
          icons={mainBody.icons}
          ref={ref}
        />
        
        {about.show && (
          <AboutMe
            heading={about.heading}
            message={about.message}
            link={about.imageLink}
            imgSize={about.imageSize}
            resume={about.resume}
          />
        )}
        
        {experiences.show && <Experience experiences={experiences} />}
        
        {repos.show && (
          <Project
            heading={repos.heading}
            username={repos.gitHubUsername}
            length={repos.reposLength}
            specfic={repos.specificRepos}
            projects={repos.projects}
          />
        )}

        {skills.show && (
          <Skills
            heading={skills.heading}
            hardSkills={skills.hardSkills}
            softSkills={skills.softSkills}
          />
        )}
      </Suspense>
    </div>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <HelmetProvider>
      <Router basename={process.env.PUBLIC_URL + '/'}>
        <div className="App">
          <Suspense fallback={<LoadingSpinner />}>
            {navBar.show && <Navbar ref={titleRef} />}
          </Suspense>
          
          <Routes>
            <Route 
              path='/' 
              element={<Home ref={titleRef} />} 
            />
          </Routes>
          
          <Suspense fallback={<LoadingSpinner />}>
            <Footer>
              {getInTouch.show && (
                <GetInTouch
                  heading={getInTouch.heading}
                  message={getInTouch.message}
                  email={getInTouch.email}
                />
              )}
            </Footer>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
