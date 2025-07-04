import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare, Clock, Shield, Star, MapPin, Check } from "lucide-react";
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
  const services = [{
    image: generalAutoRepairs,
    title: "GENERAL AUTO REPAIRS"
  }, {
    image: brakeServices,
    title: "BRAKES"
  }, {
    image: oilChange,
    title: "OIL CHANGE"
  }, {
    image: tuneUps,
    title: "TUNE-UPS"
  }, {
    image: suspensionShocks,
    title: "SUSPENSION & SHOCKS"
  }, {
    image: exhaustSystem,
    title: "EXHAUST"
  }, {
    image: acRepair,
    title: "AC REPAIR/RECHARGE"
  }, {
    image: checkEngine,
    title: "CHECK ENGINE LIGHT"
  }];
  const valueProps = [{
    icon: Clock,
    title: "Fast & Friendly Service",
    description: "We understand how inconvenient car problems can be. That's why we offer fast and reliable services to get you on the road as quickly as possible."
  }, {
    icon: Star,
    title: "Competitive Auto Repair Quotes",
    description: "We are committed to providing complete auto repair services that are both highly dependable and budget-friendly."
  }, {
    icon: Shield,
    title: "Expert Auto Repair Technicians",
    description: "Our auto repair technicians are experienced & highly trained, with specialized certification in hybrid vehicle systems."
  }, {
    icon: Check,
    title: "Quality Services & Repairs",
    description: "We provide quality inspections, tune-ups, and repair services to ensure the safety and performance of your vehicle."
  }];
  return <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `radial-gradient(circle at top left, rgba(40, 40, 40, 0.79) 1%, rgba(102, 102, 102, 0.48) 100%), url(${heroBackground})`
      }}></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-rubik font-bold uppercase text-[64px] leading-[1.1em] mb-6">PASSION PERFORMANCE</h1>
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
              Rely On Passion Performance For Fast & Reliable Auto Repairs!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => <div key={index} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: `url(${service.image})`
            }} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="text-white font-bold text-center text-sm md:text-base lg:text-lg">
                    {service.title}
                  </h3>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Value Propositions & About Combined Section */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Red Panel */}
          <div className="bg-primary text-primary-foreground p-16">
            <div className="space-y-12">
              {valueProps.map((prop, index) => <div key={index} className="flex items-start gap-4">
                  <div className="text-3xl font-bold mt-1">&gt;&gt;</div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">{prop.title}</h3>
                    <p className="text-sm leading-relaxed opacity-90">
                      {prop.description}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Right White Panel */}
          <div className="bg-white p-16">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                YOUR LOCAL AUTO REPAIR SHOP
              </h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  At Passion Performance Services, we are committed to providing complete auto repair services 
                  that are both highly dependable and budget-friendly. You can rely on us to give your car, truck, or 
                  SUV the care it needs.
                </p>
                
                <p className="leading-relaxed">
                  The auto repair technicians at Passion Performance Services are certified by the National 
                  Institute for Automotive Service Excellence. Additionally, we have also been trained and certified through 
                  several car manufacturers to do repairs on their particular make and model of cars.
                </p>
                
                <p className="leading-relaxed">
                  Our experienced auto repair experts will perform extensive inspections, 
                  tune-ups, and repair services to ensure the safety and performance of your 
                  vehicle. Our experienced auto repair center will get you safely back on the 
                  open road as soon as possible!
                </p>
              </div>

              <div className="mt-12">
                <p className="text-gray-600 mb-4">
                  For a dependable auto repair center in Harare, rely on Passion Performance Services to provide exceptional service at 
                  competitive rates. Some of the auto services we provide include:
                </p>
                
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Air-conditioning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Exterior and interior lights
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Cooling system
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Batteries and engine parts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Oil and fluid levels
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Brakes and suspension
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Exhaust and fuel systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Steering and suspension
                  </li>
                </ul>

                <div className="mt-8">
                  <p className="text-gray-600 mb-2">Get a quote by contacting us today at</p>
                  <a href="tel:+263782842888" className="text-primary font-bold text-lg hover:underline">
                    +263 782 842 888
                  </a>
                  <span className="text-gray-600"> or fill out our online quote form!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <a href="tel:+263782842888" className="text-4xl font-bold hover:text-primary transition-colors">
                +263 782 842 888
              </a>
            </div>
            <div>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-semibold">
                <Link to="/quote">ONLINE QUOTE FORM</Link>
              </Button>
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
    </div>;
};
export default Home;