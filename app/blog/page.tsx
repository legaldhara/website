"use client"
import { useState } from 'react';
import { Calendar, User, ArrowRight, ArrowLeft, Scale, FileText, Briefcase, BookOpen, TrendingUp } from 'lucide-react';
import { blogData } from '@/lib/blogData';
// Static blog data


const categories = ["All", "Trademark", "Taxation", "Company Registration", "Licensing", "Patent"];

const BlogListingPage = ({ onBlogSelect }: any) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredBlogs = selectedCategory === "All" 
    ? blogData 
    : blogData.filter(blog => blog.category === selectedCategory);

  const getCategoryIcon = (category: any) => {
    switch(category) {
      case "Trademark": return <Scale className="w-4 h-4" />;
      case "Taxation": return <FileText className="w-4 h-4" />;
      case "Company Registration": return <Briefcase className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-[#111111] text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-[#252525] opacity-90"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#BC9139]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BC9139]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#BC9139]/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <BookOpen className="w-5 h-5 text-[#BC9139]" />
            <span className="text-[#BC9139] font-semibold text-sm">Knowledge Hub</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Legal Insights & <span className="text-[#BC9139]">Updates</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Stay informed with expert articles on trademark, taxation, company registration, and more
          </p>
          <div className="flex items-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#BC9139]" />
              <span className="text-gray-300">Weekly Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#BC9139]" />
              <span className="text-gray-300">Expert Authors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all font-medium ${
                  selectedCategory === category
                    ? 'bg-[#BC9139] text-[#111111] shadow-lg shadow-[#BC9139]/30 scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-[#BC9139]/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map(blog => (
            <article 
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-100"
              onClick={() => onBlogSelect(blog)}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#BC9139] text-[#111111] px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    {getCategoryIcon(blog.category)}
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-[#BC9139] transition-colors line-clamp-2 leading-snug">
                  {blog.title}
                </h2>
                
                <p className="text-gray-600 mb-5 line-clamp-2 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-5 pb-5 border-b border-gray-100">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {blog.date}
                  </span>
                  <span className="font-medium">{blog.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-8 h-8 bg-[#BC9139]/10 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-[#BC9139]" />
                    </div>
                    <span className="font-medium">{blog.author}</span>
                  </span>
                  <span className="text-[#BC9139] flex items-center gap-1.5 font-bold text-sm group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogDetailPage = ({ blog, onBack }: any) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-[450px] md:h-[550px] overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-[#111111]/40" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={onBack}
              className="group flex items-center gap-2 text-white hover:text-[#BC9139] mb-6 transition-all bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Blogs</span>
            </button>
            
            <span className="inline-flex items-center gap-2 bg-[#BC9139] text-[#111111] px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Scale className="w-4 h-4" />
              {blog.category}
            </span>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-200">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <User className="w-5 h-5 text-[#BC9139]" />
                <span className="font-medium">{blog.author}</span>
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-[#BC9139]" />
                <span className="font-medium">{blog.date}</span>
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full font-medium">{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-[#111111] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-[#BC9139] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-[#111111] rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-4">Need Professional Assistance?</h3>
          <p className="text-gray-300 mb-6">
            Our legal experts are here to help you with all your {blog.category.toLowerCase()} needs. 
            Get personalized guidance and ensure complete compliance.
          </p>
          <button className="bg-[#BC9139] text-[#111111] px-6 py-3 rounded-lg font-semibold hover:bg-[#BC9139] transition-colors">
            Contact Our Experts
          </button>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[#111111] mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogData
              .filter(b => b.id !== blog.id && b.category === blog.category)
              .slice(0, 2)
              .map(relatedBlog => (
                <div 
                  key={relatedBlog.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <h4 className="font-bold text-[#111111] mb-2 hover:text-[#BC9139] transition-colors">
                    {relatedBlog.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedBlog.excerpt}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div>
      {selectedBlog ? (
        <BlogDetailPage 
          blog={selectedBlog} 
          onBack={() => setSelectedBlog(null)} 
        />
      ) : (
        <BlogListingPage onBlogSelect={setSelectedBlog} />
      )}
    </div>
  );
}
