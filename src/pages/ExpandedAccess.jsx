import { useEffect } from 'react'

export default function ExpandedAccess() {
  useEffect(() => {
    document.title = 'Expanded Access Policy — ITB-MED'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'ITB-MED expanded access policy for TCD601 (siplizumab) — guidelines for requesting access to investigational products outside clinical trials.')
    else {
      const m = document.createElement('meta')
      m.name = 'description'
      m.content = 'ITB-MED expanded access policy for TCD601.'
      document.head.appendChild(m)
    }
  }, [])

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="animate-blur-fade-in">
          <p className="text-accent-600 font-medium text-sm tracking-wider uppercase mb-4">Policy</p>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.05] text-navy-900 mb-8">
            Expanded Access Policy
          </h1>
        </div>

        <div className="prose-navy">
          <div className="space-y-8 text-navy-700 leading-relaxed text-[15px]">
            <div>
              <h2 className="font-serif text-2xl text-navy-900 mb-4">Overview</h2>
              <p>
                ITB-MED is a biopharmaceutical company developing immunomodulatory biologics for patients with life-threatening diseases. Clinical trials are an essential part of the development and registration of innovative products and remain the primary route for patients to access investigational therapies.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-navy-900 mb-4">Clinical Trials as Primary Access Route</h2>
              <p>
                ITB-MED prioritizes clinical trial participation as the preferred method for accessing investigational drugs. Information about available trials can be found at{' '}
                <a href="https://clinicaltrials.gov" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700 underline">clinicaltrials.gov</a>.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-navy-900 mb-4">Expanded Access Programs</h2>
              <p>
                ITB-MED recognizes that some patients cannot participate in clinical trials. The company supports expanded access (also called "compassionate use") programs under FDA regulations for patients with serious or life-threatening conditions.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-navy-900 mb-4">Eligibility Criteria</h2>
              <p className="mb-3">ITB-MED will consider providing investigational drugs when the following conditions are met:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A qualified healthcare provider makes an independent request</li>
                <li>The patient has a serious or life-threatening condition with no satisfactory alternative therapy</li>
                <li>Clinical trial participation is unavailable, including due to geographic barriers</li>
                <li>Potential treatment benefits reasonably outweigh risks</li>
                <li>Adequate drug supply exists without interfering with ongoing studies</li>
                <li>Patient meets additional medical criteria from the development team</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-navy-900 mb-4">Request Process</h2>
              <p>
                Physicians must submit requests to{' '}
                <span className="font-medium text-navy-900">expanded.access@itb-med.com</span>.
                ITB-MED's medical and regulatory experts aim to respond within 5 business days. All submitted information remains confidential and is used solely for eligibility evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
