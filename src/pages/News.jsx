import React from 'react';
import { Calendar, FileText, ArrowRight, Download, BookOpen } from 'lucide-react';

const News = () => {
  const articles = [
    {
      title: 'Restoration Milestone: 5,000 Seedlings Planted in Potiskum LGA',
      excerpt: 'Local farming associations partner with Sahel Restoration to plant indigenous trees, securing soil moisture and protecting local water sources.',
      date: 'July 2, 2026',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600',
      category: 'Restoration',
      author: 'Ecosystem Team'
    },
    {
      title: 'Climate Adaptation Seminars Conclude in Bauchi State',
      excerpt: 'Over 40 community leaders complete intensive adaptive land management courses, gaining skills to implement sustainable soil health tactics.',
      date: 'June 18, 2026',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600',
      category: 'Empowerment',
      author: 'Training Lead'
    },
    {
      title: 'Apex Organisation Model Boosts Potiskum Farmer Incomes',
      excerpt: 'Smallholder agricultural collectives report a 25% average income increase during the dry-season crop harvest using shared logistics.',
      date: 'May 29, 2026',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600',
      category: 'Livelihoods',
      author: 'Livelihood Director'
    },
    {
      title: 'New Grass Nursery Opens to Combat Soil Erosion',
      excerpt: 'We have launched a grass seedbed multiplication facility in northern Yobe State, providing fast-growing cover crops to fix vulnerable borders.',
      date: 'May 12, 2026',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600',
      category: 'Restoration',
      author: 'Nursery Supervisor'
    }
  ];

  const publications = [
    {
      title: 'Annual Program Report 2025',
      type: 'Technical Report | PDF (2.4 MB)',
      desc: 'Comprehensive summary of reforestation hectares, stats, financial records, and community training outcomes.',
      date: 'January 2026'
    },
    {
      title: 'Sahel Climate Adaptation Manual v1.0',
      type: 'Field Guidelines | PDF (4.8 MB)',
      desc: 'Practical, step-by-step guidebook on dry-season irrigation, organic compost setups, and windbreak design.',
      date: 'September 2025'
    },
    {
      title: 'The Apex Organisation Model Case Study',
      type: 'Policy Brief | PDF (1.1 MB)',
      desc: 'Analysis of smallholder cooperative aggregation structures implemented in Potiskum LGA.',
      date: 'June 2025'
    }
  ];

  return (
    <div className="space-y-24 py-16 pb-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
          Field Bulletin
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-sahel-dark">
          News &amp; Resources
        </h1>
        <p className="text-sm sm:text-base text-sahel-dark/70 max-w-2xl mx-auto">
          Read our latest field reports, study publications, and download scientific manuals and policy briefs.
        </p>
      </section>

      {/* Blog/Updates Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <h2 className="font-display font-bold text-2xl text-sahel-dark border-b border-sahel-border pb-4">
          Latest Field News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((news, index) => (
            <article 
              key={index} 
              className="bg-white rounded-3xl border border-sahel-border shadow-sm overflow-hidden flex flex-col md:flex-row h-full group hover:shadow-md transition-smooth"
            >
              <div className="md:w-2/5 relative aspect-video md:aspect-auto">
                <img
                  src={news.image}
                  alt={news.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-smooth"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md">
                  {news.category}
                </span>
              </div>
              <div className="md:w-3/5 p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center text-[10px] sm:text-xs text-sahel-dark/50 font-medium">
                    <Calendar size={14} className="mr-2" />
                    <span>{news.date}</span>
                    <span className="mx-2">•</span>
                    <span>By {news.author}</span>
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-sahel-dark hover:text-primary transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sahel-dark/70 line-clamp-3 leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>
                <div className="pt-6">
                  <button 
                    onClick={() => alert(`Full article content is simulated.`)}
                    className="text-primary hover:text-secondary font-semibold text-xs tracking-wider uppercase flex items-center"
                  >
                    Read Full Story <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Publications / Downloadable PDFs */}
      <section className="bg-sahel-light border-y border-sahel-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center md:text-left space-y-2">
            <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
              Publications Library
            </span>
            <h2 className="font-display font-bold text-2xl text-sahel-dark">Reports &amp; Documentation</h2>
            <p className="text-sm text-sahel-dark/70 max-w-xl">
              Download our peer-reviewed briefs, technical restoration guides, and programmatic reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-6 border border-sahel-border flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-smooth"
              >
                <div className="space-y-4">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-2xl flex items-center justify-center">
                    <FileText size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] text-primary font-bold uppercase tracking-wider block mb-1">{pub.type}</span>
                    <h4 className="font-display font-bold text-base sm:text-lg text-sahel-dark leading-snug">{pub.title}</h4>
                    <span className="text-[10px] text-sahel-dark/50 block mt-1">Published: {pub.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-sahel-dark/70 leading-relaxed">
                    {pub.desc}
                  </p>
                </div>
                <button
                  onClick={() => alert(`Starting download for ${pub.title} (simulated).`)}
                  className="w-full bg-sahel-light hover:bg-primary hover:text-white text-sahel-dark font-semibold py-3 rounded-xl transition-smooth flex items-center justify-center space-x-2 text-xs border border-sahel-border"
                >
                  <Download size={14} />
                  <span>Download Publication</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default News;
