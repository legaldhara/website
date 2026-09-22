// data/services/copyright-registration-service.ts

import type { Service } from "@/lib/types"

const copyrightRegistrationService: Service = {
  name: "Copyright Registration",
  href: "/services/copyright-registration",
  description: "Protect your original literary, artistic, musical, or dramatic works with copyright registration.",
  icon: "Copyright",
  price: "Starting from ₹4,999",
  timeline: "3-4 Months",
  zeroServiceCharges: false,
  details: {
    // Introductory Text
    introductoryText: "Copyright Registration is an important process under copyright law that grants the copyright owner's exclusive rights over their original work, allowing them to control reproduction, distribution, public display, and adaptation. Copyright covers many types of work, including literary works, artistic works, musical works, dramatic works, computer programs, sound recordings, cinematograph films, and even computer software.",

    // What is Copyright
    overview11: {
      title: "What is Copyright?",
      content: "Copyright refers to a legal right granted over original literary, dramatic, musical, or artistic works, such as books, movies, paintings, and computer programs, as well as over sound recordings, which is a form of intellectual property law giving the creator exclusive rights to their work, including how it can be used. It protects the expression of ideas and information, but not ideas and information themselves. For example, it does not protect facts, ideas, systems, or methods of operation, but it may protect how those things are expressed."
    },

    // Importance of Copyright Registration
    importance11: {
      title: "Importance of Copyright Registration",
      points: [
        {
          heading: "Legal Protection and Evidence",
          text: "Copyright registration protects the expression of ideas and information, but not the ideas and information themselves. To initiate a Copyright Application, creators or an authorised agent must submit Form XIV along with a Statement of Particulars and, if necessary, a Power of Attorney. Additional requirements, such as the nationality of the applicant and copies of the work (including source code for software), are essential for establishing ownership."
        },
        {
          heading: "Prima Facie Evidence in Court",
          text: "Once the requisite fee is paid, the application enters the Copyright Registration Process. Whether the work is a published work or an unpublished work, registration provides significant legal protection and establishes a public record of ownership. In the event of copyright infringement, a registered copyright serves as prima facie evidence in a court of law, simplifying the enforcement of intellectual property rights."
        },
        {
          heading: "Statutory Damages and Remedies",
          text: "A Copyright Registration Certificate also allows copyright holders to seek statutory damages and other remedies in case of unauthorised use. This provides a strong foundation for legal action against infringers."
        },
        {
          heading: "International Recognition",
          text: "For creators in New Delhi and across India, the Indian Copyright Act is aligned with international standards, such as the Berne Convention, ensuring that copyright protection is recognised globally. Indian law, like the U.S. Copyright Office in the United States, upholds copyright for the lifetime of the author plus an additional 60 years."
        },
        {
          heading: "Online and Offline Registration",
          text: "Applicants can submit their Copyright Application either online via the official website for Online Copyright Registration or through traditional methods, each with a waiting period. The online portal provides a streamlined way to register creative content, while the offline route requires submitting documentation in person or by mail to the Register of Copyrights."
        },
        {
          heading: "Commercial Work Protection",
          text: "For commercial works such as motion pictures, Cinematography Films, and derivative works, copyright registration is invaluable for protecting the brand value and economic potential of creative assets. The Copyright Rules under Rule 70 outline the procedural requirements, and both published and unpublished works can benefit from this legal protection."
        }
      ]
    },

    // Understanding Copyright Registration
    whatIs: {
      title: "Understanding Copyright Registration",
      content: "Understanding copyright registration forms the fundamental base for creators who want to protect their property. The original work—whether a book, artwork, music, or software—can then be legally recognised and defended against unauthorised use. Rights can be enforced in court by filing an infringement lawsuit and proving ownership through registration."
    },

    // Types of Works Eligible for Copyright
    eligibility11: {
      title: "What Works Are Eligible for Copyright?",
      sections: [
        {
          heading: "Literary Works",
          text: "Written works covering books, articles, essays, poems, manuals, and other forms of written expression. This includes novels, long-form prose fiction with creative expression and original storytelling."
        },
        {
          heading: "Dramatic Works",
          text: "Includes original plays, screenplays, and scripts intended for live or recorded performances."
        },
        {
          heading: "Musical Compositions",
          text: "Musical works including scores, compositions, and arrangements, regardless of whether lyrics are included. This covers arrangements, compositions, and musical scores, specifically focusing on musical notation."
        },
        {
          heading: "Artistic Works",
          text: "A broad category encompassing works of visual art, such as drawings, paintings, sculptures, and illustrations. Includes pictorial, graphic, and sculptural works like paintings, photographs, illustrations, graphic designs, and sculptures."
        },
        {
          heading: "Cinematograph Films",
          text: "Motion pictures, which include movies, video content, and other moving visual media with soundtracks. Audiovisual works that combine visual and audio elements, such as movies, television shows, animations, and video productions."
        },
        {
          heading: "Sound Recording and Reproduction",
          text: "Audio recordings such as music tracks, spoken word, audiobooks, and soundtracks, including rights over the reproduction of these recordings."
        },
        {
          heading: "Software and Computer Programs",
          text: "Computer programs, applications, and digital code, including both compiled software and source code."
        },
        {
          heading: "Architectural Works",
          text: "Original architectural designs, including blueprints, plans, and final built structures. The design, layout, and structure of buildings and physical spaces, covering both conceptual plans and completed works."
        },
        {
          heading: "Choreographic Works",
          text: "Original dance routines or choreographed sequences, including creative expressions through movement."
        },
        {
          heading: "Databases",
          text: "Organised collections of information or data, where creativity is involved in selection, arrangement, or presentation."
        },
        {
          heading: "Compilations",
          text: "Collections or anthologies that show creative effort in the selection and arrangement of content, such as curated articles, poems, or musical compilations."
        },
        {
          heading: "Commercial Works",
          text: "Advertisements, maps, and technical drawings. Commercially valuable creations like advertisements, detailed maps, and technical illustrations or blueprints."
        }
      ]
    },

    // Copyright Symbol Information
    features: {
      title: "Copyright Symbol",
      content: "The copyright symbol, ©, is used to indicate that a work is protected under copyright law. The typical format for a copyright notice includes: (1) The copyright symbol '©' or the word 'Copyright', (2) The name of the copyright owner or creator, and (3) The year of publication (which may differ from the year of creation). Although not required in all jurisdictions, using the copyright symbol in a notice can help deter infringement and demonstrates the owner's intention to protect their work under the Universal Copyright Convention."
    },

    // Why Register Your Work
    benefits: {
      title: "Why Consider Registering Your Work Under Copyright Law?",
      points: [
        "Legal Protection: Registration provides formal copyright protection, which strengthens the creator's rights.",
        "Proof of Ownership: A registered copyright establishes legal ownership and helps protect the creator's efforts and endeavors.",
        "Motivation for Creativity: Knowing that copyright law safeguards their work encourages creators to produce more content.",
        "Exclusive Rights: Copyright registration ensures that the creator maintains control over reproduction, distribution, and adaptations.",
        "Security of Rights: Registration secures the creator's rights, offering a clear path to legal action if infringement occurs."
      ]
    },

    // Types of Copyrights in India
    requirements11: {
      title: "Types of Copyrights in India",
      sections: [
        {
          heading: "Literary Works",
          text: "Includes written works such as books, articles, and software."
        },
        {
          heading: "Dramatic Works",
          text: "Scripts and screenplays meant for live or recorded performances."
        },
        {
          heading: "Musical Works",
          text: "Melodic compositions, typically excluding lyrics or other sound recordings."
        },
        {
          heading: "Artistic Works",
          text: "Encompasses drawings, sculptures, photographs, paintings, and similar visual media."
        },
        {
          heading: "Cinematograph Films",
          text: "Complete film productions, covering both video and audio elements."
        },
        {
          heading: "Sound Recordings",
          text: "Audio-only works, including recorded music and spoken word performances."
        },
        {
          heading: "Individual and Joint Ownership",
          text: "Apart from the above mentioned types there are individual and Joint ownerships in Copyrights, with key differences between individual ownership and joint authorship in the context of copyright."
        }
      ]
    },

    // Legal Framework
    legalFramework: {
      title: "Legal Framework for Copyright Registration in India",
      sections: [
        {
          heading: "The Copyright Act, 1957",
          text: "The Copyright Act, 1957, enacted by the Government of India, is the foundational legislation governing copyright law in India. It has been effective since 21 January 1958 and originated during the colonial era under the British Empire. This Act protects a wide range of original works, including literary, dramatic, musical, and artistic works, as well as cinematograph films and sound recordings from unauthorised uses."
        },
        {
          heading: "Expressions, Not Ideas",
          text: "Unlike patents, which protect innovative ideas, copyright law focuses on protecting the expressions of those ideas in a tangible form."
        },
        {
          heading: "Copyright Amendment Act, 2012",
          text: "To keep up with global standards, the Copyright Act was amended in 2012. This amendment made Indian copyright law compliant with the Internet Treaties, including the WIPO Copyright Treaty (WCT) and the WIPO Performances and Phonograms Treaty (WPPT), addressing changes necessary for the digital environment."
        },
        {
          heading: "Role of the Registrar of Copyrights",
          text: "The Registrar of Copyrights is the head of the Copyright Office, which operates under the Department of Industrial Policy and Promotion within the Ministry of Commerce and Industry. The Registrar is appointed by the Central Government and is responsible for enforcing the Copyright Act and overseeing its implementation."
        },
        {
          heading: "Copyright Office Responsibilities",
          text: "The Copyright Office is responsible for: Registration of Copyright Works, Issuance of Copyright Certificates (which serves as legal proof of ownership), Copyright Information Services, and Maintenance of Copyright Records in a public register ensuring transparency and accessibility."
        }
      ]
    },

    // Legal Rights of Copyright Owner
    operation: {
      title: "Legal Rights of a Copyright Owner",
      sections: [
        {
          heading: "Right of Reproduction",
          text: "The exclusive right to reproduce the work in any form."
        },
        {
          heading: "Right to Distribute",
          text: "The right to distribute copies of the work to the public through sale or other transfer of ownership."
        },
        {
          heading: "Right to Public Performance",
          text: "The right to perform the work publicly, including live performances and broadcasts."
        },
        {
          heading: "Right to Public Display",
          text: "The right to display the work publicly in galleries, exhibitions, or digital platforms."
        },
        {
          heading: "Right to Communication",
          text: "The right to communicate the work to the public through any medium, including digital platforms."
        },
        {
          heading: "Right to Adaptation",
          text: "The right to create adaptations, derivative works, or translations of the original work."
        },
        {
          heading: "Right to Integrity",
          text: "The right to protect the integrity of the work, ensuring it is not distorted, mutilated, or modified in a way that prejudices the author's honor or reputation."
        }
      ]
    },

    // Overview of Registration Process
    overview: "The copyright registration process in India involves several steps, with the Copyright Office overseeing the formalisation of ownership for works under Indian copyright law: 1. Application Submission: Complete Form XIV and include both the Statement of Particulars and Statement of Further Particulars detailing the work. 2. Fee Payment: Pay the required fee based on the category of work (literary, artistic, software, etc.). 3. Issuance of Dairy Number: After submission, the application receives a Dairy Number, which serves as an official acknowledgment. 4. Handling Objections: If any objections arise, applicants are notified and given the chance to resolve them. 5. Certificate Issuance: Once approved, a copyright certificate is issued, officially confirming ownership and providing reproduction and adaptation rights.",

    // Process Steps
    processSteps: [
      {
        step: 1,
        title: "Application Submission",
        description: "The applicant submits a copyright application form (Form XIV) on the Copyright Office website along with Statement of Particulars and Statement of Further Particulars detailing the work.",
        timeframe: "1-2 Days"
      },
      {
        step: 2,
        title: "Fee Payment",
        description: "The prescribed fee varies depending on the type of work (e.g., literary, artistic, software, cinematograph films). Payment must be made online or through designated channels.",
        timeframe: "Same Day"
      },
      {
        step: 3,
        title: "Issuance of Diary Number",
        description: "After the application and payment, a Dairy Number is issued as an acknowledgment of the application. This serves as proof of filing and can be used to track application status.",
        timeframe: "1-3 Days"
      },
      {
        step: 4,
        title: "Examination",
        description: "The Copyright Division examines the application for any discrepancies, missing information, or non-compliance with copyright rules and regulations.",
        timeframe: "30-45 Days"
      },
      {
        step: 5,
        title: "Objection Handling",
        description: "If there are objections raised by the Copyright Office, the applicant must respond with a legally sound reply addressing all concerns within the stipulated time frame.",
        timeframe: "30 Days (if objections arise)"
      },
      {
        step: 6,
        title: "Certificate Issuance",
        description: "Upon successful processing and resolution of any objections, the Copyright Certificate is issued as proof of registration, confirming legal ownership and exclusive rights.",
        timeframe: "3-4 Months (total)"
      }
    ],

    // Required Documents
    requiredDocuments1: {
      initialDetails: [
        "Copies of the Work: At least two copies of the work, whether literary, artistic, or software, must be provided.",
        "Information about the Work: Details describing the nature, category, and title of the work.",
        "Information about the Applicant: Name, contact information, and details of the applicant.",
        "Information about the Author: Name, nationality, and other details about the creator of the work.",
        "Publication Details: If the work has been published, details regarding the date and place of publication."
      ],
      documentTypes: [
        {
          type: "Payment and Authorization Documents",
          documents: [
            "Payment Proof: Proof of payment for the copyright registration fee",
            "No-Objection Certificate (NOC): An NOC from the author or applicant, particularly if there are multiple contributors or owners",
            "Power of Attorney: Required if an agent or representative is filing on behalf of the copyright owner"
          ]
        },
        {
          type: "Software-Specific Documents",
          documents: [
            "Source Code (for Software): The first and last 10 pages of the source code, if the work is a computer program"
          ]
        },
        {
          type: "Work Samples and Details",
          documents: [
            "At least two copies of the work being registered",
            "Complete description of the work including title, category, and nature",
            "Publication information if applicable (date and place of first publication)"
          ]
        }
      ]
    },

    // How We Assist
    howWeAssist: [
      {
        title: "Work Assessment and Eligibility",
        description: "We evaluate your work to determine its eligibility for copyright protection under the Copyright Act, 1957. Our experts analyze whether your creation qualifies as a literary, artistic, musical, dramatic, cinematograph film, sound recording, or software work."
      },
      {
        title: "Document Preparation and Form Filing",
        description: "Our team assists in preparing and filing all necessary documents including Form XIV, Statement of Particulars, Statement of Further Particulars, and any required supporting documents. We ensure all information is accurate and complete to avoid delays."
      },
      {
        title: "Application Submission and Tracking",
        description: "We handle the complete submission process on the Copyright Office website, ensuring timely payment of fees and proper filing. Once submitted, we track your application using the Diary Number and keep you updated on its progress."
      },
      {
        title: "Objection Handling and Reply",
        description: "If the Copyright Office raises any objections or seeks clarifications, we prepare comprehensive legal replies addressing all concerns. Our experts ensure that responses are legally sound and submitted within the required timeframe."
      },
      {
        title: "Follow-up and Certificate Delivery",
        description: "We handle all communication with the Copyright Office until registration is complete. Once approved, we ensure you receive your Copyright Registration Certificate, which serves as legal proof of ownership and your exclusive rights."
      },
      {
        title: "Post-Registration Support",
        description: "LegalDhara simplifies the entire Copyright Registration Process by providing expert guidance and end-to-end assistance. We also offer protection strategies for creators facing copyright infringement issues, helping them navigate the legal avenues to assert their exclusive rights in a court of law. With expertise in both the Indian Copyright Act and international agreements like the Berne Convention, we enable creators to secure, protect, and fully monetize their creative work across a global market."
      }
    ],

    // FAQs
    faqs: [
      {
        question: "What types of works can be copyrighted?",
        answer: "Copyright protects original literary, dramatic, musical, and artistic works, including books, songs, films, paintings, software, and architectural designs. According to the Copyright Act, 1957, eligible works include dramatic works, sound recordings, audiovisual works, musical compositions, pictorial and graphic works, novels, architectural works, cinematograph films, choreographic works, software, databases, compilations, and commercial works like advertisements and technical drawings."
      },
      {
        question: "How long does copyright protection last?",
        answer: "Generally, copyright protection lasts for the lifetime of the author plus 60 years in India. This Term of Copyright supports creators in maintaining the integrity and value of their work over time. For cinematograph films, sound recordings, photographs, and works of government or international organizations, different durations may apply."
      },
      {
        question: "Is copyright registration mandatory in India?",
        answer: "No, copyright registration is not mandatory in India. Copyright protection is automatic upon creation of an original work. However, registration provides several advantages including prima facie evidence in court, legal proof of ownership, ability to seek statutory damages, and stronger enforcement of rights in case of infringement."
      },
      {
        question: "What is the difference between copyright and patent?",
        answer: "Copyright protects the expression of ideas in tangible form (books, music, art, software), while patents protect innovative ideas, inventions, and processes. Copyright focuses on creative expression, whereas patents protect technical innovations and functional inventions. Copyright lasts for the author's lifetime plus 60 years, while patents have shorter durations (typically 20 years)."
      },
      {
        question: "Can I register unpublished works?",
        answer: "Yes, both published and unpublished works can be registered for copyright protection in India. The Copyright Rules under Rule 70 outline the procedural requirements for both categories. Registration of unpublished works provides legal protection even before the work is publicly released or distributed."
      },
      {
        question: "What is Form XIV in copyright registration?",
        answer: "Form XIV is the official application form used for copyright registration in India. It must be submitted along with the Statement of Particulars, Statement of Further Particulars, and other required documents. The form captures details about the work, author, applicant, and nature of copyright being claimed."
      },
      {
        question: "What documents are required for software copyright?",
        answer: "For software copyright registration, you need: the first and last 10 pages of source code, Form XIV, Statement of Particulars, proof of payment, details about the applicant and author, NOC if there are multiple contributors, and Power of Attorney if filing through an agent."
      },
      {
        question: "How long does the copyright registration process take?",
        answer: "The copyright registration process in India typically takes 3-4 months from the date of application submission. This includes application examination (30-45 days), handling any objections if raised (30 days), and final certificate issuance. The timeline may vary depending on the workload of the Copyright Office and any objections that need to be resolved."
      },
      {
        question: "What is a Diary Number in copyright registration?",
        answer: "A Diary Number is an acknowledgment number issued by the Copyright Office after your application is submitted and fees are paid. It serves as proof of filing and can be used to track the status of your copyright application throughout the registration process."
      },
      {
        question: "Can I register copyright for joint authorship?",
        answer: "Yes, works created by joint authors can be registered for copyright. In such cases, all authors must be identified in the application, and proper documentation including NOCs from all authors may be required. The Copyright Act recognizes both individual ownership and joint authorship, with different rights and obligations for each."
      },
      {
        question: "What is the copyright symbol and is it mandatory?",
        answer: "The copyright symbol © indicates that a work is protected under copyright law. While not mandatory in India (as copyright is automatic upon creation), using the symbol along with the copyright owner's name and year of publication demonstrates the owner's intention to protect their work and can help deter infringement, especially under the Universal Copyright Convention."
      },
      {
        question: "Is India's copyright law aligned with international standards?",
        answer: "Yes, the Indian Copyright Act is aligned with international standards, including the Berne Convention for the Protection of Literary and Artistic Works. The Copyright Amendment Act of 2012 made Indian law compliant with Internet Treaties including the WIPO Copyright Treaty (WCT) and WIPO Performances and Phonograms Treaty (WPPT), ensuring global recognition of copyright protection."
      }
    ],

    // Key Features
    keyFeatures: [
      { 
        title: "Exclusive Rights", 
        description: "Sole rights to reproduce, distribute, perform, display, communicate, and adapt your work. Copyright registration ensures complete control over how your creation is used." 
      },
      { 
        title: "Legal Protection", 
        description: "Ability to take legal action against infringement. A registered copyright serves as prima facie evidence in court, simplifying enforcement of intellectual property rights." 
      },
      { 
        title: "Global Recognition", 
        description: "International protection under the Berne Convention and other treaties. Your copyright is recognized across 179+ countries, ensuring worldwide protection of your creative work." 
      },
      { 
        title: "Asset Creation", 
        description: "Your creative work becomes a valuable asset. Copyright registration establishes ownership and enables licensing, transfer, or commercialization of your intellectual property." 
      },
      {
        title: "Statutory Damages",
        description: "Registered copyrights allow you to seek statutory damages and legal remedies in case of unauthorized use, providing stronger legal recourse against infringers."
      },
      {
        title: "Public Record",
        description: "Registration creates a public record of ownership maintained by the Copyright Office, providing transparency and establishing your claim to the work."
      }
    ]
  }
}

export default copyrightRegistrationService