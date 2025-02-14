import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Lazy load components
const Home = React.lazy(() => import('./components/Home.jsx'));
const About = React.lazy(() => import('./components/About.jsx'));
const Contact = React.lazy(() => import('./components/Contact.jsx'));
const Template = React.lazy(() => import('./components/Template.jsx'));
const Login = React.lazy(() => import('./components/Login.jsx'));
const SignUp = React.lazy(() => import('./components/SignUp.jsx'));
const Terms = React.lazy(() => import('./components/Term.jsx'));
const Privacy = React.lazy(() => import('./components/Privacy.jsx'));
const FAQ = React.lazy(() => import('./components/FAQ.jsx'));
const UseTemplateone = React.lazy(() => import('./components/Template/UseTemplateone.jsx'));
const UseTemplatetwo = React.lazy(() => import('./components/Template/UseTemplatetwo.jsx'));
const UseTemplatethree = React.lazy(() => import('./components/Template/UseTemplatethree.jsx'));
const UseTemplatefour = React.lazy(() => import('./components/Template/UseTemplatefour.jsx'));
const UseTemplatefive = React.lazy(() => import('./components/Template/UseTemplatefive.jsx'));
const UseTemplatesix = React.lazy(() => import('./components/Template/UseTemplatesix.jsx'));
const UseTemplateseven = React.lazy(() => import('./components/Template/UseTemplateseven.jsx'));
const UseTemplateeight = React.lazy(() => import('./components/Template/UseTemplateeight.jsx'));
const UseTemplatenine = React.lazy(() => import('./components/Template/UseTemplatenine.jsx'));

const LoadingSpinner = () => (
  <div className="loading-spinner">Loading...</div>
);

const routes = [
  { path: '/', element: Home },
  { path: '/about', element: About },
  { path: '/contact', element: Contact },
  { path: '/template', element: Template },
  { path: '/useTemplateone', element: UseTemplateone },
  { path: '/useTemplatetwo', element: UseTemplatetwo },
  { path: '/useTemplatethree', element: UseTemplatethree },
  { path: '/useTemplatefour', element: UseTemplatefour },
  { path: '/useTemplatefive', element: UseTemplatefive },
  { path: '/useTemplatesix', element: UseTemplatesix },
  { path: '/useTemplateseven', element: UseTemplateseven },
  { path: '/useTemplateeight', element: UseTemplateeight },
  { path: '/useTemplatenine', element: UseTemplatenine },
  { path: '/login', element: Login },
  { path: '/signup', element: SignUp },
  { path: '/terms', element: Terms },
  { path: '/privacy', element: Privacy },
  { path: '/faq', element: FAQ}
];

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {routes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
