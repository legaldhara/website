"use client"

import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Search, Info, XCircle, Sparkles, ArrowRight, BookOpen, Target, Zap, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const trademarkClasses = [
  {
    classNumber: 1,
    name: "Chemicals",
    description:
      "Chemicals used in industry, science and photography, as well as in agriculture, horticulture and forestry; unprocessed artificial resins, unprocessed plastics; manures; fire extinguishing compositions; tempering and soldering preparations; chemical substances for preserving foodstuffs; tanning substances; adhesives used in industry; salt for preserving other than for foodstuffs.",
    keywords: [
      "chemicals",
      "industrial chemicals",
      "agricultural chemicals",
      "fertilizers",
      "plastics",
      "resins",
      "adhesives",
      "fire extinguishers",
      "tanning",
      "food preservation",
    ],
  },
  {
    classNumber: 2,
    name: "Paints",
    description:
      "Paints, varnishes, lacquers; rust preservatives and preparations against the deterioration of wood; colorants, dyes; inks for printing, marking and engraving; natural resins in raw state; metals in foil and powder form for use in painting, decorating, printing and art.",
    keywords: [
      "paints",
      "varnishes",
      "lacquers",
      "dyes",
      "inks",
      "colorants",
      "rust preservatives",
      "wood preservatives",
      "art materials",
      "printing inks",
    ],
  },
  {
    classNumber: 3,
    name: "Cosmetics and Cleaning Preparations",
    description:
      "Non-medicated cosmetics and toiletry preparations; non-medicated dentifrices; perfumery, essential oils; bleaching preparations and other substances for laundry use; cleaning, polishing, scouring and abrasive preparations.",
    keywords: [
      "cosmetics",
      "perfumes",
      "essential oils",
      "cleaning products",
      "soaps",
      "shampoos",
      "dentifrices",
      "bleach",
      "polishes",
      "abrasives",
      "beauty products",
    ],
  },
  {
    classNumber: 4,
    name: "Industrial Oils and Greases",
    description:
      "Industrial oils and greases, waxes; lubricants; dust absorbing, wetting and binding compositions; fuels and illuminants; candles and wicks for lighting.",
    keywords: [
      "industrial oils",
      "greases",
      "lubricants",
      "waxes",
      "fuels",
      "candles",
      "illuminants",
      "dust absorbing",
      "wetting agents",
    ],
  },
  {
    classNumber: 5,
    name: "Pharmaceuticals",
    description:
      "Pharmaceuticals, medical and veterinary preparations; sanitary preparations for medical purposes; dietetic food and substances adapted for medical or veterinary use, food for babies; plasters, materials for dressings; material for stopping teeth, dental wax; disinfectants; preparations for destroying vermin; fungicides, herbicides.",
    keywords: [
      "pharmaceuticals",
      "medicines",
      "drugs",
      "veterinary preparations",
      "sanitary products",
      "dietetic food",
      "baby food",
      "bandages",
      "disinfectants",
      "pesticides",
      "fungicides",
      "herbicides",
    ],
  },
  {
    classNumber: 6,
    name: "Common Metals and Their Alloys",
    description:
      "Common metals and their alloys, ores; materials of metal for railway tracks; non-electric cables and wires of common metal; ironmongery, small items of metal hardware; pipes and tubes of metal; safes; goods of common metal not included in other classes; ores.",
    keywords: [
      "metals",
      "alloys",
      "metal hardware",
      "pipes",
      "cables",
      "wires",
      "safes",
      "ironmongery",
      "metal goods",
      "ores",
    ],
  },
  {
    classNumber: 7,
    name: "Machines and Machine Tools",
    description:
      "Machines and machine tools; motors and engines (except for land vehicles); machine coupling and transmission components (except for land vehicles); agricultural implements other than hand-operated; incubators for eggs; automatic vending machines.",
    keywords: [
      "machines",
      "machine tools",
      "engines",
      "motors",
      "agricultural machinery",
      "vending machines",
      "robotics",
      "industrial equipment",
      "power tools",
    ],
  },
  {
    classNumber: 8,
    name: "Hand Tools and Implements",
    description: "Hand tools and implements (hand-operated); cutlery; side arms, other than firearms; razors.",
    keywords: ["hand tools", "cutlery", "knives", "razors", "hand-operated implements", "gardening tools"],
  },
  {
    classNumber: 9,
    name: "Scientific, Research, IT, and Electronic Apparatus",
    description:
      "Covers scientific, research, navigation, surveying, photographic, cinematographic, optical, weighing, measuring, signalling, checking (supervision), life-saving and teaching apparatus and instruments; apparatus and instruments for conducting, switching, transforming, accumulating, regulating or controlling electricity; apparatus for recording, transmission or reproduction of sound or images; magnetic data carriers, recording discs; compact discs, DVDs and other digital recording media; mechanisms for coin-operated apparatus; cash registers, calculating machines, data processing equipment, computers; computer software; fire-extinguishing apparatus. Essentially, software, electronics, and scientific instruments.",
    keywords: [
      "software",
      "app",
      "electronics",
      "computer",
      "IT",
      "scientific",
      "data",
      "digital",
      "AI",
      "tech",
      "mobile app",
      "web app",
      "hardware",
      "sensors",
      "cameras",
      "audio equipment",
      "video equipment",
      "data storage",
      "fire alarms",
      "security systems",
      "e-learning",
      "virtual reality",
    ],
  },
  {
    classNumber: 10,
    name: "Medical Apparatus",
    description:
      "Surgical, medical, dental and veterinary apparatus and instruments; artificial limbs, eyes and teeth; orthopedic articles; suture materials; therapeutic and assistive devices adapted for persons with disabilities; massage apparatus; apparatus, devices and articles for nursing infants; apparatus, devices and articles for sexual activity.",
    keywords: [
      "medical devices",
      "surgical instruments",
      "dental equipment",
      "veterinary instruments",
      "artificial limbs",
      "orthopedic articles",
      "suture materials",
      "therapy devices",
      "massage apparatus",
      "infant nursing",
      "sexual health devices",
    ],
  },
  {
    classNumber: 11,
    name: "Environmental Control Apparatus",
    description:
      "Apparatus for lighting, heating, steam generating, cooking, refrigerating, drying, ventilating, water supply and sanitary purposes.",
    keywords: [
      "lighting",
      "heating",
      "cooling",
      "refrigeration",
      "drying",
      "ventilation",
      "water filters",
      "sanitary installations",
      "cooking appliances",
      "air conditioning",
      "furnaces",
      "solar heaters",
    ],
  },
  {
    classNumber: 12,
    name: "Vehicles",
    description: "Vehicles; apparatus for locomotion by land, air or water.",
    keywords: [
      "vehicles",
      "cars",
      "trucks",
      "buses",
      "motorcycles",
      "bicycles",
      "aircraft",
      "boats",
      "drones",
      "electric vehicles",
      "parts for vehicles",
    ],
  },
  {
    classNumber: 13,
    name: "Firearms",
    description: "Firearms; ammunition and projectiles; explosives; fireworks.",
    keywords: ["firearms", "ammunition", "explosives", "fireworks", "weapons"],
  },
  {
    classNumber: 14,
    name: "Precious Metals and Jewelry",
    description:
      "Precious metals and their alloys; jewellery, precious and semi-precious stones; horological and chronometric instruments.",
    keywords: [
      "jewelry",
      "precious metals",
      "gold",
      "silver",
      "diamonds",
      "watches",
      "clocks",
      "gemstones",
      "ornaments",
    ],
  },
  {
    classNumber: 15,
    name: "Musical Instruments",
    description: "Musical instruments.",
    keywords: [
      "musical instruments",
      "guitars",
      "pianos",
      "drums",
      "violins",
      "flutes",
      "synthesizers",
      "music equipment",
    ],
  },
  {
    classNumber: 16,
    name: "Paper and Printed Matter",
    description:
      "Paper and cardboard; printed matter; bookbinding material; photographs; stationery and office requisites, except furniture; adhesives for stationery or household purposes; drawing materials and materials for artists; paintbrushes; instructional and teaching materials; plastic sheets, films and bags for wrapping and packaging; printers' type, printing blocks.",
    keywords: [
      "paper",
      "cardboard",
      "books",
      "magazines",
      "newspapers",
      "stationery",
      "office supplies",
      "adhesives",
      "art supplies",
      "teaching materials",
      "packaging materials",
      "printed matter",
      "photographs",
    ],
  },
  {
    classNumber: 17,
    name: "Rubber, Gutta-Percha, Gum, Asbestos, Mica and Substitutes Therefor",
    description:
      "Unprocessed and semi-processed rubber, gutta-percha, gum, asbestos, mica and substitutes for all these materials; plastics and resins in extruded form for use in manufacture; packing, stopping and insulating materials; flexible pipes, not of metal.",
    keywords: [
      "rubber",
      "plastics",
      "insulation",
      "packing materials",
      "sealing materials",
      "flexible pipes",
      "gutta-percha",
      "gum",
      "asbestos",
      "mica",
    ],
  },
  {
    classNumber: 18,
    name: "Leather and Imitations of Leather",
    description:
      "Leather and imitations of leather; animal skins and hides; luggage and carrying bags; umbrellas and parasols; walking sticks; whips, harness and saddlery; collars, leashes and clothing for animals.",
    keywords: [
      "leather",
      "bags",
      "luggage",
      "wallets",
      "umbrellas",
      "animal skins",
      "hides",
      "harness",
      "saddlery",
      "pet accessories",
    ],
  },
  {
    classNumber: 19,
    name: "Building Materials",
    description:
      "Materials, not of metal, for building and construction; non-metallic rigid pipes for building; asphalt, pitch, bitumen and tar; non-metallic transportable buildings; monuments, not of metal.",
    keywords: [
      "building materials",
      "construction materials",
      "non-metal pipes",
      "asphalt",
      "bitumen",
      "tar",
      "prefabricated buildings",
      "monuments",
    ],
  },
  {
    classNumber: 20,
    name: "Furniture",
    description:
      "Furniture, mirrors, picture frames; containers, not of metal, for storage or transport; unworked or semi-worked bone, horn, whalebone or mother-of-pearl; shells; meerschaum; yellow amber; pillows, mattresses, cushions, sleeping bags, bedding (except linen).",
    keywords: [
      "furniture",
      "mirrors",
      "picture frames",
      "storage containers",
      "pillows",
      "mattresses",
      "cushions",
      "bedding",
      "bone",
      "horn",
      "shells",
      "amber",
    ],
  },
  {
    classNumber: 21,
    name: "Household or Kitchen Utensils and Containers",
    description:
      "Household or kitchen utensils and containers; combs and sponges; brushes (except paintbrushes); brush-making materials; articles for cleaning purposes; unworked or semi-worked glass (except building glass); glassware, porcelain and earthenware.",
    keywords: [
      "kitchenware",
      "household utensils",
      "containers",
      "combs",
      "sponges",
      "brushes",
      "cleaning articles",
      "glassware",
      "porcelain",
      "earthenware",
      "cookware",
    ],
  },
  {
    classNumber: 22,
    name: "Ropes, String, Nets, Tents, Awnings, Tarpaulins, Sails, Sacks and Bags",
    description:
      "Ropes and string; nets; tents and tarpaulins; awnings of textile or synthetic materials; sails; sacks and bags for the transport or storage of materials in bulk; padding, stuffing and insulating materials (except of paper or cardboard, rubber or plastics); raw fibrous textile materials and substitutes therefor.",
    keywords: [
      "ropes",
      "nets",
      "tents",
      "tarpaulins",
      "sails",
      "sacks",
      "bags",
      "padding",
      "insulating materials",
      "fibrous materials",
      "camping gear",
    ],
  },
  {
    classNumber: 23,
    name: "Yarns and Threads for Textile Use",
    description: "Yarns and threads for textile use.",
    keywords: ["yarns", "threads", "textile materials", "fibers for textile use", "sewing threads"],
  },
  {
    classNumber: 24,
    name: "Textiles and Textile Goods",
    description: "Textiles and textile goods, not included in other classes; bed covers; table covers.",
    keywords: ["textiles", "fabrics", "bedding", "tablecloths", "curtains", "linens", "household textiles", "cloth"],
  },
  {
    classNumber: 25,
    name: "Clothing, Footwear, Headgear",
    description:
      "Covers all types of clothing, footwear, and headgear. Relevant for fashion brands, apparel manufacturers, and accessory designers.",
    keywords: [
      "clothing",
      "apparel",
      "fashion",
      "shoes",
      "hats",
      "garments",
      "footwear",
      "headgear",
      "boutique",
      "designer",
      "accessories",
      "uniforms",
      "sportswear",
    ],
  },
  {
    classNumber: 26,
    name: "Lace and Embroidery, Ribbons and Braid",
    description:
      "Lace and embroidery, ribbons and braid; buttons, hooks and eyes, pins and needles; artificial flowers; hair decorations; false hair.",
    keywords: [
      "lace",
      "embroidery",
      "ribbons",
      "braid",
      "buttons",
      "zippers",
      "pins",
      "needles",
      "artificial flowers",
      "hair accessories",
      "false hair",
    ],
  },
  {
    classNumber: 27,
    name: "Carpets, Rugs, Mats and Matting",
    description:
      "Carpets, rugs, mats and matting, linoleum and other materials for covering existing floors; wall hangings (non-textile).",
    keywords: ["carpets", "rugs", "mats", "flooring", "linoleum", "wall coverings", "tapestries"],
  },
  {
    classNumber: 28,
    name: "Games and Playthings",
    description:
      "Games and playthings; gymnastic and sporting articles not included in other classes; decorations for Christmas trees.",
    keywords: [
      "games",
      "toys",
      "playthings",
      "sporting goods",
      "gymnastic articles",
      "christmas decorations",
      "board games",
      "video games",
      "puzzles",
      "dolls",
    ],
  },
  {
    classNumber: 29,
    name: "Meat, Fish, Poultry and Game",
    description:
      "Meat, fish, poultry and game; meat extracts; preserved, frozen, dried and cooked fruits and vegetables; jellies, jams, compotes; eggs; milk, cheese, butter, yogurt and other milk products; oils and fats for food.",
    keywords: [
      "meat",
      "fish",
      "poultry",
      "game",
      "fruits",
      "vegetables",
      "dairy products",
      "milk",
      "cheese",
      "butter",
      "yogurt",
      "oils",
      "fats",
      "jams",
      "jellies",
      "preserved food",
      "frozen food",
    ],
  },
  {
    classNumber: 30,
    name: "Coffee, Tea, Cocoa and Artificial Coffee",
    description:
      "Coffee, tea, cocoa and artificial coffee; rice, pasta and noodles; tapioca and sago; flour and preparations made from cereals; bread, pastries and confectionery; chocolate; ice cream, sorbets and other edible ices; sugar, honey, treacle; yeast, baking-powder; salt, seasonings, spices, preserved herbs; vinegar, sauces and other condiments; ice (frozen water).",
    keywords: [
      "coffee",
      "tea",
      "cocoa",
      "rice",
      "pasta",
      "bread",
      "pastries",
      "chocolate",
      "ice cream",
      "sugar",
      "honey",
      "spices",
      "sauces",
      "condiments",
      "flour",
      "cereals",
      "bakery products",
    ],
  },
  {
    classNumber: 31,
    name: "Agricultural, Horticultural and Forestry Products",
    description:
      "Agricultural, horticultural and forestry products not included in other classes; live animals; fresh fruits and vegetables; seeds, natural plants and flowers; foodstuffs for animals; malt.",
    keywords: [
      "agricultural products",
      "horticultural products",
      "forestry products",
      "live animals",
      "fresh fruits",
      "fresh vegetables",
      "seeds",
      "plants",
      "flowers",
      "animal feed",
      "malt",
    ],
  },
  {
    classNumber: 32,
    name: "Beers; Mineral and Aerated Waters",
    description:
      "Beers; mineral and aerated waters and other non-alcoholic beverages; fruit beverages and fruit juices; syrups and other preparations for making beverages.",
    keywords: [
      "beers",
      "mineral water",
      "soda",
      "soft drinks",
      "fruit juices",
      "syrups",
      "non-alcoholic beverages",
      "energy drinks",
      "sports drinks",
    ],
  },
  {
    classNumber: 33,
    name: "Alcoholic Beverages (except Beers)",
    description: "Alcoholic beverages (except beers).",
    keywords: ["alcoholic beverages", "wine", "spirits", "liquor", "cocktails", "cider"],
  },
  {
    classNumber: 34,
    name: "Tobacco and Tobacco Substitutes",
    description: "Tobacco; smokers' articles; matches.",
    keywords: ["tobacco", "cigarettes", "cigarette", "cigars", "vapes", "e-cigarettes", "smokers' articles", "matches"],
  },
  {
    classNumber: 35,
    name: "Advertising, Business Management, Office Functions",
    description:
      "Covers services related to business administration, advertising, and office functions. Common for retail, e-commerce, marketing agencies, and business consulting.",
    keywords: [
      "retail",
      "e-commerce",
      "marketing",
      "business consulting",
      "office services",
      "advertising",
      "management",
      "online store",
      "sales",
      "business administration",
      "public relations",
      "auditing",
      "accounting",
      "human resources",
      "import-export",
      "secretarial services",
      "data processing",
      "market research",
    ],
  },
  {
    classNumber: 36,
    name: "Financial and Monetary Services, and Real Estate Affairs",
    description:
      "Covers financial, monetary, and real estate services. Relevant for banking, insurance, investment, real estate agencies, and financial consulting.",
    keywords: [
      "finance",
      "banking",
      "insurance",
      "investment",
      "real estate",
      "financial consulting",
      "loans",
      "mortgage",
      "wealth management",
      "brokerage",
      "fund management",
      "property management",
      "valuation",
      "leasing",
    ],
  },
  {
    classNumber: 37,
    name: "Construction and Repair",
    description: "Construction services; installation and repair services; mining extraction; oil and gas drilling.",
    keywords: [
      "construction",
      "repair",
      "installation",
      "maintenance",
      "building",
      "plumbing",
      "electrical",
      "HVAC",
      "vehicle repair",
      "mining",
      "drilling",
      "demolition",
    ],
  },
  {
    classNumber: 38,
    name: "Telecommunications",
    description: "Telecommunications services.",
    keywords: [
      "telecommunications",
      "internet services",
      "broadcasting",
      "mobile communication",
      "data transmission",
      "video conferencing",
      "email services",
      "web hosting",
      "streaming",
    ],
  },
  {
    classNumber: 39,
    name: "Transport and Storage",
    description: "Transport; packaging and storage of goods; travel arrangement.",
    keywords: [
      "transport",
      "logistics",
      "shipping",
      "delivery",
      "storage",
      "warehousing",
      "travel agency",
      "tour operator",
      "car rental",
      "freight",
      "packaging",
    ],
  },
  {
    classNumber: 40,
    name: "Treatment of Materials",
    description:
      "Covers services related to the treatment, processing, and transformation of materials. This includes custom manufacturing, recycling, and various industrial processes.",
    keywords: [
      "manufacturing",
      "processing",
      "printing",
      "customization",
      "recycling",
      "treatment of materials",
      "textile dyeing",
      "metal treatment",
      "woodworking",
      "food processing",
      "energy generation",
    ],
  },
  {
    classNumber: 41,
    name: "Education; Providing of Training; Entertainment; Sporting and Cultural Activities",
    description:
      "Includes services related to education, training, entertainment, and cultural activities. Common for online courses, event management, sports academies, and art galleries.",
    keywords: [
      "education",
      "training",
      "entertainment",
      "sports",
      "cultural",
      "online course",
      "event management",
      "academy",
      "coaching",
      "music",
      "art",
      "publishing",
      "theatre",
      "museums",
      "fitness",
      "recreation",
    ],
  },
  {
    classNumber: 42,
    name: "Scientific and Technological Services; IT Services",
    description:
      "Covers scientific and technological services, industrial analysis and research, and design/development of computer hardware and software. Often overlaps with Class 9 for software services.",
    keywords: [
      "software development",
      "IT consulting",
      "web design",
      "app development",
      "cloud services",
      "data analysis",
      "research",
      "technology",
      "programming",
      "cybersecurity",
      "scientific research",
      "engineering",
      "hosting",
      "SaaS",
      "platform as a service",
      "AI development",
      "blockchain",
    ],
  },
  {
    classNumber: 43,
    name: "Services for Providing Food and Drink; Temporary Accommodation",
    description:
      "Includes services for providing food and drink, and temporary accommodation. Relevant for restaurants, cafes, hotels, catering services, and bars.",
    keywords: [
      "restaurant",
      "cafe",
      "hotel",
      "catering",
      "food",
      "drink",
      "accommodation",
      "bar",
      "hospitality",
      "resorts",
      "motels",
      "food delivery",
      "takeaway",
      "bakery services",
    ],
  },
  {
    classNumber: 44,
    name: "Medical Services; Veterinary Services; Hygienic and Beauty Care; Agriculture",
    description:
      "Covers medical, veterinary, beauty, and agricultural services. This includes healthcare, wellness, farming, and related professional services.",
    keywords: [
      "medical",
      "doctor",
      "clinic",
      "hospital",
      "veterinary",
      "beauty salon",
      "spa",
      "agriculture",
      "farming",
      "horticulture",
      "landscaping",
      "hairdressing",
      "dentistry",
      "nursing",
      "therapy",
      "wellness",
    ],
  },
  {
    classNumber: 45,
    name: "Legal Services; Security Services; Personal and Social Services",
    description:
      "Covers legal services, security services, and personal/social services. Relevant for law firms, legal consultants, security agencies, and social services.",
    keywords: [
      "legal",
      "law firm",
      "consulting",
      "security",
      "personal services",
      "social services",
      "advocacy",
      "mediation",
      "arbitration",
      "licensing",
      "intellectual property legal services",
      "trademark legal services",
      "copyright legal services",
      "patent legal services",
      "funeral services",
      "dating services",
      "childcare",
      "elderly care",
    ],
  },
]

export default function TrademarkClassFinder() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<typeof trademarkClasses>([])
  const [showNoResults, setShowNoResults] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async () => {
    if (!query.trim()) {
      setResults([])
      setShowNoResults(false)
      return
    }

    setIsSearching(true)

    // Simulate search delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500))

    const lowerCaseQuery = query.toLowerCase()
    const matchedClasses = trademarkClasses.filter(
      (tc) =>
        tc.keywords.some((keyword) => lowerCaseQuery.includes(keyword)) ||
        tc.name.toLowerCase().includes(lowerCaseQuery) ||
        tc.description.toLowerCase().includes(lowerCaseQuery),
    )

    setResults(matchedClasses)
    setShowNoResults(matchedClasses.length === 0)
    setIsSearching(false)
  }

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const popularSearches = [
    "software development",
    "restaurant",
    "clothing brand",
    "consulting",
    "e-commerce",
    "mobile app",
  ]

  return (
      <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl opacity-60 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl opacity-60 -z-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-blue-200/50 shadow-lg"
          >
            <div className="relative">
              <Sparkles className="h-4 w-4 text-deep-blue" />
              <div className="absolute inset-0 animate-ping">
                <Sparkles className="h-4 w-4 text-deep-blue opacity-75" />
              </div>
            </div>
            <span className="text-xs font-bold text-deep-blue tracking-wide uppercase">AI-Powered Class Finder</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-blue mb-4 leading-tight"
          >
            Find Your Perfect
  
            <span className="relative">
              Trademark Class
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-1 left-0 h-0.5 bg-gradient-to-r from-deep-blue to-sky-950 rounded-full"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the right trademark classification for your business in seconds. Our intelligent tool analyzes your
            business description and matches it with the most relevant classes from all 45 international trademark
            categories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Target className="h-4 w-4 text-blue-600" />
              <span className="font-semibold">45 Classes Covered</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Zap className="h-4 w-4 text-purple-600" />
              <span className="font-semibold">Instant Results</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <BookOpen className="h-4 w-4 text-green-600" />
              <span className="font-semibold">Expert Guidance</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-2xl p-6 lg:p-8 max-w-4xl mx-auto relative overflow-hidden">
            {/* Card Background Effects */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>

            <CardHeader className="text-center mb-6 relative z-10">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Describe Your Business
              </CardTitle>
              <CardDescription className="text-slate-600 text-sm max-w-2xl mx-auto">
                Enter a brief description of your business, products, or services. Our AI will analyze your input and
                suggest the most relevant trademark classes.
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10">
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="flex-1 relative">
                  <Input
                    type="text"
                    placeholder="e.g., online clothing store, restaurant, software development..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="h-11 text-base px-4 pr-10 border-2 border-slate-200 focus:border-blue-500 focus:ring-0 transition-all duration-300 rounded-lg shadow-sm"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                </div>
                <Button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="bg-gradient-to-r from-[#1B4061] to-[#2c5c8a] hover:from-[#1B4061] hover:to-[#244b6d] text-white px-6 py-2.5 text-base shadow-lg hover:shadow-xl transition-all duration-300 font-bold rounded-lg h-11 min-w-[120px]"
                >
                  {isSearching ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Searching...
                    </div>
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      Find Class
                    </>
                  )}
                </Button>
              </div>

              <div className="mb-6">
                <p className="text-xs text-slate-500 mb-2">Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(search)
                        handleSearch()
                      }}
                      className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-700 rounded-full transition-colors duration-200"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {results.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <h3 className="text-lg font-bold text-gray-900">Perfect Matches Found!</h3>
                      </div>
                      <Badge className="bg-green-100 text-green-800 px-2 py-0.5 text-xs">
                        {results.length} {results.length === 1 ? "Class" : "Classes"}
                      </Badge>
                    </div>

                    <div className="grid gap-4">
                      {results.map((tc, index) => (
                        <motion.div
                          key={tc.classNumber}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="border-2 border-blue-200/50 bg-gradient-to-r from-white to-blue-50/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <CardHeader className="pb-3">
                              <div className="flex items-start justify-between">
                                <CardTitle className="text-base font-bold text-gray-900 flex items-center gap-2 group-hover:text-blue-700 transition-colors">
                                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                    {tc.classNumber}
                                  </div>
                                  <div>
                                    <div className="text-xs text-slate-500 font-normal">Class {tc.classNumber}</div>
                                    <div className="text-sm">{tc.name}</div>
                                  </div>
                                </CardTitle>
                                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-slate-700 leading-relaxed mb-3 text-xs">{tc.description}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {tc.keywords.slice(0, 6).map((keyword, idx) => (
                                  <Badge
                                    key={idx}
                                    variant="outline"
                                    className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors text-xs px-2 py-0"
                                  >
                                    {keyword}
                                  </Badge>
                                ))}
                                {tc.keywords.length > 6 && (
                                  <Badge
                                    variant="outline"
                                    className="bg-slate-50 text-slate-500 border-slate-200 text-xs px-2 py-0"
                                  >
                                    +{tc.keywords.length - 6} more
                                  </Badge>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-center text-slate-600 text-xs flex items-center justify-center gap-2 mt-6 p-3 bg-blue-50/50 rounded-lg border border-blue-100"
                    >
                      <Info className="h-3.5 w-3.5 text-blue-600" />
                      <span>
                        This is an AI-powered suggestion. For precise classification and legal advice, consult our
                        trademark experts.
                      </span>
                    </motion.div>
                  </motion.div>
                )}

                {showNoResults && results.length === 0 && query.trim() && !isSearching && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-8"
                  >
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <XCircle className="h-6 w-6 text-red-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Direct Matches Found</h3>
                    <p className="text-slate-600 text-sm mb-4">
                      We couldn't find direct matches for "<span className="font-semibold">{query}</span>". Try using
                      more general terms or different keywords.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button variant="outline" onClick={() => setQuery("")} className="border-slate-300 text-sm">
                        Clear Search
                      </Button>
                      <Button asChild className="bg-blue-600 hover:bg-blue-700 text-sm">
                        <a href="/contact">Get Expert Help</a>
                      </Button>
                    </div>
                  </motion.div>
                )}

                {!query.trim() && results.length === 0 && !showNoResults && !isSearching && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Find Your Class?</h3>
                    <p className="text-slate-600 text-sm mb-4">
                      Enter your business description above to discover the most relevant trademark classes for your
                      brand.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
                      <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg border border-blue-200">
                        <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                          <span className="text-white font-bold text-xs">1</span>
                        </div>
                        <p className="text-xs font-medium text-blue-900">Describe your business</p>
                      </div>
                      <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-lg border border-purple-200">
                        <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                          <span className="text-white font-bold text-xs">2</span>
                        </div>
                        <p className="text-xs font-medium text-purple-900">Get instant matches</p>
                      </div>
                      <div className="p-3 bg-gradient-to-br from-green-50 to-green-100/50 rounded-lg border border-green-200">
                        <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                          <span className="text-white font-bold text-xs">3</span>
                        </div>
                        <p className="text-xs font-medium text-green-900">Start your application</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <Card className="bg-deep-blue border-0 shadow-2xl relative overflow-hidden">

            <CardContent className="relative z-10 p-8 text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
                  <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
                  <span className="text-white/90 text-xs font-medium">Expert Consultation Available</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Still Need Help ? 
        
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                     Talk to Our Experts
                  </span>
                </h3>

                <p className="text-white/80 mb-6 max-w-2xl mx-auto text-sm leading-relaxed">
                  Our trademark specialists have helped thousands of businesses find the perfect classification. Get
                  personalized guidance and ensure your application is filed correctly the first time.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <button
                    className="bg-brand-orange  text-gray-900 px-6 py-2.5 text-base shadow-xl  transition-all duration-300 font-bold hover:scale-105 rounded-lg"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Schedule Free Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </button>

                  <div className="flex items-center gap-2 text-white/70 text-xs">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                    <span>No obligation • 15-minute call • Expert advice</span>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
