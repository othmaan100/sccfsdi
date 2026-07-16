import React, { useState } from 'react';
import { Target, Eye, Shield, Users, Landmark, Trees, Heart, Sparkles, Scale, Handshake, AlertCircle } from 'lucide-react';
import Organogram from '../components/UI/Organogram';

const About = () => {
  const [activePolicyTab, setActivePolicyTab] = useState('principles');

  const policyValues = [
    {
      num: '1',
      title: 'Human Dignity',
      desc: 'Every individual in the Sahel region has the right to live with dignity, free from hunger and climate-induced hardship. Programs must prioritize respect for human rights and cultural identities.'
    },
    {
      num: '2',
      title: 'Equity and Inclusion',
      desc: 'Development efforts will address the needs of the most vulnerable populations, including women, children, displaced persons, and marginalized communities. Special measures will ensure equitable access to resources and opportunities.'
    },
    {
      num: '3',
      title: 'Sustainability',
      desc: 'All interventions must promote environmental, economic, and social sustainability, focusing on long-term resilience rather than short-term relief.'
    },
    {
      num: '4',
      title: 'Accountability and Transparency',
      desc: 'The initiative will maintain robust accountability mechanisms to ensure responsible use of resources and transparent decision-making processes. Communities will have the right to monitor and evaluate programs.'
    },
    {
      num: '5',
      title: 'Collaboration and Participation',
      desc: 'Local communities, governments, international organizations, and civil society must collaborate. Initiatives will empower local actors to participate in decision-making and implementation.'
    },
    {
      num: '6',
      title: 'Conflict Sensitivity',
      desc: 'Recognizing the nexus between climate change and conflict, interventions will aim to reduce tensions over resources, promote peacebuilding, and avoid exacerbating existing disputes.'
    }
  ];

  const policyObjectives = [
    {
      num: '1',
      title: 'Mitigation and Adaptation to Climate Change',
      points: [
        'Promote the use of climate-resilient agricultural practices and technologies.',
        'Develop water management systems to address scarcity and variability.',
        'Support reforestation and land rehabilitation efforts, particularly through local stewardship.'
      ]
    },
    {
      num: '2',
      title: 'Food Security and Livelihoods',
      points: [
        'Strengthen local food production systems through training, tools, and access to markets.',
        'Enhance social safety nets to support households during food shortages or climatic shocks.',
        'Diversify livelihoods to reduce dependency on climate-sensitive sectors.'
      ]
    },
    {
      num: '3',
      title: 'Humanitarian Assistance and Crisis Response',
      points: [
        'Establish early warning systems for droughts, floods, and other climate-related disasters.',
        'Ensure timely delivery of humanitarian aid to affected populations.',
        'Integrate humanitarian response with long-term development goals.'
      ]
    },
    {
      num: '4',
      title: 'Capacity Building and Education',
      points: [
        'Provide education and training programs on climate change adaptation and sustainable practices.',
        'Strengthen local governance structures for effective resource management.',
        'Support youth and women-led initiatives for community resilience.'
      ]
    },
    {
      num: '5',
      title: 'Regional Cooperation and Policy Advocacy',
      points: [
        'Foster regional partnerships to address transboundary challenges like water management and migration.',
        'Advocate for global climate financing tailored to the needs of the Sahel.',
        'Promote knowledge sharing and innovation across borders.'
      ]
    }
  ];

  const implementationMechanisms = [
    {
      title: 'Community Engagement',
      points: [
        'Engage local leaders, women, and youth in planning and execution.',
        'Use participatory methods to ensure programs align with local priorities.'
      ]
    },
    {
      title: 'Monitoring and Evaluation',
      points: [
        'Develop robust indicators to measure progress in climate resilience, food security, and social equity.',
        'Regularly assess the impact of initiatives and adapt based on findings.'
      ]
    },
    {
      title: 'Funding and Resource Mobilization',
      points: [
        'Mobilize resources from international donors, private sector partners, and regional governments.',
        'Establish a transparent fund allocation system.'
      ]
    },
    {
      title: 'Partnerships and Advocacy',
      points: [
        'Build alliances with international organizations, research institutions, and NGOs.',
        'Advocate for policies that address systemic causes of vulnerability in the Sahel.'
      ]
    }
  ];

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
                To restore degraded Sahelian ecosystems, enhance food security for smallholder farming families, and build resilient, empower communities through sustainable land administration, education, and strategic partnerships.
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

      {/* Policy & Humanitarian Framework */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
            Policy Framework
          </span>
          <h2 className="font-display font-bold text-3xl text-sahel-dark">
            Humanitarian &amp; Policy Guidelines
          </h2>
          <p className="text-sm sm:text-base text-sahel-dark/70 max-w-3xl mx-auto leading-relaxed">
            The Sahel region faces acute challenges exacerbated by climate change, including food insecurity, resource scarcity, and displacement. This policy framework is designed to guide the implementation of initiatives aimed at addressing these challenges while promoting human dignity, equity, and sustainability. It reflects core humanitarian values and principles to ensure that development efforts are inclusive, participatory, and effective.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 bg-sahel-light p-1.5 rounded-2xl border border-sahel-border max-w-2xl mx-auto">
          <button
            onClick={() => setActivePolicyTab('principles')}
            className={`px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-smooth cursor-pointer ${
              activePolicyTab === 'principles'
                ? 'bg-primary text-white shadow-md'
                : 'text-sahel-dark/70 hover:text-primary hover:bg-primary/5'
            }`}
          >
            Values &amp; Principles
          </button>
          <button
            onClick={() => setActivePolicyTab('objectives')}
            className={`px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-smooth cursor-pointer ${
              activePolicyTab === 'objectives'
                ? 'bg-primary text-white shadow-md'
                : 'text-sahel-dark/70 hover:text-primary hover:bg-primary/5'
            }`}
          >
            Policy Objectives
          </button>
          <button
            onClick={() => setActivePolicyTab('implementation')}
            className={`px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-smooth cursor-pointer ${
              activePolicyTab === 'implementation'
                ? 'bg-primary text-white shadow-md'
                : 'text-sahel-dark/70 hover:text-primary hover:bg-primary/5'
            }`}
          >
            Implementation
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activePolicyTab === 'principles' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {policyValues.map((val, idx) => (
                <div key={idx} className="bg-white border border-sahel-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-smooth space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="bg-primary/10 text-primary font-mono font-bold text-sm w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                      0{val.num}
                    </span>
                    <h4 className="font-display font-bold text-base text-sahel-dark">{val.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-sahel-dark/70 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activePolicyTab === 'objectives' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {policyObjectives.map((obj, idx) => (
                <div key={idx} className="bg-white border border-sahel-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-smooth space-y-4">
                  <div className="flex items-center space-x-3 border-b border-sahel-border pb-3">
                    <span className="bg-accent/20 text-sahel-dark font-mono font-bold text-sm w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                      0{obj.num}
                    </span>
                    <h4 className="font-display font-bold text-sm sm:text-base text-sahel-dark leading-tight">{obj.title}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {obj.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start text-xs sm:text-sm text-sahel-dark/70 leading-relaxed">
                        <span className="text-primary mr-2 shrink-0 mt-1">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activePolicyTab === 'implementation' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              {implementationMechanisms.map((mech, idx) => (
                <div key={idx} className="bg-white border border-sahel-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-smooth space-y-4">
                  <h4 className="font-display font-bold text-base text-sahel-dark border-b border-sahel-border pb-2">
                    {mech.title}
                  </h4>
                  <ul className="space-y-3">
                    {mech.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start text-xs sm:text-sm text-sahel-dark/70 leading-relaxed">
                        <span className="text-primary mr-2 shrink-0 mt-1">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Commitment Banner */}
        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 sm:p-10 text-center space-y-4 max-w-4xl mx-auto shadow-sm">
          <div className="bg-primary/10 text-primary w-10 h-10 rounded-xl flex items-center justify-center mx-auto">
            <AlertCircle size={20} />
          </div>
          <h3 className="font-display font-bold text-lg text-sahel-dark">Commitment to Continuous Learning</h3>
          <p className="text-sm text-sahel-dark/80 max-w-2xl mx-auto leading-relaxed">
            The Sahel Climate Change &amp; Food Security Development Initiative is committed to learning from successes and failures, adapting to emerging challenges, and ensuring the dignity, safety, and well-being of all people in the Sahel region.
          </p>
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
