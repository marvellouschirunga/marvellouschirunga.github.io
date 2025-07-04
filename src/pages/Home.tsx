import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone,
  MessageSquare,
  Clock,
  Shield,
  Star,
  MapPin,
  Check
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import generalAutoRepairs from "@/assets/general-auto-repairs.jpg";
import brakeServices from "@/assets/brake-services.jpg";
import oilChange from "@/assets/oil-change.jpg";
import tuneUps from "@/assets/tune-ups.jpg";
import suspensionShocks from "@/assets/suspension-shocks.jpg";
import exhaustSystem from "@/assets/exhaust-system.jpg";
import acRepair from "@/assets/ac-repair.jpg";
import checkEngine from "@/assets/check-engine.jpg";

const Home = () => {
  const services = [
    {
      image: generalAutoRepairs,
      title: "GENERAL AUTO REPAIRS"
    },
    {
      image: brakeServices,
      title: "BRAKES"
    },
    {
      image: oilChange,
      title: "OIL CHANGE"
    },
    {
      image: tuneUps,
      title: "TUNE-UPS"
    },
    {
      image: suspensionShocks,
      title: "SUSPENSION & SHOCKS"
    },
    {
      image: exhaustSystem,
      title: "EXHAUST"
    },
    {
      image: acRepair,
      title: "AC REPAIR/RECHARGE"
    },
    {
      image: checkEngine,
      title: "CHECK ENGINE LIGHT"
    }
  ];

  const valueProps = [
    {
      icon: Clock,
      title: "Fast & Friendly Service",
      description: "We understand how inconvenient car problems can be. That's why we offer fast and reliable services to get you on the road as quickly as possible."
    },
    {
      icon: Star,
      title: "Competitive Auto Repair Quotes",
      description: "We are committed to providing complete auto repair services that are both highly dependable and budget-friendly."
    },
    {
      icon: Shield,
      title: "Expert Auto Repair Technicians",
      description: "Our auto repair technicians are experienced & highly trained, with specialized certification in hybrid vehicle systems."
    },
    {
      icon: Check,
      title: "Quality Services & Repairs",
      description: "We provide quality inspections, tune-ups, and repair services to ensure the safety and performance of your vehicle."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBackground})`
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            PASSION AUTO SERVICES
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200">
            Your Harare Hybrid Electric Auto Repair Shop For Over 5 Years
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              <a href="tel:+263782842888">
                <Phone className="mr-2 h-5 w-5" />
                CALL NOW
              </a>
            </Button>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              <a href="sms:+263782842888">
                <MessageSquare className="mr-2 h-5 w-5" />
                TEXT US
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Harare Hybrid Electric Auto Repair Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Rely On Passion Auto For Fast & Reliable Auto Repairs!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${service.image})`
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="text-white font-bold text-center text-sm md:text-base lg:text-lg">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <prop.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{prop.title}</h3>
                <p className="text-muted-foreground text-sm">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Your Local Auto Repair Shop
              </h2>
              <p className="text-muted-foreground mb-6">
                At Passion Auto Services, we are committed to providing complete hybrid electric auto repair services 
                that are both highly dependable and budget-friendly. You can rely on us to give your car, truck, or SUV the care it needs.
              </p>
              <p className="text-muted-foreground mb-6">
                Our auto repair technicians are certified specialists in hybrid vehicle systems. Additionally, we have 
                been trained and certified through several car manufacturers to do repairs on their particular make and model of cars.
              </p>
              <p className="text-muted-foreground mb-8">
                Our experienced auto repair experts will perform extensive inspections, tune-ups, and repair services 
                to ensure the safety and performance of your vehicle. Our experienced auto repair center will get you 
                safely back on the open road as soon as possible!
              </p>
              <Button asChild size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional auto repair technician working on hybrid vehicle"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Your Vehicle Serviced?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Call us today for a free quote or to schedule your appointment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+263782842888">
                <Phone className="mr-2 h-5 w-5" />
                +263 782 842 888
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/quote">GET A FREE QUOTE</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center text-lg">
            <MapPin className="mr-2 h-5 w-5" />
            <span>19303 Borrowdale Rd, Gunhill, Harare</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;