import React, { useState } from 'react';
import { Award, Trees, MessageSquare, ArrowRight, Eye, ChevronRight, X, ChevronLeft, Maximize2 } from 'lucide-react';

const galleryItems = [
  {
    src: '/images/img2.jpeg',
    title: 'Tree Planting Initiative',
    category: 'Reforestation',
    description: 'Volunteers and community members planting indigenous tree saplings in Potiskum LGA to create protective windbreaks and fight desertification.'
  },
  {
    src: '/images/img1.jpeg',
    title: 'Climate Adaptation Seminar',
    category: 'Community & Training',
    description: 'A female presenter leading a climate adaptation seminar, training local farmers on sustainable land management.'
  },
  {
    src: '/images/img3.jpeg',
    title: 'Restored Ecosystem Milestone',
    category: 'Reforestation',
    description: 'A proud community member standing next to a successfully planted and nurtured young tree, demonstrating local growth and care.'
  },
  {
    src: '/images/img4.jpeg',
    title: 'Community Farmer Cooperative',
    category: 'Community & Training',
    description: 'A group photo of smallholder farmers and community leaders collaborating under the Apex Organisation model.'
  },
  {
    src: '/images/img5.jpeg',
    title: 'Restoration Volunteer Team',
    category: 'Reforestation',
    description: 'Our dedicated field volunteer team and local residents celebrating another successful restoration site completion.'
  }
];

const Impact = () => {
  const [showAfter, setShowAfter] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const caseStudies = [
    {
      title: 'LGA Agricultural Partnership in Potiskum',
      location: 'Potiskum, Yobe State',
      challenge: 'Frequent dry-season crop failure and lack of organized collective transport forced smallholders to sell harvests at a loss to local middle-men.',
      solution: 'Formed a joint committee with the Potiskum Local Government Authority and established the Apex Organisation model, coordinating collective crop aggregation and shared transport.',
      result: 'Aggregated 1,200 metric tons of grain, secured collective sales direct to regional markets, and raised average smallholder household incomes by 25%.',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Community Reforestation & Windbreak Project',
      location: 'Yobe-Bauchi Border Community',
      challenge: 'Encroaching sand dunes threatened to cover rural primary schools and residential farm plots, leading to class closures and crop loss.',
      solution: 'Trained local youth collectives to plant multi-layered shelterbelts using drought-adapted Neem and Acacia saplings alongside local grasses.',
      result: 'Stabilized 800 meters of sand borders, reduced local wind erosion rates by 40%, and created a protected micro-climate for underlying vegetable gardens.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600',
    }
  ];

  const testimonials = [
    {
      quote: "Before this initiative, we had no secure storage. Almost half of our sorghum crop was spoiled by pests. The training and storage bags saved our harvest, and the Apex model helped us sell together for a higher price.",
      author: "Malam Ibrahim Aliyu",
      role: "Chairman, Potiskum Farmers Cooperative",
      location: "Yobe State"
    },
    {
      quote: "Working with the restoration team allowed us to coordinate land boundaries. Traditional leaders and local councils now work together to enforce grazing zones, giving our newly planted saplings time to take root and grow.",
      author: "Hon. Amina Abubakar",
      role: "Community Development Director",
      location: "Bauchi Regional Council"
    }
  ];

  const partners = [
    { name: 'UNICEF', role: 'Nutrition & Health Partner' },
    { name: 'Action Against Hunger', role: 'Food Security Collaborator' },
    { name: 'Yobe State Primary Health Care Board', role: 'Health Coordination Partner' },
    { name: 'Bauchi State Primary Health Care Board', role: 'Local Government Partner' }
  ];

  return (
    <div className="space-y-24 py-16 pb-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
          Impact and Milestones
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-sahel-dark">
          Our Field Achievements
        </h1>
        <p className="text-sm sm:text-base text-sahel-dark/70 max-w-2xl mx-auto">
          Explore our data-driven case studies, testimonials from local farming families, and verify our environmental restoration work.
        </p>
      </section>

      {/* Interactive Before/After Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-sahel-border p-8 shadow-xl space-y-8">
          <div className="text-center lg:text-left">
            <span className="text-xs uppercase font-bold text-primary tracking-wider">Visual Verification</span>
            <h3 className="font-display font-bold text-2xl text-sahel-dark mt-2">Ecosystem Recovery Visualizer</h3>
            <p className="text-sm text-sahel-dark/75">Hover or toggle to see the environmental impact of 3 years of restoration work.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visualizer Frame */}
            <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden border border-sahel-border shadow-md">
              <img 
                src={
                  showAfter 
                    ? "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800" // Green restored farm/trees
                    : "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" // Degraded dry ground
                } 
                alt="Restoration State" 
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
              <div className="absolute top-4 left-4 bg-glass border border-sahel-border px-4 py-2 rounded-xl text-xs font-bold text-sahel-dark shadow-md">
                State: {showAfter ? 'Restored / Reforested (2026)' : 'Degraded Desert (2022)'}
              </div>
            </div>

            {/* Visualizer Controls */}
            <div className="lg:col-span-5 space-y-6">
              <h4 className="font-display font-bold text-lg text-sahel-dark">Restoration Impact Details</h4>
              <p className="text-sm text-sahel-dark/75 leading-relaxed">
                By managing rainwater runoff, planting protective shelterbelts, and training communities to restrict grazing, soil moisture has increased by 35%. This enables dry-season farming and re-establishes local flora.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setShowAfter(false)}
                  className={`px-5 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase transition-smooth shadow-sm ${
                    !showAfter ? 'bg-secondary text-white' : 'bg-sahel-light text-sahel-dark hover:bg-sahel-border'
                  }`}
                >
                  View 2022 (Before)
                </button>
                <button 
                  onClick={() => setShowAfter(true)}
                  className={`px-5 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase transition-smooth shadow-sm ${
                    showAfter ? 'bg-primary text-white' : 'bg-sahel-light text-sahel-dark hover:bg-sahel-border'
                  }`}
                >
                  View 2026 (After)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies (Detailed Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
            Project Chronicles
          </span>
          <h2 className="font-display font-bold text-3xl text-sahel-dark">Field Case Studies</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl border border-sahel-border overflow-hidden shadow-md flex flex-col justify-between hover:shadow-lg transition-smooth"
            >
              <div>
                <div className="aspect-video relative overflow-hidden">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-primary text-white font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-lg shadow-md">
                    {study.location}
                  </span>
                </div>
                <div className="p-8 space-y-6">
                  <h3 className="font-display font-bold text-xl text-sahel-dark leading-tight">{study.title}</h3>
                  
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div>
                      <strong className="text-xs text-primary uppercase tracking-wider block mb-1">Local Challenge:</strong>
                      <p className="text-sahel-dark/75">{study.challenge}</p>
                    </div>
                    <div>
                      <strong className="text-xs text-primary uppercase tracking-wider block mb-1">Our Intervention:</strong>
                      <p className="text-sahel-dark/75">{study.solution}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-8 border-t border-sahel-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider block">Outcome Achieved</span>
                  <span className="text-base font-bold text-sahel-dark">{study.result}</span>
                </div>
                <span className="bg-primary text-white p-2 rounded-xl">
                  <Award size={20} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Field Activities Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full font-display">
            Visual Evidence
          </span>
          <h2 className="font-display font-bold text-3xl text-sahel-dark">Field Activities Gallery</h2>
          <p className="text-sm text-sahel-dark/70 max-w-xl mx-auto font-sans">
            Take a look at our team and local communities actively restoring soil health, planting trees, and learning together.
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex justify-center space-x-3">
          {['All', 'Reforestation', 'Community & Training'].map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setLightboxIndex(null); // Reset lightbox index when filtering
              }}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase transition-smooth shadow-sm font-sans ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-white text-sahel-dark border border-sahel-border hover:bg-sahel-light'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeFilter === 'All' 
            ? galleryItems 
            : galleryItems.filter(item => item.category === activeFilter)
          ).map((item, index) => (
            <div
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="bg-white rounded-3xl border border-sahel-border overflow-hidden shadow-sm hover:shadow-md transition-smooth group cursor-pointer flex flex-col h-full"
            >
              <div className="relative aspect-video overflow-hidden bg-sahel-light">
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-smooth"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-sahel-dark/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <div className="bg-white/95 text-primary p-3 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-smooth">
                    <Maximize2 size={20} />
                  </div>
                </div>
                <span className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg font-sans">
                  {item.category}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base sm:text-lg text-sahel-dark group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sahel-dark/70 leading-relaxed line-clamp-3 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-sahel-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-accent font-semibold text-xs tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full">
              Voices of the Sahel
            </span>
            <h2 className="font-display font-bold text-3xl">Community Testimonials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, index) => (
              <div 
                key={index} 
                className="bg-white/5 rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6 shadow-sm"
              >
                <p className="text-sm sm:text-base text-white/80 leading-relaxed italic">
                  "{test.quote}"
                </p>
                <div className="flex justify-between items-end border-t border-white/10 pt-4">
                  <div>
                    <h5 className="font-display font-bold text-white text-sm sm:text-base">{test.author}</h5>
                    <p className="text-xs text-white/50">{test.role}</p>
                  </div>
                  <span className="text-xs text-accent font-semibold tracking-wider uppercase">{test.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Board */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
            Strategic Alliances
          </span>
          <h2 className="font-display font-bold text-3xl text-sahel-dark">Collaborating Agencies</h2>
          <p className="text-sm text-sahel-dark/70 max-w-xl mx-auto">
            We work alongside municipal authorities and international agencies to synchronize health and ecological support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white border border-sahel-border rounded-2xl p-6 text-center space-y-2 hover:border-primary/50 transition-smooth shadow-sm"
            >
              <h4 className="font-display font-bold text-base text-sahel-dark">{partner.name}</h4>
              <p className="text-xs text-sahel-dark/60 font-medium">{partner.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (() => {
        const filteredList = activeFilter === 'All' 
          ? galleryItems 
          : galleryItems.filter(item => item.category === activeFilter);
        const currentItem = filteredList[lightboxIndex];

        if (!currentItem) return null;

        const handlePrev = (e) => {
          e.stopPropagation();
          setLightboxIndex((lightboxIndex - 1 + filteredList.length) % filteredList.length);
        };

        const handleNext = (e) => {
          e.stopPropagation();
          setLightboxIndex((lightboxIndex + 1) % filteredList.length);
        };

        return (
          <div 
            className="fixed inset-0 z-50 bg-sahel-dark/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-smooth z-50"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            {filteredList.length > 1 && (
              <>
                <button 
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-smooth z-50"
                  onClick={handlePrev}
                  aria-label="Previous Image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-smooth z-50"
                  onClick={handleNext}
                  aria-label="Next Image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Content Container */}
            <div 
              className="max-w-4xl w-full flex flex-col items-center justify-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-sahel-dark flex items-center justify-center">
                <img 
                  src={currentItem.src} 
                  alt={currentItem.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
              <div className="text-center text-white space-y-2 max-w-2xl px-4">
                <span className="text-accent text-xs font-bold uppercase tracking-wider font-sans">
                  {currentItem.category}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  {currentItem.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  {currentItem.description}
                </p>
                <div className="text-xs text-white/40 pt-1 font-sans">
                  Image {lightboxIndex + 1} of {filteredList.length}
                </div>
              </div>
            </div>
          </div>
        );
      })()}

    </div>
  );
};

export default Impact;
