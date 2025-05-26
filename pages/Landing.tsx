import React from 'react';

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '2rem',
      backgroundColor: '#f8f9fa'
    }}>
      <h1 style={{ 
        fontSize: '0rem', 
        fontWeight: 'bold',
        color: '#111'
      }}>
        {"dfghjmk,l.jhgfdefrgthyjkljhgfdsfghj"}
      </h1>
    </div>
  );
};

export default Hero;