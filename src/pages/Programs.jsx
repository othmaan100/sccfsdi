import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Users, Leaf, Award, ShieldAlert, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

const Programs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabParam = searchParams.get('tab') || 'community';
  const [activeTab, setActiveTab] = useState(activeTabParam);

  useEffect(() => {
    setActiveTab(activeTabParam);
  }, [activeTabParam]);

  const handleTabChange = (tabId) => {
    setSearchParams({ tab: tabId });
    setActiveTab(tabId);
  };

  const tabs = [
    { id: 'community', name: 'Climate Adaptation Training', icon: Users },
    { id: 'reforestation', name: 'Reforestation & Ecosystems', icon: Leaf },
    { id: 'food', name: 'Food Security & Livelihoods', icon: Award },
    { id: 'policy', name: 'Policy Advocacy & Comms', icon: ShieldAlert },
  ];

  const programDetails = {
    community: {
      title: 'Climate Adaptation Training',
      subtitle: 'Building capacity for sustainable land and resource management.',
      description: 'We deliver structured educational programs that equip local populations and farming communities in Northern Nigeria with the skills necessary to adapt to changing seasonal patterns, secure local ecosystems, and maximize resource efficiency.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
      keyInvolved: [
        {
          title: 'Dry-Season Crop Management',
          description: 'Instruction on micro-irrigation and planting heat-tolerant crop species to maintain year-round harvests.'
        },
        {
          title: 'Soil Nutrient Restoration',
          description: 'Training on organic composting and crop-rotation systems to naturally rebuild degraded soils.'
        },
        {
          title: 'Water Collection Systems',
          description: 'Teaching communities how to design and maintain localized rain-harvesting and conservation arrays.'
        }
      ],
      projectExample: {
        location: 'Potiskum LGA, Yobe State',
        metric: '450+ farmers certified in 2025',
        details: 'Our quarterly Climate Adaptation Training seminars brought together local farmer groups for hands-on soil health courses. Participants successfully established three communal composting sites, producing over 15 tons of organic compost to enrich surrounding farm plots.'
      }
    },
    reforestation: {
      title: 'Reforestation & Ecosystem Restoration',
      subtitle: 'Reversing desertification and rebuilding biological defenses.',
      description: 'Our ecosystem restoration program focuses on planting native, drought-resistant tree species to establish protective shelterbelts, arrest sand dune movement, and reclaim degraded forest reserves across Yobe and surrounding states.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
      keyInvolved: [
        {
          title: 'Shelterbelt Forestry',
          description: 'Planting windbreak rows of Acacia, Neem, and Moringa to shield crops from harsh desert winds.'
        },
        {
          title: 'Sand Dune Stabilization',
          description: 'Using indigenous grasses and root networks to anchor shifting sand dunes threatening rural villages.'
        },
        {
          title: 'Community Woodlots',
          description: 'Establishing controlled community woodlots for sustainable firewood harvesting, preventing illegal logging.'
        }
      ],
      projectExample: {
        location: 'Yobe-Bauchi Border Zones',
        metric: '120 hectares restored',
        details: 'Working in partnership with local forestry departments, we introduced a sustainable land-reclaiming framework. By planting over 12,000 native saplings, we stabilized critical sand borders and restored bird and animal ecosystems to lands previously declared barren.'
      }
    },
    food: {
      title: 'Food Security & Livelihoods',
      subtitle: 'Strengthening agricultural supply chains and smallholder income.',
      description: 'We support smallholder farmers by optimizing local supply chains, providing high-quality seeds, and introducing the Apex Organisation model to aggregate farming power and ensure fair market access.',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=800',
      keyInvolved: [
        {
          title: 'The Apex Organisation Model',
          description: 'Aggregating local farming cooperatives under a centralized management structure for collective purchase power and transport.'
        },
        {
          title: 'Post-Harvest Loss Prevention',
          description: 'Providing training and hermetic storage bags to protect grain and dry crops from pests and moisture.'
        },
        {
          title: 'Market Pricing Portals',
          description: 'Connecting farmers to real-time market data, ensuring they negotiate fair sale prices and bypass exploitative middle-men.'
        }
      ],
      projectExample: {
        location: 'Potiskum Field Office Operations',
        metric: '18 farmer cooperatives aggregated',
        details: 'Through the Apex Organisation model, we helped establish a collective agricultural hub. The hub provided smallholders with shared transport to larger trade centers, increasing the average sale price of sorghum and beans by 30% and eliminating transport waste.'
      }
    },
    policy: {
      title: 'Policy Advocacy & Communications',
      subtitle: 'Advocating for sustainable land administration and environmental policies.',
      description: 'We translate grassroots ecological challenges into actionable policy directives, engaging local government authorities (LGAs), traditional emirs, and state ministries to enforce land-use regulations and protect communal forests.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800',
      keyInvolved: [
        {
          title: 'Community Town Hall Assemblies',
          description: 'Organizing forums to align traditional rulers and farmers on grazing and land boundaries.'
        },
        {
          title: 'LGA Legislative Briefs',
          description: 'Providing local councils with technical reports detailing soil erosion rates to justify conservation zoning.'
        },
        {
          title: 'Regional Environmental Campaigns',
          description: 'Broadcasting climate adaptation bulletins via local radio and leaflets to spread smart farming strategies.'
        }
      ],
      projectExample: {
        location: 'Bauchi & Yobe Regional Councils',
        metric: '2 local policy briefs adopted',
        details: 'We drafted and presented a policy brief on sustainable grazing boundaries to the Potiskum LGA council. The brief was successfully incorporated into local zoning bylaws, protecting 40 hectares of newly reforested community reserve from premature cattle grazing.'
      }
    }
  };

  const activeContent = programDetails[activeTab];

  return (
    <div className="space-y-16 py-16 pb-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
          What We Do
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-sahel-dark">
          Our Programs &amp; Initiatives
        </h1>
        <p className="text-sm sm:text-base text-sahel-dark/70 max-w-2xl mx-auto">
          Explore our four key focus areas, detailing our field methodologies and active projects in Northern Nigeria.
        </p>
      </section>

      {/* Tabs Control */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 border-b border-sahel-border pb-2 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl text-sm font-semibold whitespace-nowrap transition-smooth shrink-0 ${
                  isTabActive
                    ? 'text-primary bg-primary/10 border-b-4 border-primary'
                    : 'text-sahel-dark/70 hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Icon size={18} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Tab Content Display */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-accent uppercase tracking-wider block">Program Overview</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-sahel-dark">{activeContent.title}</h2>
              <p className="text-primary font-medium text-sm sm:text-base">{activeContent.subtitle}</p>
              <p className="text-sahel-dark/80 text-sm sm:text-base leading-relaxed mt-4">{activeContent.description}</p>
            </div>

            {/* Program Activities */}
            <div className="space-y-6">
              <h3 className="font-display font-bold text-lg text-sahel-dark border-b border-sahel-border pb-3">Core Activities</h3>
              <div className="grid grid-cols-1 gap-4">
                {activeContent.keyInvolved.map((activity, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-5 border border-sahel-border flex items-start space-x-4 shadow-sm hover:shadow-md transition-smooth">
                    <div className="bg-primary/10 text-primary p-2.5 rounded-xl shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-sahel-dark mb-1">{activity.title}</h4>
                      <p className="text-xs sm:text-sm text-sahel-dark/70 leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar / Field Examples & Graphic */}
          <div className="lg:col-span-5 space-y-8">
            {/* Visual Header Image */}
            <div className="aspect-video rounded-3xl overflow-hidden border border-sahel-border shadow-md">
              <img 
                src={activeContent.image} 
                alt={activeContent.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Real Project Example Box */}
            <div className="bg-sahel-dark text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg border-b-8 border-accent">
              <div>
                <span className="text-accent text-[10px] font-bold uppercase tracking-wider block mb-1">Field Success Story</span>
                <h4 className="font-display font-bold text-lg">Project Spotlight</h4>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-white/40 text-xs block">Operational Site</span>
                  <span className="font-semibold text-white/95">{activeContent.projectExample.location}</span>
                </div>
                <div>
                  <span className="text-white/40 text-xs block">Verified Milestone</span>
                  <span className="font-semibold text-accent">{activeContent.projectExample.metric}</span>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed pt-2 border-t border-white/10">
                  {activeContent.projectExample.details}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Programs;
