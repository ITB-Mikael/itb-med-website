import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/logo.png" alt="ITB-MED logo" className="h-8 brightness-0 invert opacity-80 mb-4" />
            <p className="text-sm leading-relaxed text-navy-400">
              Pioneering immunosuppression-free transplantation through targeted T-cell modulation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-navy-400 mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/science', label: 'Science' },
                { to: '/team', label: 'Team' },
                { to: '/pipeline', label: 'Pipeline' },
                { to: '/zelarion', label: 'Zelarion' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-navy-300 hover:text-accent-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://careers.itb-med.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-navy-300 hover:text-accent-400 transition-colors duration-200">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-navy-400 mb-5">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/legal" className="text-sm text-navy-300 hover:text-accent-400 transition-colors duration-200">
                  Privacy & Terms
                </Link>
              </li>
              <li>
                <Link to="/expanded-access" className="text-sm text-navy-300 hover:text-accent-400 transition-colors duration-200">
                  Expanded Access Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-navy-300 hover:text-accent-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-navy-400 mb-5">Offices</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-navy-200">Stockholm</p>
                <p className="text-navy-400">Hagaplan 4, 113 68 Stockholm, Sweden</p>
                <p className="text-navy-500 text-xs mt-1">Located in Forskaren — a science hub near Karolinska Hospital</p>
              </div>
              <div>
                <p className="font-medium text-navy-200">New York</p>
                <p className="text-navy-400">110 East 59th St FL 28, New York, NY 10022</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-navy-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">
            &copy; {new Date().getFullYear()} ITB-MED AB. All rights reserved.
          </p>
          <a
            href="https://www.linkedin.com/company/itb-med/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-navy-400 hover:text-accent-400 transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
