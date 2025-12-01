import { Building2, Phone, Mail, MapPin, Landmark } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img
              src="/Ribzand Logo copy.jpg"
              alt="Ribzand Logo"
              className="h-40 w-auto"
            />
          </div>
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Residentie Ribzand
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-80 overflow-hidden">
            <img
              src="/logo-gebouw.jpg"
              alt="Residentie Ribzand Building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                  <MapPin className="mr-3 text-blue-600" size={28} />
                  Adres
                </h2>
                <div className="pl-11 space-y-2">
                  <p className="text-lg text-slate-700">Leopold II Laan 3</p>
                  <p className="text-lg text-slate-700">8420 Wenduine</p>
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                    <Landmark className="mr-3 text-blue-600" size={24} />
                    Bankgegevens
                  </h3>
                  <div className="pl-11 space-y-1">
                    <p className="text-slate-700 font-mono">BE31 7380 2389 4455</p>
                    <p className="text-slate-600">KREDBEBB</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                  <Building2 className="mr-3 text-blue-600" size={28} />
                  Syndicus
                </h2>
                <div className="pl-11 space-y-4">
                  <div>
                    <p className="text-lg font-medium text-slate-800">Richard Mos</p>
                    <p className="text-slate-600">Leopold II Laan 3 bus 0401</p>
                    <p className="text-slate-600">8420 Wenduine</p>
                  </div>

                  <div className="space-y-2">
                    <a
                      href="tel:0477918783"
                      className="flex items-center text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      <Phone className="mr-2" size={18} />
                      0477/91 87 83
                    </a>
                    <a
                      href="mailto:info@ribzand.be"
                      className="flex items-center text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      <Mail className="mr-2" size={18} />
                      info@ribzand.be
                    </a>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm text-slate-600">
                      Ondernemersnummer: <span className="font-mono">0875 122 914</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Juridische Informatie
                </h3>
                <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                  <p>
                    <strong>Vereniging met rechtspersoonlijkheid</strong> volgens artikel 577-5BW
                  </p>
                  <p>
                    Deze syndicus is benoemd op de algemene vergadering van <strong>4 maart 2022</strong>.
                  </p>
                  <p>
                    Alle belanghebbenden kunnen de boeken inkijken op bovenstaand adres, zoals voorzien in art 577-8 paragraaf 2 van de wet van 30 juni 1994.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Residentie Ribzand. Alle rechten voorbehouden.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
