import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building, Clock, Navigation } from 'lucide-react';

const Map = () => {
  const [selectedOffice, setSelectedOffice] = useState('yobe');

  const offices = {
    hq: {
      name: 'Bauchi Headquarters (HQ)',
      role: 'Central Administrative Hub',
      address: 'No. 12 Gombe Road, Bauchi, Bauchi State, Nigeria',
      phone: '+234 (0) 803 123 4567',
      email: 'hq@sahelrestoration.org',
      hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
      coordinates: { x: 55, y: 40 },
    },
    yobe: {
      name: 'Yobe Anchor Field Office',
      role: 'Community Engagement & Reforestation Hub',
      address: 'Near LGA Secretariat, Potiskum, Yobe State, Nigeria',
      phone: '+234 (0) 803 987 6543',
      email: 'yobe.field@sahelrestoration.org',
      hours: 'Mon - Sat: 7:30 AM - 4:30 PM',
      coordinates: { x: 68, y: 25 },
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-[var(--color-sahel-border)] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
      
      {/* Map Interactive SVG Section */}
      <div className="lg:col-span-7 bg-[#F0ECE3] p-8 flex flex-col justify-between relative min-h-[400px]">
        
        {/* Map Header */}
        <div className="z-10">
          <span className="bg-primary/10 text-primary font-semibold text-xs tracking-wider uppercase px-3 py-1 rounded-full">
            Interactive Operational Map
          </span>
          <h3 className="font-display font-bold text-xl mt-2 text-sahel-dark">Northern Nigeria Focus Area</h3>
          <p className="text-sm text-sahel-dark/70">Click on the pins to view field office status and details.</p>
        </div>

        {/* The Nigeria Map SVG */}
        <div className="w-full h-full flex items-center justify-center py-6">
          <svg 
            viewBox="0 0 100 80" 
            className="w-full max-w-[500px] h-auto drop-shadow-md text-sahel-dark/20"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outline of Nigeria (Stylized Path) */}
            <path 
              d="M 5,35 
                 C 5,20 15,10 35,10 
                 C 45,10 50,5 65,5 
                 C 80,5 95,15 95,30 
                 C 95,45 90,50 85,55 
                 C 82,58 80,75 70,75 
                 C 65,75 62,70 55,70 
                 C 45,70 42,75 35,75 
                 C 25,75 20,70 15,70 
                 C 10,70 5,55 5,50 Z" 
              fill="#E6E2D8" 
              stroke="#D2C8B4" 
              strokeWidth="0.75" 
            />

            {/* Northern Nigeria Highlighted Region */}
            <path 
              d="M 5,35 
                 C 5,20 15,10 35,10 
                 C 45,10 50,5 65,5 
                 C 80,5 95,15 95,30 
                 C 95,35 85,38 75,38 
                 C 60,38 50,45 35,45 
                 C 20,45 10,38 5,35 Z" 
              fill="#E3A53C" 
              fillOpacity="0.12" 
              stroke="#E3A53C" 
              strokeWidth="0.5" 
              strokeDasharray="1,1" 
            />

            {/* Region Label */}
            <text x="35" y="20" className="text-[4px] font-display font-semibold fill-secondary/40 tracking-wider">
              SAHEL &amp; SAVANNA ZONE
            </text>

            {/* Bauchi HQ Location Dot & Interactive Pin */}
            <g 
              onClick={() => setSelectedOffice('hq')} 
              className="cursor-pointer group"
            >
              {/* Bauchi State Border Highlight */}
              <circle cx="55" cy="40" r="10" fill="#4A7C59" fillOpacity="0.08" className="transition-all duration-300 group-hover:scale-125" />
              {/* Pulsing ring */}
              <circle cx="55" cy="40" r="4" fill="none" stroke="#4A7C59" strokeWidth="0.5" className="animate-ping" />
              {/* Solid pin core */}
              <circle 
                cx="55" 
                cy="40" 
                r="2.5" 
                fill={selectedOffice === 'hq' ? '#E3A53C' : '#4A7C59'} 
                stroke="#FFF" 
                strokeWidth="0.5"
                className="transition-colors duration-300"
              />
              <text x="47" y="47" className="text-[3px] font-sans font-bold fill-sahel-dark">Bauchi (HQ)</text>
            </g>

            {/* Yobe Field Office Location Dot & Interactive Pin */}
            <g 
              onClick={() => setSelectedOffice('yobe')} 
              className="cursor-pointer group"
            >
              {/* Yobe State Border Highlight */}
              <circle cx="68" cy="25" r="10" fill="#4A7C59" fillOpacity="0.08" className="transition-all duration-300 group-hover:scale-125" />
              {/* Pulsing ring */}
              <circle cx="68" cy="25" r="4" fill="none" stroke="#4A7C59" strokeWidth="0.5" className="animate-ping" />
              {/* Solid pin core */}
              <circle 
                cx="68" 
                cy="25" 
                r="2.5" 
                fill={selectedOffice === 'yobe' ? '#E3A53C' : '#4A7C59'} 
                stroke="#FFF" 
                strokeWidth="0.5"
                className="transition-colors duration-300"
              />
              <text x="63" y="19" className="text-[3px] font-sans font-bold fill-sahel-dark">Potiskum (Yobe Office)</text>
            </g>
          </svg>
        </div>

        {/* Legend */}
        <div className="flex space-x-6 text-xs text-sahel-dark/60 font-medium">
          <div className="flex items-center">
            <span className="w-2.5 h-2.5 bg-accent rounded-full mr-2"></span> Active Offices
          </div>
          <div className="flex items-center">
            <span className="w-2.5 h-2.5 bg-accent/20 border border-dashed border-accent rounded-full mr-2"></span> Reforestation &amp; Food Sec. Focus Area
          </div>
        </div>

      </div>

      {/* Office Details Panel */}
      <div className="lg:col-span-5 bg-sahel-dark text-white p-8 flex flex-col justify-between">
        <div>
          <span className="text-accent text-xs font-semibold tracking-wider uppercase block mb-2">
            Office Details
          </span>
          <h4 className="font-display font-bold text-2xl mb-6">
            {offices[selectedOffice].name}
          </h4>
          
          <div className="space-y-6">
            
            {/* Role / Description */}
            <div className="flex items-start">
              <Building className="text-accent mr-4 shrink-0 mt-1" size={20} />
              <div>
                <span className="text-xs text-white/50 block">Operational Role</span>
                <span className="text-sm font-medium">{offices[selectedOffice].role}</span>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start">
              <Navigation className="text-accent mr-4 shrink-0 mt-1" size={20} />
              <div>
                <span className="text-xs text-white/50 block">Address</span>
                <span className="text-sm">{offices[selectedOffice].address}</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <Phone className="text-accent mr-4 shrink-0 mt-1" size={20} />
              <div>
                <span className="text-xs text-white/50 block">Phone</span>
                <a href={`tel:${offices[selectedOffice].phone}`} className="text-sm hover:underline hover:text-accent transition-smooth">
                  {offices[selectedOffice].phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <Mail className="text-accent mr-4 shrink-0 mt-1" size={20} />
              <div>
                <span className="text-xs text-white/50 block">Email Address</span>
                <a href={`mailto:${offices[selectedOffice].email}`} className="text-sm hover:underline hover:text-accent transition-smooth">
                  {offices[selectedOffice].email}
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start">
              <Clock className="text-accent mr-4 shrink-0 mt-1" size={20} />
              <div>
                <span className="text-xs text-white/50 block">Working Hours</span>
                <span className="text-sm">{offices[selectedOffice].hours}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Panel Footer Action */}
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
          <span className="text-xs text-white/50">Click other location on map to switch.</span>
          <button 
            onClick={() => alert(`Directions to ${offices[selectedOffice].name} are simulated.`)}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-smooth"
          >
            Get Directions
          </button>
        </div>

      </div>

    </div>
  );
};

export default Map;
