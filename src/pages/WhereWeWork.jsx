import React from 'react';
import Map from '../components/UI/Map';
import { Shield, Sparkles, MapPin, Clock, Phone } from 'lucide-react';

const WhereWeWork = () => {
  return (
    <div className="space-y-16 py-16 pb-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
          Geography of Impact
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-sahel-dark">
          Where We Work
        </h1>
        <p className="text-sm sm:text-base text-sahel-dark/70 max-w-2xl mx-auto">
          Our operations focus on the semi-arid Sahelian belt of Northern Nigeria. Discover our active field installations and headquarters.
        </p>
      </section>

      {/* Main Map Interactive Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Map />
      </section>

      {/* Operational Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
        <div className="space-y-4">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-sahel-dark">Why Yobe and Bauchi States?</h3>
          <p className="text-sm sm:text-base text-sahel-dark/80 leading-relaxed">
            The Sahel and Savanna borders in Northern Nigeria are frontline territories facing rapid desertification. Shifting sand dunes, declining annual rainfall, and soil erosion place extreme pressure on rural farming communities.
          </p>
          <p className="text-sm sm:text-base text-sahel-dark/80 leading-relaxed">
            By establishing our anchor office in Potiskum, Yobe State, we place our restoration teams directly at the center of the transition zone. This location enables rapid response, close collaboration with local government authorities, and direct daily interaction with farmer cooperatives.
          </p>
        </div>

        <div className="space-y-6 bg-primary/5 rounded-3xl p-6 sm:p-8 border border-primary/10">
          <h4 className="font-display font-bold text-lg text-primary">Field Operations Infrastructure</h4>
          
          <ul className="space-y-4">
            <li className="flex items-start text-sm text-sahel-dark/80">
              <span className="bg-primary/20 text-primary w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 text-xs font-bold">1</span>
              <div>
                <strong>Central Nursery (Potiskum):</strong> Produces over 20,000 indigenous tree seedlings annually, including Neem, Acacia, and Tamarind, optimized for dry conditions.
              </div>
            </li>
            <li className="flex items-start text-sm text-sahel-dark/80">
              <span className="bg-primary/20 text-primary w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 text-xs font-bold">2</span>
              <div>
                <strong>Farmer Support Center:</strong> Serves as the distribution point for hermetic storage bags, compost training supplies, and adaptive farming toolkits.
              </div>
            </li>
            <li className="flex items-start text-sm text-sahel-dark/80">
              <span className="bg-primary/20 text-primary w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 text-xs font-bold">3</span>
              <div>
                <strong>Community Training Hall:</strong> Houses workshops, legislative review sessions, and cooperative meetings for the Apex Organisation network.
              </div>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default WhereWeWork;
