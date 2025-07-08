// File: app/legal/[slug]/page.tsx
import ProductCategory from '@/app/components/product-category'
import { notFound } from 'next/navigation'


type SectionItem = {
  description: string;
  subtitle?: string; // Make subtitle optional
};

type Section = {
  title: string;
  items: SectionItem[];
};

type LegalPage = {
  title: string;
  effectiveDate: string;
  introduction: string;
  sections: Section[];
};

type LegalPages = {
  [key: string]: LegalPage;
};

const legalPages : LegalPages = {
  privacy: {
    title: 'Privacy Policy',
    effectiveDate: '13th April 2025',
    introduction: 'At iLeaf Doors and Windows ("we", "our", or "us"), your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit www.ileafdoors.com.',
    sections: [
      {
        title: 'Information We Collect',
        items: [
          {
            subtitle: 'Personal Information',
            description: 'Your name, email address, phone number, or company details when you contact us via forms or WhatsApp.'
          },
          {
            subtitle: 'Technical Data',
            description: 'Your IP address, browser type, device type, and interaction with the website.'
          },
          {
            subtitle: 'Cookies',
            description: 'We may use cookies to improve your browsing experience. You can disable cookies via your browser settings.'
          }
        ]
      },
      {
        title: 'How We Use Your Information',
        items: [
          {
            description: 'To respond to your inquiries or requests for information.'
          },
          {
            description: 'To improve the content and functionality of our website.'
          },
          {
            description: 'To send updates about our products or services (if you\'ve opted in).'
          }
        ]
      },
      {
        title: 'Information Sharing',
        items: [
          {
            description: 'We do not sell or rent your personal data. We may share data with trusted service providers for analytics, website hosting, or email communication, under strict confidentiality agreements.'
          }
        ]
      },
      {
        title: 'Data Security',
        items: [
          {
            description: 'We take appropriate technical and organizational measures to protect your data from unauthorized access or misuse.'
          }
        ]
      },
      {
        title: 'Your Rights',
        items: [
          {
            description: 'Request access to your data'
          },
          {
            description: 'Ask for correction or deletion'
          },
          {
            description: 'Withdraw consent for any marketing communication'
          }
        ]
      },
      {
        title: 'Third-party Links',
        items: [
          {
            description: 'Our site may include links to third-party websites. We are not responsible for the content or privacy practices of those websites.'
          }
        ]
      },
      {
        title: 'Contact Us',
        items: [
          {
            description: 'If you have questions about our Privacy Policy, reach us at:'
          },
          {
            description: 'Tel : +91 484 4042626'
          },
          {
            description: 'e-Mail : ileafdoor@gmail.com'
          }
        ]
      },

    ]
  },
  terms: {
    title: 'Terms of Service',
    effectiveDate: '13th April 2025',
    introduction: 'By accessing or using www.ileafdoors.com, you agree to the following Terms of Service. These terms govern your use of the website operated by i-LEAF Doors and Windows.',
    sections: [
      {
        title: 'Website Use',
        items: [
          {
            description: 'You agree to use this website for lawful purposes only. You must not attempt to disrupt or misuse the website in any way.'
          }
        ]
      },
      {
        title: ' Intellectual Property',
        items: [
          {
            description: 'All images, designs, logos, content, and materials on this website are the property of i-LEAF Doors and Windows or its licensors. You may not copy or reuse any content without written permission.'
          },
        ]
      },
      {
        title: 'Accuracy of Information',
        items: [
          {
            description: 'We aim to provide accurate and updated information about our products and services, but we do not guarantee that all content is error-free or current. Product specifications may change without prior notice'
          },
        ]
      },
      {
        title: 'Limitation of Liability',
        items: [
          {
            description: 'We are not liable for any damages arising from your use or inability to use the website, or for any reliance on information provided on this site.'
          },
        ]
      },
      {
        title: 'External Links',
        items: [
          {
            description: 'Our website may contain links to external websites. We are not responsible for their content or privacy practices.'
          },
        ]
      },
      {
        title: 'Changes to Terms',
        items: [
          {
            description: 'We reserve the right to update these Terms of Service at any time. Please review this page periodically.'
          }
        ]
      },
    ]
  },
  conditions: {
    title: 'Terms and Conditions',
    effectiveDate: '13th April 2025',
    introduction: 'These Terms and Conditions apply to visitors of www.ileafdoors.com, operated by i-LEAF Doors and Windows. By using the site, you accept these terms in full.',
    sections: [
      {
        title: 'Product Display',
        items: [
          {
            description: 'i-LEAF Doors and Windows provides information about doors and related solutions for general awareness and inquiry purposes. We do not offer direct purchases, orders, or payment services through the website.'
          },
        ]
      },
      {
        title: 'Communication',
        items: [
          {
            description: 'All product inquiries or service requests must be made via the contact form, phone, WhatsApp, or email. Any estimates or consultations are non-binding until confirmed in writing via official communication channels.'
          },
        ]
      },
      {
        title: 'No Online Transactions',
        items: [
          {
            description: 'We do not collect payment or conduct financial transactions through the website. Any business engagement will be handled offline or through direct consultation.'
          },
        ]
      },
      {
        title: 'Modifications',
        items: [
          {
            description: 'We may update website content, including product visuals, specifications, or descriptions, at any time without notice.'
          },
        ]
      },
      {
        title: 'Governing Law',
        items: [
          {
            description: 'These terms are governed by the laws of India. Any disputes shall be handled in the courts of Kerala'
          },
        ]
      },
      {
        title: 'Disclaimer',
        items: [
          {
            description: 'The information provided on this website is for general informational purposes only. While we strive to ensure accuracy, i-LEAF Doors and Windows makes no guarantees or warranties, express or implied, regarding the completeness, accuracy, reliability, or availability of any content on the site. Any reliance you place on such information is strictly at your own risk. i-LEAF Doors and Windows shall not be held liable for any loss or damage arising from the use of this website'
          },
        ]
      },
    ]
  }
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = legalPages[slug as keyof typeof legalPages]
  
  if (!page) {
    notFound()
  }

  return (
    <>
    <section className="bg-black p-10 lg:px-20 lg:pt-40 lg:pb-20 min-h-screen">
      <div className="bg-[#707070] lg:px-20">
        <div className="bg-[#ffbf00] px-6 py-20">
          {/* Page Header */}
          <div className="flex flex-col gap-6 justify-center items-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-style italic text-black ">
              {page.title}
            </h1>
            <div className="w-3.5 h-1.5 bg-white transform skew-x-[-200deg]" />
          </div>

          {/* Effective Date and Introduction */}
          <div className="max-w-2xl mx-auto mt-12 text-black">
              <p className="italic font-raleway mb-6 font-[500]">
              <strong>Effective Date:</strong> {page.effectiveDate}
            </p>
            <p className="text-justify leading-relaxed mb-10 font-raleway text-[14px] font-[500] tracking-[1px]">
              {page.introduction}
            </p>
          </div>

          {/* Content Sections */}
          {page.sections.map((section, index) => (
            <div key={index} className="max-w-2xl mx-auto mb-12">
              <h2 className="font-style text-xl !tracking-[3px] italic text-black mb-3">
                {index + 1}. {section.title}
              </h2>
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className="flex-1">
                      {item.subtitle && (
                        <span className="font-raleway font-bold text-black">{item.subtitle}: </span>
                      )}
                      <span className="text-black leading-relaxed font-raleway font-[500]">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom divider */}
          <div className="flex justify-center mt-16">
            <div className="w-3.5 h-1.5 bg-white transform skew-x-[-200deg]" />
          </div>
        </div>
      </div>
    </section>
      <ProductCategory/>
      </>
  )
}

// Generate static pages at build time
export function generateStaticParams() {
  return [
    { slug: 'privacy' },
    { slug: 'terms' },
    { slug: 'conditions' }
  ]
}

// Optional: Add metadata for each page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = legalPages[slug as keyof typeof legalPages]
  
  if (!page) {
    return { title: 'Page Not Found' }
  }

  return {
    title: page.title,
    description: `${page.title} for iLeaf Doors and Windows`
  }
}