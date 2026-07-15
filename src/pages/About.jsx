import React from 'react';
import { Target, Eye, Shield, Users, Landmark, Trees, Heart, Sparkles, Scale, Handshake } from 'lucide-react';
import Organogram from '../components/UI/Organogram';

const About = () => {
  const values = [
    {
      title: 'Ecological Stewardship',
      description: 'Preserving, restoring, and managing natural ecosystems with local species to sustain soil health and combat desertification.',
      icon: Trees,
    },
    {
      title: 'Community Ownership',
      description: 'Ensuring local communities design, implement, and maintain programs for long-term sustainability and operational pride.',
      icon: Users,
    },
    {
      title: 'Scientific & Adaptive Rigor',
      description: 'Using climate-smart research, empirical soil testing, and modern forestry methodologies in all field work.',
      icon: Sparkles,
    },
    {
      title: 'Transparency & Integrity',
      description: 'Maintaining complete accountability with our partners, donors, and government monitors in all resource use.',
      icon: Scale,
    },
    {
      title: 'Inclusivity & Equity',
      description: 'Empowering marginalized groups, including smallholder women farmers and youth collectives, across our operation.',
      icon: Heart,
    },
    {
      title: 'Strategic Collaboration',
      description: 'Forging deep, active partnerships with UNICEF, Action Against Hunger, and regional Primary Health Care Boards.',
      icon: Handshake,
    },
    {
      title: 'Resilient Self-Sufficiency',
      description: 'Building regional capacities so that target communities thrive independently of permanent humanitarian assistance.',
      icon: Shield,
    }
  ];

  const principles = [
    {
      title: 'Context-Specific Interventions',
      description: 'All adaptation training is tailored specifically to the micro-climate, water access, and soil traits of the local LGA.'
    },
    {
      title: 'Empowering Local Leadership',
      description: 'We establish community-led committees to direct local reforestation zones and supervise smallholder support credit.'
    },
    {
      title: 'Integrated Health-Environment Models',
      description: 'Restoring ecosystems directly improves crop variety, nutrition levels, and water hygiene, which reduces local health crises.'
    }
  ];

  return (
    <div className="space-y-24 py-16 pb-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
          Who We Are
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-sahel-dark">
          About Our Organisation
        </h1>
        <p className="text-sm sm:text-base text-sahel-dark/70 max-w-2xl mx-auto">
          Learn about our background, our mission in the Sahel region, and the core values guiding our daily work.
        </p>
      </section>

      {/* History & Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-sahel-dark">
            Our Foundation &amp; Background
          </h2>
          <div className="space-y-4 text-sahel-dark/80 text-sm sm:text-base leading-relaxed">
            <p>
              Founded in 2022, our organization was created to address the intersecting crises of desertification, climate instability, and food insecurity in Northern Nigeria and the wider Sahel belt. With extreme dry seasons and increasing soil degradation, communities have faced critical losses in agricultural outputs and resources.
            </p>
            <p>
              By establishing our anchor field office in Potiskum, Yobe State, we began working closely with regional local government authorities (LGAs) and agricultural unions. We recognized that restoring the environment requires more than planting trees; it requires empowering local populations with climate adaptation skills, securing sustainable water sources, and building farmer support networks.
            </p>
            <p>
              Today, in active alignment with international partners like UNICEF and Action Against Hunger, we carry out scientific reforestation, manage climate-resilient farming models, and advocate for sustainable regional land policies to protect the fragile Sahel landscape.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 relative aspect-square lg:aspect-auto lg:h-[400px] rounded-3xl overflow-hidden border border-sahel-border shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800" 
            alt="Sahel agricultural field" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-primary text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between border-b-8 border-accent">
            <div className="space-y-6">
              <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center">
                <Target size={24} className="text-accent" />
              </div>
              <h3 className="font-display font-bold text-2xl">Our Mission</h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                To restore degraded Sahelian ecosystems, enhance food security for smallholder farming families, and build resilient, empowered communities through sustainable land administration, education, and strategic partnerships.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-sahel-dark text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between border-b-8 border-primary">
            <div className="space-y-6">
              <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center">
                <Eye size={24} className="text-accent" />
              </div>
              <h3 className="font-display font-bold text-2xl">Our Vision</h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                A thriving, biodiverse Sahel region where land degradation is reversed, smallholder farmer livelihoods are fully secured, and local communities possess the capability and leadership to withstand climate change.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values (7 Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
            Our Guiding Philosophy
          </span>
          <h2 className="font-display font-bold text-3xl text-sahel-dark">
            Our Core Values
          </h2>
          <p className="text-sm text-sahel-dark/70 max-w-xl mx-auto">
            These seven core values define our organizational DNA, shaping how we collaborate with governments, donors, and farming communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-sahel-border shadow-sm hover:shadow-md transition-smooth flex flex-col items-start"
              >
                <div className="bg-primary/10 text-primary p-3 rounded-xl mb-4">
                  <Icon size={20} />
                </div>
                <h4 className="font-display font-bold text-base text-sahel-dark mb-2">{val.title}</h4>
                <p className="text-xs sm:text-sm text-sahel-dark/70 leading-relaxed">{val.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Organizational Principles */}
      <section className="bg-sahel-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-accent font-semibold text-xs tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full">
              How We Work
            </span>
            <h2 className="font-display font-bold text-3xl">Organizational Principles</h2>
            <p className="text-white/60 text-sm max-w-xl mx-auto">
              Our baseline rules governing field operations, reporting schedules, and local project implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((pr, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-3">
                <h3 className="font-display font-bold text-lg text-accent">{pr.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{pr.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organogram Tree Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Organogram />
      </section>

    </div>
  );
};

export default About;
