import './globals.css';
import type { Metadata } from 'next';
// import { Inter, Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Urbanist } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
// import PageLoader from '@/components/PageLoader';

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
});


export const metadata: Metadata = {
  title: "Legal Dhara - India's Best LegalTech Platform for Startups & Businesses",
  description:
    "Legal Dhara is India's leading LegalTech platform offering expert services in trademark registration, GST filing, company incorporation, business compliance, tax filing, and intellectual property rights. Trusted by startups, entrepreneurs, and enterprises for fast, reliable, and affordable legal solutions.",
  keywords:
    "Legal Dhara, legal tech platform India, trademark registration, company registration, GST filing, tax filing, business compliance, startup legal services, IPR registration, legal documentation, online company incorporation, LLP registration, FSSAI license, ISO certification, PAN TAN registration, startup India registration, private limited company, MSME registration, legal services for startups, legal advisor India, business legal solutions",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="assets/favicon.ico" />
      </head>
      <body className={` ${urbanist.className}`}>
        {/* <PageLoader /> */}
        
               <Header />
      
        <main className="min-h-screen">
        <Toaster position="top-center" reverseOrder={false} />
          {children}
        </main>
        <Footer />
          
      </body>
    </html>
  );
}