// src/lib/types.ts
import { LucideIcon } from "lucide-react"

export interface ServiceDetailStep {
  title: string
  description: string
}

export interface ServiceDetailFAQ {
  question: string
  answer: string
}

export type GenericServiceDetail = {
  overview1?: {
    introduction?: string[];
    whatIs?: string[];
  };
  overview11?: {
    title: string;
    content: string;
}
overview111?: {
    type: string;
    content: string;
}[]
sections?: (
  {
    title: string;
    type: string;
    content: string;
    list?:string[];
     table?: {
    component: string;
    fees: string;
    remarks: string;
}[];
    

} | {
    title: string;
    type: string;
    content: string[];
    list?:string[];
     table?: {
    component: string;
    fees: string;
    remarks: string;
}[];
} | {
    title: string;
    type: string;
    content: string;
    list?: string[];
    subSections: {
        subtitle: string;
        type: string;
        content: string;
    }[];
     table?: {
    component: string;
    fees: string;
    remarks: string;
}[];
} | {
    title: string;
    type: string;
    content?: string;
    list?: string[];
    table?: {
    component: string;
    fees: string;
    remarks: string;
}[];
})[]

whatIs?: {
    title: string;
    content: string;
}
patentability?: {
    title: string;
    content: string;
    points: {
        heading: string;
        text: string;
    }[];
}
importance11?: {
    title: string;
    points: {
        heading: string;
        text: string;
    }[];
}

  eligibility?: string[];
  requiredDocuments1?: {
    initialDetails?: string[];
    documentTypes?: {
      type: string;
      documents: string[];
    }[];
  };
  requirements11?: {
    title: string;
    sections: {
        heading: string;
        text: string;
    }[];
}
features?: {
    title: string;
    content: string;
}
operation?: {
    title: string;
    sections: {
        heading: string;
        text: string;
    }[];
}
  benefits1?: string[];
  process1?: string[];
  fees1?: string[];
  faqs1?: {
    question: string;
    answer?: string;
  }[];




  gstComponents?: {
    title: string;
    description: string;
    icon: string;
}[]
benefits?: {
    title: string;
    points: string[];
}
eligibility11?: {
    title: string;
    sections: {
        heading: string;
        text: string;
    }[];
}
financialRegulations?: {
    title: string;
    sections: {
        heading: string;
        text: string;
    }[];
}
   
  turnoverLimits?: {
    serviceProviders: {
        normalStates: string;
        specialStates: string;
        description: string;
    };
    goodsSuppliers: {
    normalStates: string;
    specialStates: string;
    conditions: string[];
    fallbackLimit: string;
   }
   specialCategoryStates: string[]
   aggregateTurnover: string;
  }
  gstCertificateInfo?: {
    title: string;
    description: string;
    importance: string[];
}
gstinInfo?: {
    title: string;
    description: string;
    structure: string;
}
voluntaryRegistration?: {
    title: string;
    description: string;
    benefits: string[];
}
penaltyInfo?: {
    title: string;
    penalties: {
        type: string;
        description: string;
        amount: string;
    }[];
}
legalFramework?: {
    title: string;
    sections: {
        heading: string;
        text: string;
    }[];
}

  objectionGrounds?: any
  objectionVsOpposition?: any
  responseTimeline?: any
  detailedProcess?: any
  replyFees?: any
  whyChooseUs?: any
  whatIsTrademarkObjection?: any
  introductoryText?: string
  whatIsTrademark?: string // Specific to Trademark, will be optional for others
  trademarkAct1999?: string // Specific to Trademark, will be optional for others
  overview?: string | undefined;
  keyFeatures?: { title: string; description: string }[]
  process?: 
    { step?:number ; title: string; description: string }[]
  pricing?: {
    basePrice?: string
    governmentFees?: string
    timeline?: string
  }
  faqs?: { question:string; answer:string; }[]
  whyRegisterDetailed?: { title: string; description: string; icon?:string; }[]
  
  whoCanApply?: string[]
  typesOfTrademarks?: { title: string; description: string; example?: string; icon: LucideIcon;  }[]
  trademarkClasses?: { description: string; examples: string[] ; detailedClassification: {
    goods: string;
    services: string;
}}
  trademarkSearch?: string
  requiredDocuments?: {
    initialDetails?: string[]
    documentTypes?: { type: string; documents: string[] }[]
  }
  processSteps?: { step:number; title: string; description: string ; timeframe?:string; }[]
  trademarkSymbols?: { symbol: string; name: string; description: string ; usage?: string;  legalStatus?: string}[]
  ipComparison?: {
    category?: string
    protection?: string
    duration?: string
    application?: string
    requirements?: string
    enforcement?: string
    example?: string
  }[]
  howWeAssist?: { title: string; description: string }[]
  eligibilityCriteria?: { title: string; description: string; icon?: string }[]
  faq?: { question: string; answer: string }[]
  commonlyFiledTrademarks?: {
    title: string
    imageQuery: string
    description: string
  }[]
  // Add more generic fields as needed for other services
  overviewContent?: string
  benefitsContent?: { title: string; description: string }[]
  postRegistrationProcedures?: {
    title: string;
    description: string;
}[]
trademarkRectification?: {
    purpose: string;
    reasons: string[];
    procedure: string;
    whoCanApply: string;
    authority: string;
}
benefitsOfRegistration?: {
    title: string;
    description: string;
}[]
  pricingDetails?: { title: string; price: string; features: string[] }[]
  documentsRequired?: string[]
  howItWorksSteps?: { title: string; description: string }[]
  comparisonTable?: { header: string[]; rows: string[][] }[]
  
  
  // ... any other sections you might have
}


export interface Service {
  title?: string
  name: string
  href?: string
  description: string
  price?: string
  timeline?: string
  governmentCharges?:string
  icon?: string // Storing icon name as string
  zeroServiceCharges?: boolean // Optional
  details?: GenericServiceDetail
}

export interface Category {
  title: string
  icon: string // Storing icon name as string
  services: Service[]
}

export interface MainCategory {
  mainCategory: string
  mainIcon: string // Storing icon name as string
  categories: Category[]
}
