import { useEffect } from 'react'

export default function Legal() {
  useEffect(() => {
    document.title = 'Privacy & Terms — ITB-MED'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'ITB-MED privacy policy and terms of use. Information about data handling, cookies, GDPR and CCPA rights.')
    else {
      const m = document.createElement('meta')
      m.name = 'description'
      m.content = 'ITB-MED privacy policy and terms of use.'
      document.head.appendChild(m)
    }
  }, [])

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="animate-blur-fade-in">
          <p className="text-accent-600 font-medium text-sm tracking-wider uppercase mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.05] text-navy-900 mb-8">
            Privacy & Terms
          </h1>
        </div>

        <div className="space-y-16 text-navy-700 leading-relaxed text-[15px]">
          {/* Privacy Policy */}
          <div>
            <h2 className="font-serif text-3xl text-navy-900 mb-6">Privacy Policy</h2>
            <p className="mb-4">Last updated: January 2026</p>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">Information We Collect</h3>
                <p>
                  This website collects minimal information. When you use our contact form, we collect only the information you voluntarily provide: your name, email address, and message content. We do not use analytics services, tracking cookies, or third-party data collection tools on this website.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">Cookies</h3>
                <p>
                  This website uses only essential cookies required for basic website functionality. We do not use advertising cookies, analytics cookies, or any third-party tracking technologies.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">How We Use Your Information</h3>
                <p>Information submitted through our contact form is used solely to respond to your inquiry. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">Your Rights (GDPR)</h3>
                <p className="mb-3">Under the General Data Protection Regulation (GDPR), if you are in the European Economic Area, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">Your Rights (CCPA)</h3>
                <p>If you are a California resident, you have the right to know what personal information we collect, request deletion of your information, and opt out of the sale of your personal information. ITB-MED does not sell personal information.</p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">Data Controller</h3>
                <p>
                  ITB-MED AB, Hagaplan 4, 113 68 Stockholm, Sweden is the data controller responsible for your personal data. For privacy inquiries, please use our{' '}
                  <a href="/contact" className="text-accent-600 hover:text-accent-700 underline">contact form</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Terms of Use */}
          <div>
            <h2 className="font-serif text-3xl text-navy-900 mb-6">Terms of Use</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">Informational Purpose</h3>
                <p>
                  The information provided on this website is for general informational purposes only. It is not intended as medical advice, diagnosis, or treatment recommendation. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">No Medical Advice</h3>
                <p>
                  Nothing on this website should be construed as medical advice or as a recommendation for any specific treatment or course of action. The information about TCD601 and our clinical trials is provided for educational purposes and should not replace professional medical consultation.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">Intellectual Property</h3>
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the property of ITB-MED AB or its licensors and is protected by applicable intellectual property laws. Unauthorized reproduction, distribution, or use of this content is prohibited.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">Forward-Looking Statements</h3>
                <p>
                  This website may contain forward-looking statements about ITB-MED's clinical programs and future plans. These statements involve risks and uncertainties, and actual results may differ materially from those expressed or implied.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">External Links</h3>
                <p>
                  This website may contain links to external websites. ITB-MED is not responsible for the content, privacy practices, or availability of these external sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
