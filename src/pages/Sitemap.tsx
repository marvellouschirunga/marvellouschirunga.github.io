import { Link } from "react-router-dom";

const Sitemap = () => {
  const siteStructure = [
    {
      section: "Main Pages",
      pages: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact Us", path: "/contact" },
        { name: "Get A Quote", path: "/quote" },
        { name: "Our Blog", path: "/blog" }
      ]
    },
    {
      section: "Services",
      pages: [
        { name: "Hybrid Vehicle Diagnostics & Repairs", path: "/services/hybrid-diagnostics" },
        { name: "General Auto Repair", path: "/services/auto-repair" },
        { name: "Inverter Repairs & Replacements", path: "/services/inverter-repairs" },
        { name: "AC Repair & Recharge", path: "/services/ac-repair" },
        { name: "Check Engine Light Diagnostics", path: "/services/check-engine" },
        { name: "Oil Change Services", path: "/services/oil-change" },
        { name: "Brake Services", path: "/services/brake-services" },
        { name: "Tune-Ups", path: "/services/tune-ups" },
        { name: "Dual Clutch Fluid Replacement", path: "/services/dual-clutch" },
        { name: "Hybrid Truck Conversion", path: "/services/truck-conversion" }
      ]
    },
    {
      section: "Information",
      pages: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Sitemap", path: "/sitemap" }
      ]
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
        
        <p className="text-muted-foreground mb-12">
          Navigate through all pages and services available on the Passion Auto Services website.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteStructure.map((section, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-primary">{section.section}</h2>
              <ul className="space-y-2">
                {section.pages.map((page, pageIndex) => (
                  <li key={pageIndex}>
                    <Link 
                      to={page.path}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Quick Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Phone & Text</h3>
              <p className="text-muted-foreground">
                <a href="tel:+263782842888" className="hover:text-primary transition-colors">
                  +263 782 842 888
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Email</h3>
              <p className="text-muted-foreground">
                <a href="mailto:info@passionauto.co.zw" className="hover:text-primary transition-colors">
                  info@passionauto.co.zw
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Location</h3>
              <p className="text-muted-foreground">
                19303 Borrowdale Rd<br />
                Gunhill, Harare
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Mon-Fri: 8 AM - 6 PM<br />
                Sat: 8 AM - 2 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;