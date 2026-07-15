import React from 'react';
import { Users, User, ArrowDown, ChevronRight, Shield, Award, Briefcase, Landmark } from 'lucide-react';

const Organogram = () => {
  const departments = [
    {
      name: 'Ecosystem Restoration',
      lead: 'Director of Environmental Programs',
      duties: ['Reforestation sites management', 'Soil conservation programs', 'Arid zone forestry research'],
      icon: Award,
    },
    {
      name: 'Community Empowerment',
      lead: 'Head of Social Development',
      duties: ['Climate adaptation trainings', 'Gender-responsive programs', 'Youth training programs'],
      icon: Users,
    },
    {
      name: 'Food Security & Livelihoods',
      lead: 'Director of Agriculture',
      duties: ['Apex Organisation model oversight', 'Smallholder farmer credit schemes', 'Market access linkages'],
      icon: Briefcase,
    },
    {
      name: 'Policy Advocacy & Comms',
      lead: 'Director of Public Policy',
      duties: ['Government advocacy', 'Regional policies reviews', 'Field reports & newsletters'],
      icon: Landmark,
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-3xl border border-[var(--color-sahel-border)] p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-6 border-b border-sahel-border">
        <div>
          <h3 className="font-display font-bold text-xl text-sahel-dark">Organizational Structure</h3>
          <p className="text-sm text-sahel-dark/75">Our governance framework ensuring accountability and field-level impact.</p>
        </div>
        <button 
          onClick={handlePrint}
          className="mt-4 sm:mt-0 bg-primary hover:bg-primary/95 text-white font-semibold px-5 py-2.5 rounded-xl transition-smooth text-sm shadow-md print:hidden"
        >
          Print Structure
        </button>
      </div>

      <div className="flex flex-col items-center">
        {/* Tier 1: Board & Executive Director */}
        <div className="flex flex-col items-center w-full max-w-sm">
          <div className="bg-sahel-dark text-white rounded-2xl p-5 w-full text-center border-b-4 border-accent shadow-md">
            <span className="text-[10px] uppercase font-bold text-accent tracking-wider block mb-1">Executive Board</span>
            <h4 className="font-display font-bold text-lg">Executive Director</h4>
            <p className="text-xs text-white/70 mt-1">Strategic Vision &amp; International Relations</p>
          </div>
          
          <div className="flex flex-col items-center py-4">
            <ArrowDown className="text-primary" size={24} />
          </div>
        </div>

        {/* Tier 2: Country Administrator / Head of Program */}
        <div className="flex flex-col items-center w-full max-w-sm">
          <div className="bg-primary text-white rounded-2xl p-5 w-full text-center border-b-4 border-accent shadow-md">
            <span className="text-[10px] uppercase font-bold text-accent tracking-wider block mb-1">Operations Command</span>
            <h4 className="font-display font-bold text-lg">Country Administrator / Head of Program</h4>
            <p className="text-xs text-white/70 mt-1">Field Operations, Monitoring &amp; Partner Coordination</p>
          </div>

          <div className="flex flex-col items-center py-4">
            <ArrowDown className="text-primary" size={24} />
          </div>
        </div>

        {/* Horizontal Connector Line for Departments */}
        <div className="hidden lg:block w-3/4 h-0.5 bg-primary/30 relative">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"></div>
        </div>

        {/* Tier 3: Departments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-6">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <div 
                key={index} 
                className="bg-sahel-light rounded-2xl p-5 border border-sahel-border hover:border-primary/50 transition-smooth relative flex flex-col justify-between shadow-sm group hover:shadow-md"
              >
                {/* Visual anchor line for large screens */}
                <div className="hidden lg:block absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-primary/30"></div>
                
                <div>
                  <div className="bg-primary/10 text-primary w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h5 className="font-display font-bold text-base text-sahel-dark mb-1">{dept.name}</h5>
                  <span className="text-xs text-secondary font-medium block mb-4">{dept.lead}</span>
                  
                  <ul className="space-y-2 border-t border-sahel-border/60 pt-3">
                    {dept.duties.map((duty, dIdx) => (
                      <li key={dIdx} className="text-xs text-sahel-dark/70 flex items-start">
                        <ChevronRight size={12} className="text-primary mr-1 shrink-0 mt-0.5" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Organogram;
