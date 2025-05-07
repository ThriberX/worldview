// 'use client'
// import Head from 'next/head';

// export default function HomePage() {
//   const cars = [
//     {
//       title: "URBANIA (17-seats)",
//       rating: 4.8,
//       passengers: 17,
//       type: "Automatic",
//       ac: true,
//       doors: 2,
//       image: "/images/urbania.png"
//     },
//     {
//       title: "URBANIA (20-seats)",
//       rating: 4.8,
//       passengers: 20,
//       type: "Automatic",
//       ac: true,
//       doors: 2,
//       image: "/images/urbania.png"
//     },
//     {
//       title: "URBANIA (26-seats)",
//       rating: 4.8,
//       passengers: 26,
//       type: "Automatic",
//       ac: true,
//       doors: 2,
//       image: "/images/urbania.png"
//     },
//     {
//       title: "SWIFT DEZIRE",
//       rating: 4.8,
//       passengers: 4,
//       type: "Automatic",
//       ac: true,
//       doors: 4,
//       image: "/images/swift-dezire.png"
//     },
//     {
//       title: "ERTIGA",
//       rating: 4.8,
//       passengers: 6,
//       type: "Automatic",
//       ac: true,
//       doors: 4,
//       image: "/images/ertiga.png"
//     },
//     {
//       title: "INNOVA CRYSTA",
//       rating: 4.8,
//       passengers: 7,
//       type: "Automatic",
//       ac: true,
//       doors: 4,
//       image: "/images/innova-crysta.png"
//     },
//   ];

//   return (
//     <>
//       <Head>
//         <title>Best Car Rentals in Your City | Urbania & More</title>
//         <meta
//           name="description"
//           content="Find the best car rental deals including Urbania 17/20/26 seats, Swift, Ertiga, and Innova Crysta. Book now for reliable transport."
//         />
//         <link rel="canonical" href="https://yourdomain.com/" />
//         <meta name="robots" content="index, follow" />
//       </Head>

//       <main className="px-6 py-10 max-w-7xl mx-auto">
//         {/* Hero Section */}
//         <section className="flex flex-col md:flex-row items-center justify-between gap-8">
//           <div className="flex-1">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
//               Best Car Rental Deals in Town
//             </h1>
//             <p className="text-lg text-gray-600 mb-6">
//               From Urbania to Innova — Find the perfect ride for your travel, school, or events.
//               Hassle-free bookings and trusted service.
//             </p>
//             <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition">
//               Book a Ride
//             </button>
//           </div>
//           <img
//             src="/images/hero-van.png"
//             alt="Main van image"
//             className="w-full md:w-1/2 rounded-xl"
//           />
//         </section>

//         {/* Popular Cars */}
//         <h2 className="text-3xl font-semibold mt-16 mb-8 text-center text-gray-800">
//           Most Popular Car Rental Deals
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {cars.map((car, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition border"
//             >
//               <img
//                 src={car.image}
//                 alt={car.title}
//                 className="w-full h-48 object-contain mb-4"
//               />
//               <h3 className="text-xl font-semibold text-gray-700 mb-1">{car.title}</h3>
//               <p className="text-yellow-500 mb-1">⭐ {car.rating}</p>
//               <p className="text-gray-600 text-sm mb-1">
//                 👤 {car.passengers} Passengers | ⚙ {car.type}
//               </p>
//               <p className="text-gray-600 text-sm mb-4">
//                 ❄ AC Included | 🚪 {car.doors} Doors
//               </p>
//               <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
//                 Call Now ➜
//               </button>
//             </div>
//           ))}
//         </div>
//       </main>
//     </>
//   );
// }
'use client';
import Head from 'next/head';

export default function HomePage() {
  const cars = [
    {
      title: "URBANIA(17-seats)",
      rating: 4.8,
      passengers: 17,
      type: "Auto",
      ac: true,
      doors: 2,
      image: "/images/urbania.png"
    },
    {
      title: "URBANIA(20-seats)",
      rating: 4.8,
      passengers: 20,
      type: "Auto",
      ac: true,
      doors: 2,
      image: "/images/urbania.png"
    },
    {
      title: "URBANIA(26-seats)",
      rating: 4.8,
      passengers: 26,
      type: "Auto",
      ac: true,
      doors: 2,
      image: "/images/urbania.png"
    },
    {
      title: "SWIFT DEZIRE",
      rating: 4.8,
      passengers: 4,
      type: "Auto",
      ac: true,
      doors: 4,
      image: "/images/swift-dezire.png"
    },
    {
      title: "ERTIGA",
      rating: 4.8,
      passengers: 6,
      type: "Auto",
      ac: true,
      doors: 4,
      image: "/images/ertiga.png"
    },
    {
      title: "INNOVA CRYSTA",
      rating: 4.8,
      passengers: 7,
      type: "Auto",
      ac: true,
      doors: 4,
      image: "/images/innova-crysta.png"
    },
  ];

  return (
    <>
      <Head>
        <title>Best Car Rentals in Your City | Urbania & More</title>
      </Head>

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
              Enjoy your ride with our comfortable cars.
            </h1>
            <p style={{ fontSize: '1rem', marginBottom: '24px' }}>
              We are ready to serve the best experience in car rental.
            </p>
            <button style={{
              backgroundColor: '#FBBF24',
              color: '#000',
              padding: '12px 20px',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Explore Now
            </button>
          </div>
          <img
            src="/images/hero-van.png"
            alt="Hero van"
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
          Most popular cars rental deals
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
              <img
                src={car.image}
                alt={car.title}
                style={{ width: '100%', height: '180px', objectFit: 'contain', marginBottom: '16px' }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '8px' }}>{car.title}</h3>
              <p style={{ color: '#FBBF24', marginBottom: '8px' }}>⭐ {car.rating}</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>👤 {car.passengers} Passengers</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>⚙ {car.type}</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>❄ Air Conditioning</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '12px' }}>🚪 {car.doors} Doors</p>
              <button style={{
                backgroundColor: '#FBBF24',
                color: '#000',
                padding: '10px 16px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '8px'
              }}>
                Call now ➜
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
