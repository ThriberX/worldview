'use client';

export default function CabRentalSection() {
  const cars = [
    {
      title: "Urbania 14/17 seater",
      rating: 4.8,
      passengers: 20,
      ac: true,
      image: "https://feture-seo.d2lmonhhyl427m.amplifyapp.com/images/hero-van-removebg-preview.png",
      alt:"Spacious interior of tempo traveler with comfortable seating"
    },
    {
      title: "Tempo Traveller 12/17 Seater",
      rating: 4.8,
      passengers: 17,
      ac: true,
      image: "https://feture-seo.d2lmonhhyl427m.amplifyapp.com/images/traveller3050wb.png",
      alt:"Happy group traveling in a tempo traveler through Varansi streets"
    },
   
    {
      title: "Tempo Traveller 20/26 seater",
      rating: 4.9,
      passengers: 20,
      ac: true,
      image: "https://feture-seo.d2lmonhhyl427m.amplifyapp.com/images/Traveller4020WB.png",
       alt:"White tempo traveler parked in Varanasi city center"

    },
    {
      title: "Traveller Maharaja Luxury 12/19 seater",
      rating: 4.7,
      passengers: 26,
      ac: true,
      image: "https://feture-seo.d2lmonhhyl427m.amplifyapp.com/images/Traveller4020WB.png",
        alt:"White tempo traveler parked in Varanasi city center"
    },
    {
      title: "Tempo Traveller 17 Seater",
      rating: 4.9,
      passengers: 19,
      ac: true,
      image: "https://feture-seo.d2lmonhhyl427m.amplifyapp.com/images/traveller3700wb.png",
        alt:"White tempo traveler parked in Varanasi city center"
    },
    {
      title: "SWIFT DEZIRE",
      rating: 4.6,
      passengers: 4,
      ac: true,
      doors: 4,
      image: "https://feture-seo.d2lmonhhyl427m.amplifyapp.com/images/swit-white.png",
      alt:"Happy group traveling in a car through Varanasi streets"
    },
    {
      title: "ERTIGA",
      rating: 4.9,
      passengers: 6,
      ac: true,
      image: "https://feture-seo.d2lmonhhyl427m.amplifyapp.com/images/ertiga-red.png",
      alt:"White tempo traveler parked in Varanasi city center"
    },
    {
      title: "INNOVA CRYSTA",
      rating: 4.8,
      passengers: 7,
      ac: true,
      image: "https://feture-seo.d2lmonhhyl427m.amplifyapp.com/images/innova-crysta.png",
      alt:"Spacious interior of tempo traveler with comfortable seating"
    },
  ];

  return (
    
    <section>
      
        <title>Tempo Traveler Rentals in Varanasi | Comfortable & Affordable Travel</title>
    
      <meta name="description" content="Book reliable tempo traveler rentals in Varanasi for group travel. Enjoy comfort, affordability, and timely service. Reserve your ride today!"></meta>

      <main style={{ backgroundColor: '#0F172A', color: 'white', padding: '40px 24px', fontFamily: 'sans-serif' }}>
        {/* Hero Section */}
        <section style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '60px',
        }}>
          <div style={{ flex: '1 1 400px', paddingRight: '20px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
              Reliable Tempo Traveller Rentals for Varanasi, Prayagraj, Ayodhya
            </h1>
            <p style={{ fontSize: '1rem', marginBottom: '24px' }}>
              We are ready to serve the best experience in car rental.
            </p>
            <a href="tel:7800664900">  <button 
            className="common-btn-effects"style={{
              backgroundColor: '#FBBF24',
              color: '#000',
              padding: '12px 20px',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Call Now ➜
            </button></a>
            <h2 style={{color:'#0F172A' ,fontSize:'0px'}}>Why Choose Our Services ?</h2>
<h3 style={{color:'#0F172A', fontSize:'0px'}}>Comfortable Seating for All Group Sizes</h3>
<h3 style={{color:'#0F172A',fontSize:'0px'}}>Experienced Drivers Ensuring Safe Journeys</h3>
<h3 style={{color:'#0F172A',fontSize:'0px'}}>Affordable Rates with No Hidden Charges</h3>
          </div>
          <img
            src="https://feture-seo.d2lmonhhyl427m.amplifyapp.com/images/hero-van.png"
            alt="Spacious tempo traveller parked in Varanasi ready for group travel"
            style={{ flex: '1 1 400px', maxWidth: '600px', width: '100%', borderRadius: '12px', marginTop: '20px' }}
          />
        </section>

        {/* Section Title */}
        <h2 style={{
          backgroundColor: '#1E293B',
          textAlign: 'center',
          padding: '10px 20px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          borderRadius: '12px',
          marginBottom: '40px',
        }}>
          Most popular taxi Rental <span style={{color: '#FBBF24', fontWeight: 'bolder', fontSize:'40px'}}>Deals</span>
        </h2>

        {/* Car Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          {cars.map((car, index) => (
            <div key={index} style={{
              backgroundColor: '#2E709E',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              color: 'white',
            }}>
              <div style={{ width: '100%', height: '180px', marginBottom: '16px', overflow: 'hidden' }}>
              <img
                src={car.image}
                alt={car.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
               
              />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '8px' }}>{car.title}</h3>
              <p style={{ color: '#FBBF29', marginBottom: '8px' }}>⭐ {car.rating}</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>👤 {car.passengers} Passengers</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>❄ Air Conditioning</p>
            <a href="tel:7800664900"> <button className="call-button transition-all duration-300 ease-in-out shadow-md hover:scale-105 
               hover:shadow-lgactive:scale-98 active:shadow-sm active:translate-y-0.5" style={{
                backgroundColor: '#FBBF24',
                color: '#000',
                padding: '10px 16px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '8px',
               transition: 'transform 0.1s ease-in-out'
              
              }}>
                Call now ➜
              </button>
              </a>
            </div>
          ))}
        </div>
          <footer style={{
    backgroundColor: '#1E293B',
    color: 'white',
    textAlign: 'center',
    padding: '24px 16px',
    marginTop: '60px',
    borderTop: '2px solid #334155',
    borderRadius: '12px'
  }}>
    <p style={{ fontSize: '1rem' }}>
      © {new Date().getFullYear()} Varanasi Tempo Traveller Rentals. All rights reserved.
    </p>
    <p style={{ fontSize: '0.9rem' }}>
      📞 <a href="tel:7800664900" style={{ color: '#FBBF24', textDecoration: 'none', fontWeight: 'bold' }}>Call:+91 7800664900</a>
    </p>
    <p style={{ fontSize: '0.9rem' }}>
    📸 <a
      href="https://www.instagram.com/worldvt.vns/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#FBBF24', textDecoration: 'none', fontWeight: 'bold' }}
    >
      Follow us on Instagram
    </a>
  </p>
  </footer>
      </main>
      </section>
    
  );
}

