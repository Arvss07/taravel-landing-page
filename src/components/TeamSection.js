export default function TeamSection() {

  const teamMembers = [
    {
      id: 1,
      name: 'Jake Russel Agcanas',
      role: 'UI/UX Designer',
      email: 'juniorlazarooo.jr@gmail.com',
      image: '/assets/member-pictures/jake.png'
    },
    {
      id: 2,
      name: 'Arvy Aggabao',
      role: 'Web Developer',
      email: 'aggabaoarvy072004@gmail.com',
      image: '/assets/member-pictures/arvy.png'
    },
    {
      id: 3,
      name: 'Jirehvestre Comingo',
      role: 'Mobile Developer',
      email: 'jirehvestre25434@gmail.com',
      image: '/assets/member-pictures/jv.png'
    },
    {
      id: 4,
      name: 'Carl Angelo Obordo',
      role: 'Mobile Developer',
      email: 'carlobordoangelo@gmail.com',
      image: '/assets/member-pictures/carl.png'
    },
    {
      id: 5,
      name: 'Abiel Roj Parungao',
      role: 'Mobile Developer',
      email: 'abielparungao31@gmail.com',
      image: '/assets/member-pictures/abiel.png'
    }
  ];

  return (
    <section id="team" className="relative py-20 bg-gradient-to-b from-base-100 to-base-200 overflow-hidden">
      {/* Animated SVG Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3"></div>
        
        {/* SVG Blobs */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Team theme blobs */}
          <path 
            d="M200 150C200 100 250 50 300 50C350 50 400 100 400 150C400 200 350 250 300 250C250 250 200 200 200 150Z" 
            fill="url(#teamGradient1)"
          />
          
          <path 
            d="M800 200C800 150 850 100 900 100C950 100 1000 150 1000 200C1000 250 950 300 900 300C850 300 800 250 800 200Z" 
            fill="url(#teamGradient2)"
          />
          
          <path 
            d="M400 500C400 450 450 400 500 400C550 400 600 450 600 500C600 550 550 600 500 600C450 600 400 550 400 500Z" 
            fill="url(#teamGradient3)"
          />
          
          <path 
            d="M100 600C100 550 150 500 200 500C250 500 300 550 300 600C300 650 250 700 200 700C150 700 100 650 100 600Z" 
            fill="url(#teamGradient4)"
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="teamGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.08"/>
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.04"/>
            </linearGradient>
            <linearGradient id="teamGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.08"/>
              <stop offset="100%" stopColor="#BE185D" stopOpacity="0.04"/>
            </linearGradient>
            <linearGradient id="teamGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.08"/>
              <stop offset="100%" stopColor="#059669" stopOpacity="0.04"/>
            </linearGradient>
            <linearGradient id="teamGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.08"/>
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.04"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Static decorative elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-accent/30 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            The passionate developers behind Tara-Vel, working together to revolutionize transportation in Cagayan Valley.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="team-card group">
              <div className="bg-base-100 rounded-t-3xl rounded-b-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="profile-image w-48 h-48 rounded-full object-cover border-4 border-base-100 shadow-lg"
                    />
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-base-content mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  
                  {/* Email Contact */}
                  <div className="flex items-center justify-center">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <i className="fas fa-envelope mr-2"></i>
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
