import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Users, ShieldAlert, Award, Calendar, BookOpen, Quote } from 'lucide-react';

const Home = () => {
  const [currentBg, setCurrentBg] = useState(0);

  const heroBgs = [
    {
      url: 'https://images.unsplash.com/photo-1588880331149-bc9b7348ee76?auto=format&fit=crop&q=80&w=1600',
      title: 'Ecosystem Restoration',
      description: 'Reversing desertification and planting seeds of hope in the arid Sahel.',
    },
    {
      url: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1600',
      title: 'Securing Food Resources',
      description: 'Supporting smallholder farmers through training and localized support structures.',
    },
    {
      url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1600',
      title: 'Empowering Communities',
      description: 'Enabling sustainable regional growth through local ownership and training.',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBgs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: '2022', label: 'Year Founded' },
    { value: '6+', label: 'Northern States Active' },
    { value: '120+', label: 'Communities Reached' },
    { value: '15,000+', label: 'Beneficiaries Supported' }
  ];

  const focusAreas = [
    {
      title: 'Community Empowerment',
      description: 'Building resilience through climate adaptation training and leadership seminars.',
      icon: Users,
      link: '/programs?tab=community',
      color: 'border-primary/30 hover:border-primary'
    },
    {
      title: 'Ecosystem Restoration',
      description: 'Reclaiming degraded land, conducting reforestation, and managing sand dunes.',
      icon: Leaf,
      link: '/programs?tab=reforestation',
      color: 'border-secondary/30 hover:border-secondary'
    },
    {
      title: 'Food Security',
      description: 'Strengthening smallholder farming practices and implementing the Apex model.',
      icon: Award,
      link: '/programs?tab=food',
      color: 'border-accent/30 hover:border-accent'
    },
    {
      title: 'Policy Advocacy',
      description: 'Advocating for sustainable land policies and environmental protection at all levels.',
      icon: ShieldAlert,
      link: '/programs?tab=policy',
      color: 'border-sahel-dark/20 hover:border-sahel-dark'
    }
  ];

  const newsTeasers = [
    {
      title: 'Restoration Milestone: 5,000 Seedlings Planted in Potiskum LGA',
      excerpt: 'Local farming associations partner with Sahel Restoration to plant indigenous trees, securing soil moisture and protecting local water sources.',
      date: 'July 2, 2026',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600',
      category: 'Restoration'
    },
    {
      title: 'Climate Adaptation Seminars Conclude in Bauchi State',
      excerpt: 'Over 40 community leaders complete intensive adaptive land management courses, gaining skills to implement sustainable soil health tactics.',
      date: 'June 18, 2026',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600',
      category: 'Empowerment'
    },
    {
      title: 'Apex Organisation Model Boosts Potiskum Farmer Incomes',
      excerpt: 'Smallholder agricultural collectives report a 25% average income increase during the dry-season crop harvest using shared logistics.',
      date: 'May 29, 2026',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600',
      category: 'Livelihoods'
    }
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Banner Section */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {heroBgs.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentBg ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(44,37,32,0.65), rgba(44,37,32,0.85)), url(${bg.url})` }}
          />
        ))}

        {/* Hero Content */}
        <div className="relative max-w-5xl mx-auto text-center px-4 z-10 text-white space-y-6">
          <span className="bg-accent/20 text-accent border border-accent/40 font-semibold text-xs sm:text-sm tracking-wider uppercase px-4 py-1.5 rounded-full inline-block backdrop-blur-sm animate-pulse">
            Ecosystem Restoration &amp; Food Security
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-shadow-sm leading-tight max-w-4xl mx-auto">
            Restoring Ecosystems.<br />
            <span className="text-accent">Securing Food.</span><br />
            Empowering the Sahel.
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Reversing land degradation, promoting climate-smart agriculture, and building local resilience in Northern Nigeria.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/get-involved"
              className="bg-accent hover:bg-accent/90 text-sahel-dark font-semibold px-8 py-4 rounded-xl transition-smooth shadow-lg hover:shadow-xl w-full sm:w-auto text-center active:scale-95"
            >
              Partner With Us
            </Link>
            <Link
              to="/about"
              className="border border-white/40 hover:border-white text-white font-medium px-8 py-4 rounded-xl transition-smooth bg-white/5 hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto text-center active:scale-95"
            >
              Learn Our Approach
            </Link>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
          {heroBgs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBg(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBg ? 'bg-accent w-8' : 'bg-white/40'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-36 relative z-20">
        <div className="bg-white rounded-3xl border border-[var(--color-sahel-border)] shadow-xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y-0 divide-x-0 lg:divide-x divide-sahel-border">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <span className="block font-display font-bold text-3xl sm:text-4xl text-primary mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-sahel-dark/70 font-semibold tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h4 className="text-xs uppercase tracking-wider font-semibold text-sahel-dark/50">Supported &amp; Partnered with Trusted Organizations</h4>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-smooth">
            <span className="font-display font-bold text-xl text-sahel-dark">UNICEF</span>
          </div>
          <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-smooth">
            <span className="font-display font-bold text-xl text-sahel-dark">Action Against Hunger</span>
          </div>
          <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-smooth">
            <span className="font-display font-bold text-xl text-sahel-dark">Yobe PHC Board</span>
          </div>
          <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-smooth">
            <span className="font-display font-bold text-xl text-sahel-dark">Bauchi PHC Board</span>
          </div>
        </div>
      </section>

      {/* Snapshot of Focus Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
            Our Core Competencies
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-sahel-dark">
            Focus Areas of Operation
          </h2>
          <p className="text-sm sm:text-base text-sahel-dark/70 max-w-2xl mx-auto">
            Applying ecological science, community empowerment models, and sustainable agriculture methods to build a resilient Sahel environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Link
                key={index}
                to={area.link}
                className={`bg-white rounded-2xl p-6 border-2 ${area.color} transition-all duration-300 hover:shadow-lg flex flex-col justify-between group`}
              >
                <div>
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-sahel-dark mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-sahel-dark/70 leading-relaxed">
                    {area.description}
                  </p>
                </div>
                <div className="pt-6 flex items-center text-primary font-semibold text-xs tracking-wider uppercase group-hover:text-secondary transition-colors">
                  Read Program <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest from the Field section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-sahel-border pb-6">
          <div className="space-y-2">
            <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
              Field Reports
            </span>
            <h2 className="font-display font-bold text-3xl text-sahel-dark">
              Latest from the Field
            </h2>
          </div>
          <Link
            to="/news"
            className="text-primary hover:text-secondary font-semibold text-sm transition-smooth flex items-center"
          >
            View All Updates <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsTeasers.map((news, index) => (
            <article key={index} className="bg-white rounded-3xl border border-sahel-border shadow-sm overflow-hidden flex flex-col h-full group hover:shadow-md transition-smooth">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-smooth"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md">
                  {news.category}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center text-xs text-sahel-dark/50 font-medium">
                    <Calendar size={14} className="mr-2" />
                    {news.date}
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-sahel-dark hover:text-primary transition-colors line-clamp-2">
                    <Link to="/news">{news.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-sahel-dark/70 line-clamp-3 leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    to="/news"
                    className="text-primary hover:text-secondary font-semibold text-xs tracking-wider uppercase flex items-center"
                  >
                    Read Full Report <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-primary/5 border-y border-primary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Quote className="text-primary/20 mx-auto" size={48} />
          <p className="font-display font-medium text-lg sm:text-xl lg:text-2xl text-sahel-dark leading-relaxed italic">
            "By restoring native trees and establishing soil conservation networks, we are not just saving the landscape — we are securing livelihoods for smallholder farmers and creating sustainable futures for generations to come."
          </p>
          <div className="space-y-1">
            <h4 className="font-bold text-sm sm:text-base text-sahel-dark">Country Program Director</h4>
            <p className="text-xs text-sahel-dark/60 font-semibold tracking-wider uppercase">Yobe Field Office</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
