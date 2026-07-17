import React, { useState } from 'react';
import { Heart, Handshake, Briefcase, ChevronRight, Award, CheckCircle, Copy } from 'lucide-react';

const GetInvolved = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("1013505278");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    setPartnerSubmitted(true);
  };

  const donationTiers = [
    { amount: 6, label: 'Plant 10 Trees', desc: 'Covers nursery and watering costs for ten indigenous seedlings.' },
    { amount: 15, label: 'Farmer Toolkit', desc: 'Provides hermetic storage bags and crop support training for one smallholder.' },
    { amount: 25, label: 'Community Seminar', desc: 'Funds a dry-season water preservation training class for 20 farmers.' },
    { amount: 30, label: 'Woodlot Setup', desc: 'Helps plant a community shelterbelt row to stabilize boundary soil.' }
  ];

  const jobs = [
    {
      title: 'Field Agronomist (Arid Agriculture)',
      type: 'Full-time | Yobe Field Office (Potiskum)',
      desc: 'Supervise tree nurseries, execute compost workshops, and advise smallholders on dry-season irrigation tactics.',
    },
    {
      title: 'Community Engagement Officer',
      type: 'Full-time | Bauchi HQ Office',
      desc: 'Coordinate relationships with local LGA committees, traditional emirs, and regional partner NGOs.',
    },
    {
      title: 'Nursery Assistant (Volunteer)',
      type: 'Volunteer | Potiskum Field Office',
      desc: 'Support the seedling cultivation cycle, seed gathering, and local community distribution logistics.',
    }
  ];

  return (
    <div className="space-y-24 py-16 pb-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
          Join Our Mission
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-sahel-dark">
          Get Involved
        </h1>
        <p className="text-sm sm:text-base text-sahel-dark/70 max-w-2xl mx-auto">
          Whether you represent an agency looking to partner, an individual seeking job openings, or a donor wanting to fund restoration, we welcome your support.
        </p>
      </section>

      {/* Donation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-sahel-border shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Donation Calculator Info */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-8">
            <div className="space-y-3">
              <span className="bg-primary/10 text-primary font-semibold text-xs tracking-wider uppercase px-3 py-1 rounded-full">
                Financial Support
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-sahel-dark">Direct Funding Widget</h2>
              <p className="text-sm sm:text-base text-sahel-dark/70">Select a donation tier to fund critical field nurseries, farmer support materials, and ecological training kits in Yobe and Bauchi States.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {donationTiers.map((tier) => (
                <button
                  key={tier.amount}
                  onClick={() => {
                    setDonationAmount(tier.amount);
                    setCustomAmount('');
                  }}
                  className={`p-5 rounded-2xl border text-left transition-smooth flex flex-col justify-between h-36 ${
                    donationAmount === tier.amount && !customAmount
                      ? 'border-primary bg-primary/5 ring-2 ring-primary'
                      : 'border-sahel-border hover:border-primary/50 bg-white'
                  }`}
                >
                  <span className="font-display font-bold text-2xl text-primary">${tier.amount}</span>
                  <div>
                    <span className="font-bold text-sm text-sahel-dark block mb-1">{tier.label}</span>
                    <span className="text-xs text-sahel-dark/60 leading-tight block">{tier.desc}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="flex items-center space-x-4 bg-sahel-light p-4 rounded-2xl border border-sahel-border">
              <span className="text-sm font-semibold text-sahel-dark shrink-0">Custom Amount:</span>
              <div className="relative w-full">
                <span className="absolute left-3 top-2.5 text-sahel-dark/50">$</span>
                <input
                  type="number"
                  placeholder="Enter custom dollars"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setDonationAmount(Number(e.target.value));
                  }}
                  className="w-full bg-white px-8 py-2.5 rounded-xl border border-sahel-border focus:outline-none focus:border-primary text-sm"
                />
              </div>
            </div>

          </div>

          {/* Donation Actions checkout */}
          <div className="lg:col-span-5 bg-sahel-dark text-white p-8 sm:p-12 flex flex-col justify-between border-t-8 lg:border-t-0 lg:border-l-8 border-accent space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center">
                  <Heart size={24} className="text-accent" />
                </div>
                {/* Tabs */}
                <div className="flex space-x-1 bg-white/5 p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-smooth ${
                      paymentMethod === 'card'
                        ? 'bg-accent text-sahel-dark shadow-sm'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Card
                  </button>
                  <button
                    onClick={() => setPaymentMethod('transfer')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-smooth ${
                      paymentMethod === 'transfer'
                        ? 'bg-accent text-sahel-dark shadow-sm'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Bank Transfer
                  </button>
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl">Summary of Support</h3>

              {paymentMethod === 'card' ? (
                <div className="space-y-6">
                  <div className="border-y border-white/10 py-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/60 text-sm">Donation Amount:</span>
                      <span className="font-bold text-accent">${donationAmount || 0}.00 USD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60 text-sm">Allocation:</span>
                      <span className="font-medium text-white/90">Potiskum Field Operations</span>
                    </div>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    All donations are processed securely. Sahel Restoration is a registered non-profit. Donor reports are sent annually.
                  </p>
                  <button
                    onClick={() => alert(`Thank you for supporting with $${donationAmount}. This checkout is simulated.`)}
                    className="w-full bg-accent hover:bg-accent/90 text-sahel-dark font-bold py-4 rounded-xl transition-smooth shadow-lg text-sm text-center active:scale-95"
                  >
                    Complete Donation
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] text-accent font-bold uppercase tracking-wider block">Bank Name</span>
                      <span className="font-display font-semibold text-lg text-white">Keystone Bank</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-accent font-bold uppercase tracking-wider block">Account Number</span>
                      <div className="flex items-center justify-between bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                        <span className="font-mono font-bold text-base tracking-wider text-white">1013505278</span>
                        <button
                          onClick={handleCopy}
                          className="text-accent hover:text-white transition-smooth p-1 rounded-lg hover:bg-white/10 cursor-pointer"
                          title="Copy Account Number"
                        >
                          {copied ? <CheckCircle size={16} className="text-emerald-400" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-accent font-bold uppercase tracking-wider block">Account Name</span>
                      <span className="font-sans font-medium text-xs text-white/90 leading-tight block">
                        Sahel Climate Change and Food Security Development Initiative
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-white/80 leading-relaxed">
                    Please use the reference <strong className="text-accent">SCCFSDI-DONATE</strong> or your name when transferring, and send the receipt to <strong className="text-accent">sahelccfsdi@gmail.com</strong>.
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Partner with us Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sahel-light rounded-3xl border border-sahel-border p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-primary/10 text-primary w-12 h-12 rounded-2xl flex items-center justify-center">
              <Handshake size={24} />
            </div>
            <h3 className="font-display font-bold text-2xl text-sahel-dark leading-tight">Partner With Us</h3>
            <p className="text-sm sm:text-base text-sahel-dark/75 leading-relaxed">
              We work alongside local government authorities, international agencies, research centers, and NGOs to synchronize regional reforestation and food defense campaigns.
            </p>
            <div className="space-y-3 pt-4 border-t border-sahel-border/60">
              <h5 className="font-bold text-sm text-sahel-dark">Collaborative Channels:</h5>
              <ul className="text-xs text-sahel-dark/70 space-y-2">
                <li className="flex items-center"><ChevronRight size={12} className="text-primary mr-1" /> Research &amp; Soil Diagnostics</li>
                <li className="flex items-center"><ChevronRight size={12} className="text-primary mr-1" /> Multi-Year Joint Grants &amp; Programs</li>
                <li className="flex items-center"><ChevronRight size={12} className="text-primary mr-1" /> LGA Farming Equipment Donations</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-sahel-border shadow-sm">
            {partnerSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
                <div className="bg-primary/10 text-primary p-4 rounded-full">
                  <CheckCircle size={32} />
                </div>
                <h4 className="font-display font-bold text-xl text-sahel-dark">Partnership Query Received</h4>
                <p className="text-sm text-sahel-dark/70 max-w-sm">
                  Thank you for submitting your partnership query. Our program director will respond within three business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-sahel-dark block">Organisation Name</label>
                    <input
                      type="text"
                      className="w-full bg-sahel-light px-4 py-2.5 rounded-xl border border-sahel-border focus:outline-none focus:border-primary text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-sahel-dark block">Contact Person</label>
                    <input
                      type="text"
                      className="w-full bg-sahel-light px-4 py-2.5 rounded-xl border border-sahel-border focus:outline-none focus:border-primary text-sm"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-sahel-dark block">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-sahel-light px-4 py-2.5 rounded-xl border border-sahel-border focus:outline-none focus:border-primary text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-sahel-dark block">Contact Phone</label>
                    <input
                      type="text"
                      className="w-full bg-sahel-light px-4 py-2.5 rounded-xl border border-sahel-border focus:outline-none focus:border-primary text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-sahel-dark block">Collaboration Description</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your agency's work and interest in collaborating with our Potiskum or Bauchi offices..."
                    className="w-full bg-sahel-light px-4 py-2.5 rounded-xl border border-sahel-border focus:outline-none focus:border-primary text-sm"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/95 text-white font-semibold py-3 rounded-xl transition-smooth shadow-md text-sm active:scale-95"
                >
                  Submit Query
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Careers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="bg-primary/10 text-primary w-12 h-12 rounded-2xl flex items-center justify-center mx-auto">
            <Briefcase size={24} />
          </div>
          <h2 className="font-display font-bold text-3xl text-sahel-dark">Careers &amp; Volunteering</h2>
          <p className="text-sm text-sahel-dark/70 max-w-xl mx-auto">
            Join a dedicated team of environmental coordinators, field trainers, and program officers working on the frontlines of conservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              className="bg-white border border-sahel-border rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-smooth"
            >
              <div className="space-y-3">
                <span className="text-[10px] text-primary font-bold uppercase tracking-wider block">{job.type}</span>
                <h4 className="font-display font-bold text-lg text-sahel-dark leading-tight">{job.title}</h4>
                <p className="text-xs sm:text-sm text-sahel-dark/70 leading-relaxed">{job.desc}</p>
              </div>
              <button 
                onClick={() => alert(`Application process for ${job.title} is simulated.`)}
                className="text-primary hover:text-secondary font-semibold text-xs tracking-wider uppercase flex items-center"
              >
                Apply Now <ChevronRight size={14} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default GetInvolved;
