import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Car, 
  Wrench, 
  Battery, 
  Check, 
  AirVent, 
  Phone,
  Clock,
  DollarSign,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Car,
      title: "Hybrid Vehicle Diagnostics & Repairs",
      description: "Comprehensive diagnostic services and repairs for all hybrid vehicle makes and models. Our certified technicians use advanced equipment to identify and resolve complex hybrid system issues.",
      features: ["Advanced diagnostic equipment", "Certified hybrid technicians", "All major brands supported", "Warranty included"],
      pricing: "From $85"
    },
    {
      icon: Wrench,
      title: "General Auto Repair",
      description: "Complete automotive repair services for conventional and hybrid vehicles. From routine maintenance to major repairs, we keep your vehicle running at peak performance.",
      features: ["Engine repair", "Transmission service", "Brake systems", "Suspension work"],
      pricing: "From $50"
    },
    {
      icon: Battery,
      title: "Inverter Repairs & Replacements",
      description: "Specialized inverter repair and replacement services for hybrid vehicles. We handle complex electrical components with precision and expertise.",
      features: ["OEM and aftermarket parts", "Professional installation", "Performance testing", "Extended warranty"],
      pricing: "From $350"
    },
    {
      icon: AirVent,
      title: "AC Repair & Recharge",
      description: "Professional air conditioning repair, maintenance, and recharge services. Keep your vehicle comfortable year-round with our expert AC services.",
      features: ["System diagnostics", "Refrigerant recharge", "Component replacement", "Performance optimization"],
      pricing: "From $75"
    },
    {
      icon: Check,
      title: "Check Engine Light Diagnostics",
      description: "Advanced computer diagnostics to identify check engine light issues. We provide detailed analysis and solutions for all engine management problems.",
      features: ["OBD-II scanning", "Component testing", "Repair solutions", "Code clearing"],
      pricing: "From $65"
    },
    {
      icon: Wrench,
      title: "Oil Change & Maintenance",
      description: "Regular oil changes and preventive maintenance services to keep your vehicle running smoothly. We use quality oils and filters for optimal performance.",
      features: ["Premium oil options", "Filter replacement", "Fluid checks", "Multi-point inspection"],
      pricing: "From $35"
    }
  ];

  const additionalServices = [
    "Brake Services & Repair",
    "Tune-Ups & Engine Service",
    "Suspension & Shocks",
    "Exhaust System Repair",
    "Cooling System Service",
    "Battery Replacement",
    "Dual Clutch Fluid Replacement",
    "Hybrid Truck Conversion",
    "Electrical System Repair",
    "Transmission Service"
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick turnaround times to get you back on the road"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Upfront quotes with no hidden fees or surprises"
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "Trained and certified technicians for all services"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Automotive Services</h1>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Comprehensive hybrid electric and conventional auto repair services in Harare
          </p>
          <Button size="lg" asChild>
            <Link to="/quote">Get A Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional automotive repair services with transparent pricing and quality guarantees
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <p className="text-primary font-semibold">{service.pricing}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6">
                    <a href="tel:+263782842888">
                      <Phone className="mr-2 h-4 w-4" />
                      Call for Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Complete automotive solutions for all your vehicle needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Passion Auto?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Service Areas</h2>
          <p className="text-xl mb-8 opacity-90">
            We proudly serve Harare and surrounding areas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg">
            <div>Borrowdale</div>
            <div>Gunhill</div>
            <div>Mount Pleasant</div>
            <div>Avondale</div>
            <div>Newlands</div>
            <div>Highlands</div>
            <div>Eastlea</div>
            <div>Belvedere</div>
          </div>
          <div className="mt-8">
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Schedule Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;