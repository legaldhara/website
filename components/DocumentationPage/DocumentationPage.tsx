'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Loader2,
  CheckCircle,
  FileText,
  Phone,
  Clock,
  Zap,
  Lock,
  Shield,
  Award,
  Users,
  Search,
  ArrowRight,
  Building2,
  Home,
  Briefcase,
  Scale,
  Star,
  Timer,
  CheckCheck,
  SearchCheck,
} from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { secureApi } from '@/config/apiClient';



const categories = [
  {
    id: 'legal',
    name: 'Legal & Compliance Documents',
    icon: Scale,
    color: 'from-red-500 to-red-600',
    documents: [
      {
        name: 'No Objection Certificate (NOC)',
        desc: 'Written declaration stating no objection to specified activity, transaction, or arrangement from concerned party.',
        turnaround: 'Instant',
        price: 'Free',
        popular: true,
      },
      {
        name: 'Legal Notice',
        desc: 'Formal written communication demanding action or compensation before initiating legal proceedings, establishing intent.',
        turnaround: '2-3 Days',
        price: '₹1,499',
        popular: false,
      },
      {
        name: 'Affidavit',
        desc: 'A sworn written statement made under oath before an authorized official, used for legal declarations in court or administrative proceedings.',
        turnaround: '1-2 Days',
        // price: 'Disclose',
        popular: true,
      },
      {
        name: 'Power of Attorney',
        desc: 'Legal authorization allowing one person to act on behalf of another in financial, legal, or medical matters with specified scope and duration.',
        turnaround: 'Instant',
        price: '₹499',
        popular: true,
      },
      {
        name: 'Reply to Legal Notice',
        desc: 'Formal response to legal notice addressing allegations, presenting counter-arguments, and proposing resolution.',
        turnaround: '2-3 Days',
        price: '₹1,299',
        popular: false,
      },
      {
        name: 'Indemnity Bond',
        desc: 'Legal undertaking to compensate for loss or damage, protecting one party from liability for specified actions.',
        turnaround: '1-2 Days',
        price: '₹799',
        popular: false,
      },
      {
        name: 'Undertaking',
        desc: 'Written promise to perform or refrain from action, creating legal obligation enforceable by concerned party.',
        turnaround: 'Instant',
        price: '₹299',
        popular: false,
      },
      {
        name: 'Consumer Complaint',
        desc: 'Formal grievance against defective goods or deficient services filed with consumer forum for resolution and compensation.',
        turnaround: '2-3 Days',
        price: '₹999',
        popular: false,
      },
      {
        name: 'Settlement Agreement',
        desc: 'Mutual resolution contract ending dispute through negotiated terms, avoiding litigation with binding commitments.',
        turnaround: '3-5 Days',
        price: '₹1,799',
        popular: false,
      },
      {
        name: 'Promissory Note',
        desc: 'Written promise to pay specific amount on demand or at fixed future date, negotiable financial instrument.',
        turnaround: '1-2 Days',
        price: '₹599',
        popular: false,
      },
    ],
  },
  {
    id: 'personal',
    name: 'Personal & Family Documents',
    icon: Home,
    color: 'from-blue-500 to-blue-600',
    documents: [
      
      {
        name: 'Will & Testament',
        desc: 'Legal document specifying how your assets and property should be distributed after death, ensuring your wishes are legally honored.',
        turnaround: '2-3 Days',
        price: '₹999',
        popular: false,
      },
      {
        name: 'Gift Deed',
        desc: 'Legal document for voluntary transfer of property ownership from donor to donee without monetary consideration, commonly used for family transfers.',
        turnaround: '3-5 Days',
        price: '₹1,499',
        popular: false,
      },
      {
        name: 'Legal Heir Certificate',
        desc: 'Official government document identifying legal heirs of a deceased person, essential for claiming assets, insurance, and property rights.',
        turnaround: '7-15 Days',
        price: '₹799',
        popular: false,
      },
      {
        name: 'Marriage Certificate',
        desc: 'Official registration document proving legal marriage, required for passport, visa, property rights, and various legal proceedings.',
        turnaround: '10-20 Days',
        price: '₹1,999',
        popular: false,
      },
      {
        name: 'Divorce Agreement',
        desc: 'Mutual consent divorce settlement outlining custody, alimony, property division, and other terms agreed upon by both parties.',
        turnaround: '5-7 Days',
        price: '₹2,499',
        popular: false,
      },
      {
        name: 'Adoption Deed',
        desc: 'Legal document formalizing the adoption of a child, establishing parental rights and responsibilities under applicable laws.',
        turnaround: '7-10 Days',
        price: '₹1,999',
        popular: false,
      },
    ],
  },
  {
    id: 'property',
    name: 'Real Estate & Property Documents',
    icon: Building2,
    color: 'from-green-500 to-green-600',
    documents: [
      {
        name: 'Rental Agreement',
        desc: 'Comprehensive tenancy contract between landlord and tenant defining rent, duration, security deposit, maintenance, and termination terms.',
        turnaround: 'Instant',
        price: 'Free',
        popular: true,
      },
      {
        name: 'Commercial Lease Agreement',
        desc: 'Business property rental contract with specific clauses for commercial use, utilities, modifications, and business operations.',
        turnaround: '1-2 Days',
        price: '₹799',
        popular: false,
      },
      {
        name: 'Sale Deed',
        desc: 'Primary legal document for permanent transfer of immovable property ownership, registered with sub-registrar for legal validity.',
        turnaround: '5-7 Days',
        price: '₹2,999',
        popular: true,
      },
      {
        name: 'Property Agreement',
        desc: 'Initial agreement to sell property outlining terms, conditions, advance payment, and timeline before executing final sale deed.',
        turnaround: '2-3 Days',
        price: '₹1,499',
        popular: false,
      },
      {
        name: 'Rental Tenant Notice',
        desc: 'Formal legal notice for lease termination, eviction, rent increase, or breach of terms with proper notice period as per law.',
        turnaround: 'Instant',
        price: '₹299',
        popular: false,
      },
      {
        name: 'Leave & License Agreement',
        desc: 'Agreement granting temporary right to occupy property without creating landlord-tenant relationship, commonly used in Mumbai.',
        turnaround: '1-2 Days',
        price: '₹999',
        popular: false,
      },
      {
        name: 'Property Sale Agreement',
        desc: 'Detailed contract specifying all sale conditions, payment schedule, possession date, and obligations before property transfer.',
        turnaround: '3-5 Days',
        price: '₹1,799',
        popular: false,
      },
      {
        name: 'Mortgage Deed',
        desc: 'Legal document creating security interest in property for loan, defining rights of mortgagor and mortgagee until debt repayment.',
        turnaround: '3-4 Days',
        price: '₹1,999',
        popular: false,
      },
    ],
  },
  {
    id: 'business',
    name: 'Business & Corporate Documents',
    icon: Briefcase,
    color: 'from-purple-500 to-purple-600',
    documents: [
      {
        name: 'Non-Disclosure Agreement (NDA)',
        desc: 'Confidentiality contract protecting sensitive business information shared during negotiations, partnerships, or employment.',
        turnaround: 'Instant',
        price: 'Free',
        popular: true,
      },
      {
        name: 'Partnership Deed',
        desc: 'Foundational agreement among business partners defining capital contribution, profit sharing, roles, and dispute resolution.',
        turnaround: '2-3 Days',
        price: '₹1,499',
        popular: true,
      },
      {
        name: 'Service Level Agreement (SLA)',
        desc: 'Contract establishing measurable service standards, response times, deliverables, and penalties between provider and client.',
        turnaround: '2-3 Days',
        price: '₹1,299',
        popular: false,
      },
      {
        name: 'Shareholders Agreement',
        desc: 'Comprehensive contract among company shareholders defining rights, voting, dividend policy, share transfer, and exit strategies.',
        turnaround: '3-5 Days',
        price: '₹2,499',
        popular: false,
      },
      {
        name: 'Founders Agreement',
        desc: 'Critical startup document clarifying equity distribution, roles, vesting schedules, intellectual property, and exit scenarios.',
        turnaround: '3-5 Days',
        price: '₹2,999',
        popular: true,
      },
      {
        name: 'Franchise Agreement',
        desc: 'Detailed contract granting franchisee rights to operate business using franchisor\'s brand, system, and support.',
        turnaround: '5-7 Days',
        price: '₹3,499',
        popular: false,
      },
      {
        name: 'Joint Venture Agreement',
        desc: 'Partnership contract for specific business project defining contributions, profit sharing, management, and completion terms.',
        turnaround: '4-6 Days',
        price: '₹2,799',
        popular: false,
      },
      {
        name: 'Vendor Agreement',
        desc: 'Contract with suppliers specifying goods/services, quality standards, pricing, payment terms, delivery schedules, and warranties.',
        turnaround: '2-3 Days',
        price: '₹999',
        popular: false,
      },
      {
        name: 'Master Service Agreement (MSA)',
        desc: 'Base contract establishing general terms for future work orders, simplifying subsequent project agreements.',
        turnaround: '3-4 Days',
        price: '₹1,799',
        popular: false,
      },
      {
        name: 'Memorandum of Understanding (MOU)',
        desc: 'Preliminary agreement outlining understanding between parties before formal contract, showing intent to collaborate.',
        turnaround: '1-2 Days',
        price: '₹799',
        popular: false,
      },
    ],
  },
  {
    id: 'employment',
    name: 'Employment & HR Documents',
    icon: Users,
    color: 'from-orange-500 to-orange-600',
    documents: [
      {
        name: 'Employment Contract',
        desc: 'Comprehensive agreement defining job role, compensation, benefits, working hours, confidentiality, and employment terms.',
        turnaround: 'Instant',
        price: 'Free',
        popular: true,
      },
      {
        name: 'Offer Letter',
        desc: 'Formal job offer document specifying position, salary, joining date, probation, and conditions pending acceptance.',
        turnaround: 'Instant',
        price: 'Free',
        popular: true,
      },
      {
        name: 'Appointment Letter',
        desc: 'Official employment confirmation after acceptance, detailing finalized terms, reporting structure, and employment commencement.',
        turnaround: 'Instant',
        price: 'Free',
        popular: true,
      },
      {
        name: 'Experience Letter',
        desc: 'Formal certificate issued by employer confirming employment duration, designation, performance, and character assessment.',
        turnaround: 'Instant',
        price: 'Free',
        popular: false,
      },
      {
        name: 'Relieving Letter',
        desc: 'Document confirming employee resignation acceptance, relieving from duties, clearing dues, and maintaining good standing.',
        turnaround: 'Instant',
        price: 'Free',
        popular: false,
      },
      {
        name: 'Resignation Letter',
        desc: 'Formal notification of intent to leave employment, specifying notice period, last working day, and transition cooperation.',
        turnaround: 'Instant',
        price: 'Free',
        popular: false,
      },
      {
        name: 'Non-Compete Agreement',
        desc: 'Contract restricting employee from joining competitors or starting competing business for specified period and geography.',
        turnaround: '1-2 Days',
        price: '₹699',
        popular: false,
      },
      {
        name: 'Salary Slip Format',
        desc: 'Monthly payment statement showing earnings, deductions, tax withholdings, and net pay for employee records.',
        turnaround: 'Instant',
        price: 'Free',
        popular: false,
      },
      {
        name: 'Internship Agreement',
        desc: 'Contract for internship program defining duration, stipend, learning objectives, confidentiality, and evaluation criteria.',
        turnaround: '1-2 Days',
        price: '₹499',
        popular: false,
      },
    ],
  },
  
  {
    id: 'certificates',
    name: 'Certificates & Government Documents',
    icon: Award,
    color: 'from-teal-500 to-teal-600',
    documents: [
      {
        name: 'Income Certificate',
        desc: 'Official government certificate verifying annual income, required for scholarships, subsidies, and reservation benefits.',
        turnaround: '10-15 Days',
        price: '₹799',
        popular: false,
      },
      {
        name: 'Domicile Certificate',
        desc: 'Residence proof certificate issued by government confirming permanent residency in specific state or district.',
        turnaround: '15-30 Days',
        price: '₹999',
        popular: false,
      },
      {
        name: 'Caste Certificate',
        desc: 'Official document verifying caste/category for availing reservation benefits in education and employment.',
        turnaround: '15-30 Days',
        price: '₹999',
        popular: false,
      },
      {
        name: 'Bonafide Certificate',
        desc: 'Genuine student/employee certificate issued by institution confirming enrollment or employment for official purposes.',
        turnaround: '3-5 Days',
        price: '₹299',
        popular: false,
      },
      {
        name: 'Character Certificate',
        desc: 'Testimonial document certifying good moral character and conduct issued by police, employer, or educational institution.',
        turnaround: '7-15 Days',
        price: '₹599',
        popular: false,
      },
      {
        name: 'Birth Certificate',
        desc: 'Official registration of birth issued by municipal authority, essential identity and age proof document.',
        turnaround: '7-30 Days',
        price: '₹499',
        popular: false,
      },
      {
        name: 'Death Certificate',
        desc: 'Legal document recording death issued by local authority, required for claiming insurance, property, and legal succession.',
        turnaround: '7-15 Days',
        price: '₹499',
        popular: false,
      },
    ],
  },
];

const features = [
  {
    icon: Award,
    title: 'Drafted by Legal Experts',
    description: 'Every document is professionally crafted by experienced lawyers with deep expertise in Indian law.',
  },
  {
    icon: Zap,
    title: 'Instant to 30-Day Delivery',
    description: 'Get simple documents instantly. Complex documents delivered within 3-30 days with expert review.',
  },
  {
    icon: Lock,
    title: 'Bank-Grade Security',
    description: 'Your sensitive information is encrypted and protected with enterprise-level security protocols.',
  },
  {
    icon: Shield,
    title: '100% Legal Compliance',
    description: 'All documents comply with latest Indian laws, regulations, and court-approved formats.',
  },
  {
    icon: Phone,
    title: 'Expert Consultation',
    description: 'Get free callback from our legal experts to discuss your requirements and clarify doubts.',
  },
  {
    icon: CheckCircle,
    title: 'Unlimited Revisions',
    description: 'We refine your document until it perfectly matches your requirements at no extra cost.',
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Startup Founder',
    content: 'Got my Founders Agreement drafted within 3 days. The expert consultation helped me understand every clause. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Property Owner',
    content: 'Needed a rental agreement urgently. Downloaded instantly and it was perfect! Saved me time and money.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Business Owner',
    content: 'Professional service for my Partnership Deed. The legal team was very responsive and made necessary customizations.',
    rating: 5,
  },
];

export default function DocumentationPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    document: "",
    description: "",
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('personal');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await secureApi.post(`/api/v1/certificate/user/create`, {
        fullName: formData.name,
        email: formData.email,
        description: formData.description,
        phone: `+91${formData.phone}`,
        subject: formData.document,
      });
      
      if (res.data.success) {
        toast.success("Your query has been submitted successfully !");
        setFormData({
          name: "",
          phone: "",
          email: "",
          document: "",
          description: "",
        });
      } else {
        toast.error("❌ Something went wrong. Please try again.");
      }
    } catch {
      toast.error("⚠️ Unable to submit. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    documents: category.documents.filter((doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  const selectedCategoryData = filteredCategories.find((cat) => cat.id === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
       
       {/* Document Categories */}
      <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-5">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mb-2">
        Browse Our Document Library
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        100+ professionally drafted legal documents across 6 major categories
      </p>

      {/* Search */}
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for a document..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#BC9139] focus:border-transparent text-base"
          />
        </div>
      </div>
    </motion.div>

    {/* Category Tabs */}
    <div className="flex overflow-x-auto gap-3 mb-10 pb-3 custom-scrollbar">
      {categories.map((category) => {
        const Icon = category.icon;
        const active = selectedCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center px-5 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
              active
                ? 'bg-gradient-to-r from-[#BC9139] to-[#E7E2D8] text-[#111111] shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Icon className="h-4 w-4 mr-2" />
            {category.name}
          </button>
        );
      })}
    </div>

    {/* Documents Grid */}
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.35 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {selectedCategoryData?.documents.map((doc, i) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: i * 0.05 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-[#BC9139] relative group"
          >
            {doc.popular && (
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2.5 py-1 rounded-full text-[10px] font-semibold shadow-md flex items-center">
                <Star className="h-3 w-3 mr-1" /> Popular
              </div>
            )}

            <div className="mb-3">
              <h3 className="text-lg font-semibold text-[#111111] mb-2 group-hover:text-[#BC9139] transition-colors">
                {doc.name}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    doc.turnaround === 'Instant'
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'bg-blue-100 text-blue-700 border border-blue-200'
                  }`}
                >
                  {doc.turnaround === 'Instant' ? (
                    <Zap className="h-3 w-3 mr-1" />
                  ) : (
                    <Clock className="h-3 w-3 mr-1" />
                  )}
                  {doc.turnaround}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[70px]">
              {doc.desc}
            </p>

            <Link
              href="#FormSection"
              className="w-full bg-gradient-to-r from-[#111111] to-[#252525] text-white py-2.5 rounded-lg font-medium hover:from-[#252525] hover:to-[#111111] flex items-center justify-center transition-all"
            >
              Get This Document
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>

    {/* Empty State */}
    {selectedCategoryData?.documents.length === 0 && (
      <div className="text-center py-10">
        <FileText className="h-14 w-14 text-gray-300 mx-auto mb-3" />
        <p className="text-gray-500 text-base">
          No documents found matching your search.
        </p>
      </div>
    )}
  </div>
      </section>


{/* How it works */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <h2 className="text-3xl md:text-5xl font-semibold text-[#111111] mb-2">
        How It Works
      </h2>
      <p className="text-lg text-gray-600">
        Get your legal documents in 3 simple steps
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
      {/* Connection Line */}
      <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-[#BC9139] to-[#E7E2D8]" />

      {[
        {
          step: "01",
          icon: FileText,
          title: "Choose Your Document",
          description:
            "Browse through 100+ legal documents across 6 categories. Select the one that matches your needs.",
        },
        {
          step: "02",
          icon: Phone,
          title: "Fill Form & Get Callback",
          description:
            "Provide your details and document requirements. Our expert will contact you within 2 hours.",
        },
        {
          step: "03",
          icon: CheckCheck,
          title: "Receive Your Document",
          description:
            "Instant download for simple docs or customized ones within 1–30 days based on complexity.",
        },
      ].map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border hover:border-[#BC9139]/70">
              <div className="absolute -top-5 left-6 bg-gradient-to-br from-[#111111] to-[#252525] text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shadow-md">
                {step.step}
              </div>
              <div className="flex justify-center mb-4 mt-3">
                <div className="bg-gradient-to-br from-[#BC9139] to-[#E7E2D8] p-4 rounded-xl">
                  <Icon className="w-8 h-8 text-[#111111]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#111111] mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
      className="mt-10 bg-gradient-to-r from-[#111111] to-[#252525] rounded-2xl p-6 md:p-8 text-center"
    >
      <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
        <div className="flex items-center text-white text-sm md:text-base">
          <Timer className="h-5 w-5 text-[#BC9139] mr-2" />
          <span className="font-medium">Instant Downloads Available</span>
        </div>
        <div className="flex items-center text-white text-sm md:text-base">
          <Clock className="h-5 w-5 text-[#BC9139] mr-2" />
          <span className="font-medium">Complex Docs: 1–30 Days</span>
        </div>
      </div>
      <p className="text-[#E7E2D8] text-sm md:text-base max-w-3xl mx-auto">
        Simple documents like NDAs, rental agreements, and employment letters are available for instant download. Complex
        documents requiring customization are delivered within 1–30 days after expert consultation.
      </p>
    </motion.div>
  </div>
</section>


      {/* Hero Section */}
  <section
      id="FormSection"
      className="relative overflow-hidden bg-gradient-to-br from-[#111111] via-[#252525] to-[#111111] py-10 md:py-12"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#BC9139] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E7E2D8] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-[#BC9139]/20 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 text-[#BC9139] mr-1.5" />
              <span className="text-[#E7E2D8] font-medium text-xs">
                Trusted by 15,000+ Clients
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3 leading-tight">
              Professional Legal Documents in Minutes
            </h1>

            <p className="text-base text-gray-300 mb-4 leading-relaxed">
              Access 100+ expertly drafted legal documents for business, property,
              employment, and personal needs. Instant downloads or expert
              customization available.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center text-white text-sm">
                <CheckCircle className="h-4 w-4 text-[#BC9139] mr-2 flex-shrink-0" />
                <span>Free Documents Available</span>
              </div>
              <div className="flex items-center text-white text-sm">
                <CheckCircle className="h-4 w-4 text-[#BC9139] mr-2 flex-shrink-0" />
                <span>Expert Legal Support</span>
              </div>
              <div className="flex items-center text-white text-sm">
                <CheckCircle className="h-4 w-4 text-[#BC9139] mr-2 flex-shrink-0" />
                <span>100% Legally Valid</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-5 md:p-6">
  <div className="text-center mb-3 sm:mb-4">
    <h3 className="text-base sm:text-lg font-semibold text-[#111111] mb-0.5">
      Get Your Document
    </h3>
    <p className="text-gray-600 text-xs">
      Fill the form & get a callback from our legal experts
    </p>
  </div>

  <form onSubmit={handleSubmit} className="space-y-3">
    {/* Name */}
    <div>
      <label
        htmlFor="name"
        className="block text-xs font-semibold text-[#111111] mb-1"
      >
        Full Name *
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your full name"
        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BC9139] focus:border-transparent transition-all"
        required
        minLength={2}
      />
    </div>

    {/* Phone */}
    <div>
      <label
        htmlFor="phone"
        className="block text-xs font-semibold text-[#111111] mb-1"
      >
        Phone Number *
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="+91 XXXXX XXXXX"
        pattern="[0-9]{10}"
        title="Please enter a valid 10-digit phone number"
        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BC9139] focus:border-transparent transition-all"
        required
        maxLength={10}
      />
      <p className="text-xs text-gray-500 mt-1">Enter 10-digit mobile number</p>
    </div>

    {/* Email */}
    <div>
      <label
        htmlFor="email"
        className="block text-xs font-semibold text-[#111111] mb-1"
      >
        Email Address *
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your.email@example.com"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        title="Please enter a valid email address"
        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BC9139] focus:border-transparent transition-all"
        required
      />
    </div>

    {/* Document Required */}
    <div>
      <label
        htmlFor="document"
        className="block text-xs font-semibold text-[#111111] mb-1"
      >
        Document Required *
      </label>
      <select
        id="document"
        name="document"
        value={formData.document}
        onChange={handleChange}
        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BC9139] focus:border-transparent transition-all"
        required
      >
        <option value="">Select a document type</option>
        {categories.map((category) =>
          category.documents.map((doc) => (
            <option key={doc.name} value={doc.name}>
              {doc.name}
            </option>
          ))
        )}
      </select>
    </div>

    {/* Description */}
    <div>
      <label
        htmlFor="description"
        className="block text-xs font-semibold text-[#111111] mb-1"
      >
        Description *
      </label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Briefly describe your requirement..."
        rows={2}
        minLength={10}
        maxLength={500}
        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BC9139] focus:border-transparent transition-all resize-none"
        required
      />
      <p className="text-xs text-gray-500 mt-1">
        {formData.description.length}/500 characters
      </p>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-gradient-to-r from-[#BC9139] to-[#E7E2D8] hover:from-[#BC9139] hover:to-[#BC9139] text-[#111111] font-semibold py-2.5 text-sm rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          Submitting...
        </>
      ) : (
        <>
          Get Free Consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </button>
  </form>

  <p className="text-center text-xs text-gray-500 mt-3">
    Our legal expert will call you back within 2 hours
  </p>
</div>
        </div>
      </div>
    </section>
     

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="max-w-6xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <h2 className="text-4xl font-semibold text-[#111111] mb-3">
        Why Choose Our Service
      </h2>
      <p className="text-lg text-gray-600">
        Trusted by thousands of businesses and individuals across India
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map(({ icon: Icon, title, description }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-transparent hover:border-[#BC9139] transition-all"
        >
          <div className="bg-gradient-to-br from-[#BC9139] to-[#E7E2D8] p-3 rounded-xl inline-block mb-5 group-hover:scale-110 transition-transform">
            <Icon className="w-7 h-7 text-[#111111]" />
          </div>
          <h3 className="text-lg font-semibold text-[#111111] mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </motion.div>
      ))}
    </div>
  </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from satisfied customers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-2 border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#BC9139] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#111111]">{testimonial.name}</p>
                  {/* <p className="text-sm text-gray-600">{testimonial.role}</p> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#111111] via-[#252525] to-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#BC9139] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E7E2D8] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Ready to Get Your Legal Document?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join 15,000+ satisfied clients who trust us for their legal documentation needs. 
              Get started today with a free consultation from our legal experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link
  href="#FormSection" 
  className="px-10 py-4 bg-gradient-to-r from-[#BC9139] to-[#E7E2D8] text-[#111111] font-semibold rounded-xl hover:shadow-2xl transition-all text-lg flex items-center"
>
  Get Free Consultation
  <Phone className="ml-2 h-5 w-5" />
</Link>

<Link
  href="/contact"
  className="px-10 py-4 bg-white bg-opacity-10 text-white font-semibold rounded-xl hover:bg-opacity-20 transition-all text-lg border-2 border-white flex items-center"
>
  Browse Documents
  <SearchCheck className="ml-2 h-5 w-5" />
</Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-[#E7E2D8]">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Free Documents Available</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Expert Legal Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>100% Secure & Confidential</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Are the documents legally valid?',
                a: 'Yes, all our documents are drafted by experienced lawyers and comply with Indian laws and regulations. They are court-approved formats and legally binding.',
              },
              {
                q: 'How quickly can I get my document?',
                a: 'Simple documents are available for instant download. Complex documents requiring customization are delivered within 1-30 days based on complexity after expert consultation.',
              },
              {
                q: 'Do I get expert consultation?',
                a: 'Yes! After filling the form, our legal expert will call you within 2 hours to understand your requirements and guide you through the process.',
              },
              {
                q: 'Can I get revisions if needed?',
                a: 'Absolutely! We offer unlimited revisions to ensure the document perfectly matches your requirements at no extra cost.',
              },
              {
                q: 'Is my information secure?',
                a: 'Yes, your information is protected with bank-grade encryption and enterprise-level security. We maintain strict confidentiality.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-[#111111] mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
