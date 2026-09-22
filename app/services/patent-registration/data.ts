import type { Service } from "@/lib/types"

const patentRegistrationService: Service = {
  name: "Patent Registration",
  title: "Patent Registration",
  description:
    "Patent registration services in India with complete legal assistance, expert patent drafting, fast filing, and end-to-end support for protecting your invention for 20 years.",
  href: "/services/patent-registration",
  icon: "Award",
  timeline:"1-2 months",
  price:"starting from ₹2,999",
  details: {
    introductoryText:
      "Patent registration is a legal process under intellectual property law that provides an inventor with exclusive rights over their invention. Patent registration restricts others from making, using, selling, or importing the invention without authorisation for a limited time, typically 20 years from filing. By acquiring ownership of the invention, individuals and companies can protect their innovations, attain commercial benefit, license out their technology, and reap the benefits of monetisation opportunities. LegalDhara provides fast track patent filing in India, our registered patent agents can file for registration within 14 days. File online today and enjoy exclusive legal rights for 20 years.",
    overview11: {
      title: "Patent Act, 1970",
      content:
        "The Patent Act, 1970 regulates patents in India. The Act outlines the legal framework for patent granting, enforcement, and protection in India. The Act covers inventions in several areas including chemicals, drugs, engineering, and biotechnology, as long as they satisfy requirements such as novelty, inventive step, and industrial applicability. By providing exclusive rights to inventors for a limited time (20 years in most cases), the Act promotes innovation and investment in research and development.",
    },
    importance11: {
      title: "Advantages of Patent Registration in India",
      points: [
        {
          heading: "Exclusive Legal Rights",
          text: "A patent provides exclusive rights on the owner to produce, utilise, sell, or import the patented invention for 20 years from the date of filing. These rights inhibit others from using the invention without authorisation, providing the creator with authority over its business use.",
        },
        {
          heading: "Asset Creation and Market Positioning",
          text: "Patents are tangible assets that improve a company's net value by protecting distinctive processes or technologies. Not only does this add to the company's portfolio but also to its reputation as an innovator. Patents assist in establishing a business at the forefront of their industry, making their products and services stand out in competitive markets.",
        },
        {
          heading: "Licensing and Commercialisation Benefits",
          text: "Licensing patents to third-party companies earns royalty revenue without giving up ownership. Patents may be sold or pledged as security for financing. Partnerships are facilitated by licensing agreements that increase market access.",
        },
        {
          heading: "Investor Confidence and Strategic Value",
          text: "Patents enhance the credibility of a business by illustrating the company's dedication to innovation and guarding its competitive edge. The company becomes more appealing to investors who desire assurances for their investments. Patents are useful assets in negotiating, collaboration, and expansion in the marketplace as tactics.",
        },
      ],
    },
    requirements11: {
      title: "Types of Patent Applications",
      sections: [
        {
          heading: "Provisional Application",
          text: "Filed when the invention is still under development. It secures a priority date and gives the applicant 12 months to file the complete specification. Ideal for early-stage innovations.",
        },
        {
          heading: "Complete Specification Application",
          text: "Filed when the applicant has a complete and finalised invention. It must include a full specification with detailed descriptions, drawings, and claims. Can be a direct or subsequent filing (after a provisional patent application).",
        },
        {
          heading: "Convention Application",
          text: "Filed in India within 12 months of filing a similar application in a convention country. It allows the applicant to claim priority from the earlier foreign filing.",
        },
        {
          heading: "PCT International Application",
          text: "A single international filing under the Patent Cooperation Treaty (PCT) that gives the applicant up to 31 months to enter multiple countries. It includes international search and examination reports to assess patentability.",
        },
        {
          heading: "PCT National Phase Application",
          text: "Filed in individual countries (including India) after an international PCT application. Must be submitted within 31 months from the priority date to seek protection in that country.",
        },
        {
          heading: "Patent of Addition",
          text: "Filed for improvements or minor modifications to an already filed or granted patent. It does not require a separate renewal fee and expires with the main patent.",
        },
        {
          heading: "Divisional Application",
          text: "Filed when an application claims more than one invention. The original (parent) application is divided, and each division retains the same priority date as the original.",
        },
      ],
    },
    patentability: {
      title: "Patentability Criteria in India",
      content:
        "Patentability in India is governed by the Patents Act, 1970, particularly Sections 2, 3, and 4. These include novelty, inventive step (non-obviousness), and industrial applicability. In addition, the invention must not fall under excluded subject matter as outlined in Sections 3 and 4 of the Act.",
      points: [
        {
          heading: "Novelty or Newness",
          text: "To be considered novel, an invention must not have been disclosed to the public anywhere in the world before the filing date. This includes publications, prior patent applications, websites, or public demonstrations.",
        },
        {
          heading: "Non-obviousness or Inventive Step",
          text: "An invention must involve an inventive step, meaning it should not be obvious to a person skilled in the relevant field. It should represent a technical advancement or economic significance over existing knowledge.",
        },
        {
          heading: "Usefulness or Utility",
          text: "The invention must be capable of industrial application, meaning it should be usable in some kind of industry and provide a tangible benefit. This requirement ensures that the invention is not purely theoretical or speculative, but has practical utility.",
        },
      ],
    },
    operation: {
      title: "What Can and Cannot Be Patented in India",
      sections: [
        {
          heading: "What Can Be Patented",
          text:
            "Products: New and inventive items like machines, devices, chemicals, and pharmaceuticals\n" +
            "Processes or Methods: Innovative ways of manufacturing or doing things, including industrial processes\n" +
            "Machines: Mechanical inventions that demonstrate novelty or improved functionality\n" +
            "Manufactured Goods: Unique articles made using distinct or innovative methods\n" +
            "Chemical Formulations: Novel chemical compounds, including new drug compositions\n" +
            "Biotechnological Inventions: Innovations such as gene editing, genetic sequences, and biotech processes\n" +
            "Software and Digital Innovations: Software or computer-related inventions that solve a technical problem and meet patentability criteria.",
        },
        {
          heading: "What Cannot Be Patented",
          text:
            "Inventions that violate natural laws or public morality\n" +
            "Discoveries of scientific principles or natural substances\n" +
            "Abstract theories, mathematical methods, or algorithms\n" +
            "Agricultural or horticultural methods\n" +
            "Medical, surgical, or therapeutic methods for treating humans or animals\n" +
            "Plants, animals, seeds, and biological processes (except microorganisms)\n" +
            "Artistic works, films, or literary creations\n" +
            "Designs of semiconductor circuit layouts\n" +
            "Inventions related to atomic energy.",
        },
      ],
    },
    requiredDocuments1: {
      initialDetails: [
        "Patent Application (Form 1): The official application form to initiate the patent filing process.",
        "Specification (Form 2): Includes either a provisional or complete specification outlining the invention’s technical details, claims, and abstract.",
        "Statement and Undertaking (Form 3): Discloses any foreign patent applications filed for the same invention under Section 8 of the Patents Act.",
        "Declaration of Inventorship (Form 5): Confirms the inventor(s) of the invention and their contribution.",
        "Power of Attorney (Form 26): Required when a registered patent agent or legal representative files the application on behalf of the applicant.",
        "Priority Documents: Needed for Convention or PCT National Phase applications. These must be submitted at the time of filing or within 18 months from the priority date.",
        "Permission from National Biodiversity Authority: Mandatory if the invention involves biological materials sourced from India.",
      ],
      documentTypes: [
        {
          type: "Key Forms Used in Patent Filing",
          documents: [
            "Form 1 – Application for Grant of Patent",
            "Form 2 – Provisional or Complete Specification",
            "Form 3 – Statement and Undertaking (Section 8)",
            "Form 5 – Declaration as to Inventorship",
            "Form 9 – Request for Early Publication",
            "Form 18 – Request for Examination",
            "Form 26 – Power of Attorney",
            "Form 27 – Statement of Commercial Working",
            "Form 28 – Declaration for Startups and Small Entities",
          ],
        },
      ],
    },
    processSteps: [
      {
        step: 1,
        title: "Conduct a Patent Search (Novelty & Prior Art)",
        description:
          "LegalDhara starts with a thorough patent search to determine whether your invention is novel and not disclosed in the prior art (previous patents, publications, or known arts). This is important to establish whether your concept is patentable and to prevent rejection on examination.",
      },
      {
        step: 2,
        title: "Prepare Provisional or Complete Specification (Form 2)",
        description:
          "Our professionals assist in preparing Form 2, which contains a provisional or full specification. A provisional specification describes the idea for obtaining an early priority date, and a full specification describes the technical details of the invention and the claims. LegalDhara makes your specification complete, precise, and patent-law-compliant.",
      },
      {
        step: 3,
        title: "File the Patent Application (Form 1)",
        description:
          "LegalDhara submits Form 1, the formal application to register for a patent, with the Patent Office. This contains details of the applicant and inventor. As soon as it is submitted, we send you the filing receipt—a document that shows your date and application number, reserving your rights from this date onwards.",
      },
      {
        step: 4,
        title: "Submit Other Required Forms (Form 3, Form 5)",
        description:
          "We help file Form 3, which is a statement and undertaking for any foreign filing for the same invention. We also file Form 5, which is an inventorship declaration. We get these filed within the legally required time limits to keep the application process on schedule.",
      },
      {
        step: 5,
        title: "Publication in Patent Journal (After 18 Months)",
        description:
          "Your application automatically gets published in the Patent Journal 18 months from the date of priority. LegalDhara also has the option to request early publication, if required. Publication is important as it brings your invention out in the open and allows pre-grant opposition, if any.",
      },
      {
        step: 6,
        title: "File Request for Examination – RFE (Form 18)",
        description:
          "In 48 months from the date of priority, LegalDhara submits Form 18, the Request for Examination. This starts the process of examination where a patent examiner examines your application for patentability requirements compliance.",
      },
      {
        step: 7,
        title: "Respond to First Examination Report (FER)",
        description:
          "Once the examiner issues a First Examination Report (FER), we assist you in preparing and filing a solid response to respond to objections or requirements. LegalDhara ensures all legal and technical amendments are completed within the six-month response duration (extendable by 3 months). The Patent Office might schedule hearings which require arguments followed by written submissions to be filed.",
      },
      {
        step: 8,
        title: "Patent Grant and Patent Certificate Issuance",
        description:
          "Once all objections are cleared and compliance is verified, the patent is granted by the Patent Office. LegalDhara will inform you of the grant, and you will receive the official patent certificate, validating your sole rights for 20 years from the date of filing. Note: Objections can be raised by patent examiners if the invention is not novel or not non-obvious, and the applicant needs to reply in turn to have proper patent protections. Preparation with access to patent databases prevents rejection and ensures compliance. Inventors pay fees regularly after patents are granted to keep protection and defend objections raised over the term of the patent.",
      },
    ],
    pricing: {
      basePrice: "₹5,999 (Starter Plan)",
      governmentFees: "₹8,000 - ₹1,60,000",
      timeline: "4 to 20 days for filing, 1 to 3 years for grant",
    },
    faqs: [
      {
        question: "What is the timeline for patent registration in India?",
        answer:
          "The registration of the patent in India usually happens between 1 to 3 years from the time of the first filing to the actual grant, depending on the complexity of the invention and whether expedited procedure is applied or not. Expedited examination can cut the time to 1–1.5 years.",
      },
      {
        question: "What is the validity of a patent in India?",
        answer:
          "In India, a patent remains valid for 20 years from the date of filing of complete specification. For applications filed under the PCT designating India, the 20-year term is calculated from the international filing date.",
      },
      {
        question: "Where to file a patent application in India?",
        answer:
          "Patent applications are made on Form-1 accompanied by a provisional or full specification and the relevant fee before the respective patent office. Jurisdiction is identified on the basis of applicant’s residence, business, or place of invention. Offices: Mumbai, Delhi, Chennai, Kolkata.",
      },
    ],
    // jurisdiction: {
    //   title: "Jurisdictions of Patent Offices in India",
    //   sections: [
    //     {
    //       heading: "Mumbai",
    //       text: "Maharashtra, Gujarat, Madhya Pradesh, Goa, Chhattisgarh, Daman & Diu, Dadra & Nagar Haveli.",
    //     },
    //     {
    //       heading: "Delhi",
    //       text: "Delhi, Himachal Pradesh, Haryana, Jammu & Kashmir, Punjab, Rajasthan, Uttar Pradesh, Uttarakhand.",
    //     },
    //     {
    //       heading: "Chennai",
    //       text: "Tamil Nadu, Andhra Pradesh, Karnataka, Kerala, Puducherry, Lakshadweep.",
    //     },
    //     {
    //       heading: "Kolkata",
    //       text: "West Bengal, Bihar, Odisha, Sikkim, Assam, Meghalaya, Manipur, Tripura, Nagaland, Arunachal Pradesh, Andaman & Nicobar Islands, and the rest of India.",
    //     },
    //   ],
    // },
  },
}

export default patentRegistrationService
