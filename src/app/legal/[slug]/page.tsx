import { notFound } from 'next/navigation'

const legalPages = {
  privacy: {
    title: 'Privacy Policy',
    content: (
      <div>
        <p>We collect and use your information to provide our services...</p>
        <h2>Information We Collect</h2>
        <p>Personal information you provide directly...</p>
        <h2>How We Use Your Information</h2>
        <p>We use your information to...</p>
      </div>
    )
  },
  terms: {
    title: 'Terms of Service',
    content: (
      <div>
        <p>By using our service, you agree to these terms...</p>
        <h2>Acceptance of Terms</h2>
        <p>These terms constitute a binding agreement...</p>
        <h2>User Responsibilities</h2>
        <p>You are responsible for...</p>
      </div>
    )
  },
  conditions: {
    title: 'Terms and Conditions',
    content: (
      <div>
        <p>These terms and conditions govern your use...</p>
        <h2>General Conditions</h2>
        <p>The following conditions apply...</p>
        <h2>Limitations</h2>
        <p>Our liability is limited to...</p>
      </div>
    )
  }
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = legalPages[slug as keyof typeof legalPages]
  
  if (!page) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{page.title}</h1>
      <div className="prose prose-lg max-w-none">
        {page.content}
      </div>
    </div>
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
    description: `${page.title} for our website`
  }
}