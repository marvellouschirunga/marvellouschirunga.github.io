import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare, Clock, Shield, Star, MapPin, Check } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import brakeServices from "@/assets/brake-services.jpg";
import exhaustSystem from "@/assets/exhaust-system.jpg";
import acRepair from "@/assets/ac-repair.jpg";
import hybridWaterPumpsPromo from "@/assets/hybrid-water-pumps-promo.jpg";
const Home = () => {
  const services = [{
    image: "/lovable-uploads/f44c2ea2-528b-43ab-9612-81fb4f956ee6.png",
    title: "HYBRID BATTERY SERVICE"
  }, {
    image: "/lovable-uploads/bf33478f-38a4-44ba-9c4b-af79389a1ea6.png",
    title: "ENGINE DIAGNOSTICS"
  }, {
    image: "/lovable-uploads/37ba0a86-0031-4408-9b41-dfa56ed77bdc.png",
    title: "HONDA SPECIALIST"
  }, {
    image: "/lovable-uploads/458f3c18-78d0-4364-a1f5-fd76487d2f1c.png",
    title: "PROFESSIONAL DIAGNOSTICS"
  }, {
    image: "/lovable-uploads/53b4cf0a-e302-4a79-aa6d-cc7d78fddb94.png",
    title: "HYBRID VEHICLE SERVICE"
  }, {
    image: brakeServices,
    title: "BRAKES"
  }, {
    image: exhaustSystem,
    title: "EXHAUST"
  }, {
    image: acRepair,
    title: "AC REPAIR/RECHARGE"
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
          <h1 className="relative font-rubik font-bold uppercase text-[64px] md:text-[80px] lg:text-[96px] leading-[0.9em] mb-6 hero-title">
            <span className="relative z-10 bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              PASSION
            </span>
            <br />
            <span className="relative z-10 bg-gradient-to-r from-orange-200 via-white to-orange-200 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
              PERFORMANCE
            </span>
            {/* Glowing background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-3xl animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-2xl animate-pulse delay-500"></div>
            {/* Decorative gears */}
            <div className="absolute -right-8 top-4 text-primary/30 animate-spin-slow">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9l-5.18 4.18L18.18 20H12l-6.18-6.82L0 9l6.91-.74L12 2z"/>
              </svg>
            </div>
            <div className="absolute -left-6 bottom-2 text-primary/20 animate-spin-slow delay-1000">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9l-5.18 4.18L18.18 20H12l-6.18-6.82L0 9l6.91-.74L12 2z"/>
              </svg>
            </div>
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
                    Hybrid battery service & diagnostics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Honda & Toyota hybrid specialists
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Professional engine diagnostics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Air-conditioning & cooling systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Oil and fluid services
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
                    Electrical system diagnostics
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

      {/* Expert Technician Showcase */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Expert Hybrid Battery Specialists
              </h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-xl mb-6 text-gray-200">
                Our certified technicians have specialized training in hybrid vehicle systems, 
                with hands-on experience servicing Toyota and Honda hybrid batteries.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Certified hybrid battery diagnostics & repair</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Professional battery reconditioning services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Honda & Toyota hybrid specialists</span>
                </div>
              </div>
              <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90" asChild>
                <Link to="/quote">Get Expert Assessment</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/32619c48-297d-4fd4-b48a-66e346b7b97f.png"
                  alt="Expert technician working on hybrid battery"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">5+ Years</p>
                <p className="text-sm">Hybrid Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Warning Lights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/d3d9cd73-2ec0-4c23-9cbd-2e76ad382126.png"
                  alt="Honda dashboard with diagnostic warning lights"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-red-500 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">Warning Lights?</p>
                <p className="text-sm">We Can Help!</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Dashboard Warning Lights Diagnosed
              </h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-xl mb-6 text-gray-600">
                Don't ignore those warning lights! Our advanced diagnostic equipment can quickly 
                identify issues in your Honda, Toyota, or any hybrid vehicle.
              </p>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Check Engine Light diagnostics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Hybrid system warning analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Battery & charging system alerts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Engine temperature & coolant issues</span>
                </div>
              </div>
              <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border-l-4 border-primary">
                <p className="text-gray-800 font-semibold mb-2">Free Diagnostic Check</p>
                <p className="text-gray-600">Bring your vehicle in for a complimentary diagnostic scan and consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Filter & Maintenance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Complete Maintenance Services
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Air Filter Replacement</h3>
                <p className="text-gray-600">Clean air filters improve engine performance and fuel efficiency</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Engine Components</h3>
                <p className="text-gray-600">Professional inspection and replacement of worn engine parts</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-full overflow-hidden shadow-2xl border-8 border-primary w-80 h-80 mx-auto">
                <img 
                  src="/lovable-uploads/ea06f484-e3c5-4e3f-a867-6ea06f99d5f3.png"
                  alt="Air filter maintenance service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full shadow-lg">
                <span className="font-bold">Professional Service</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Preventive Maintenance</h3>
                <p className="text-gray-600">Regular maintenance keeps your vehicle running smoothly</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Quality Parts</h3>
                <p className="text-gray-600">We use only genuine and high-quality replacement parts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Promotion - Hybrid Water Pumps */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={hybridWaterPumpsPromo}
            alt="Passion Performance Professional Hybrid Water Pumps Service"
            className="w-full h-full object-cover object-center transform scale-150 hover:scale-155 transition-transform duration-700"
            style={{ objectPosition: 'center 60%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/30"></div>
        </div>
        <div className="relative bg-black/20 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Hybrid Water Pumps Available
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Professional installation and replacement service for Honda and Toyota hybrid vehicles
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="tel:+263782842888">Call for Quote</a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/quote">Get Details</Link>
                </Button>
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
            <Button size="lg" variant="outline" asChild className="border-white text-foreground hover:bg-white hover:text-primary">
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