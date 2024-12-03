import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { NewsletterForm } from './components/NewsletterForm';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2b3c] to-[#2f3640]">
      <Hero />
      <Benefits />
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair text-white mb-12">
            Be the First to Know
          </h2>
          <NewsletterForm />
        </div>
      </div>
      <SocialProof />
      <Footer />
      
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="pernancial-cookie-consent"
        style={{ background: '#1a2b3c' }}
        buttonStyle={{ background: '#c4a777', color: 'white', fontSize: '13px' }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}

export default App;