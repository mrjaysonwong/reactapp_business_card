import React from 'react';
import Photo from './components/Photo';
import Name from './components/Name';
import Button from './components/Button';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="container">
      <Photo />
      <Name />
      <Button />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
