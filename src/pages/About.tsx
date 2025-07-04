import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Award, Shield, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: Clock, number: "5+", label: "Years in Harare" },
    { icon: Users, number: "500+", label: "Happy Customers" },
    { icon: Award, number: "100%", label: "Certified Technicians" },
    { icon: Star, number: "4.9", label: "Customer Rating" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We stand behind our work with comprehensive warranties and rigorous quality checks on every repair."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our priority. We provide transparent communication and honest pricing on every service."
    },
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Our team consists of certified professionals specializing in hybrid electric vehicle technology."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Passion Auto Services</h1>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
            Harare's trusted hybrid electric auto repair specialists, committed to excellence since 2019
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2019, Passion Auto Services began with a simple mission: to provide Harare with 
                the most reliable and professional hybrid electric vehicle repair services. As Zimbabwe's 
                automotive landscape evolved with more hybrid vehicles, we saw the need for specialized expertise.
              </p>
              <p className="text-muted-foreground mb-6">
                Our founder, a certified automotive technician with over a decade of experience, recognized 
                that traditional auto repair shops weren't equipped to handle the complex electrical systems 
                in modern hybrid vehicles. This gap in the market inspired the creation of Passion Auto Services.
              </p>
              <p className="text-muted-foreground mb-8">
                Today, we're proud to be Harare's leading hybrid electric auto repair specialists, with a 
                team of certified technicians who undergo continuous training to stay current with the latest 
                automotive technologies and manufacturer specifications.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Visit Our Shop</Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Our professional auto repair facility"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Certified professionals dedicated to keeping your vehicle running smoothly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Lead Technician"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">James Munyuki</h3>
                <p className="text-primary font-medium mb-2">Lead Technician</p>
                <p className="text-muted-foreground text-sm">
                  Certified hybrid specialist with 8+ years experience. Expert in Toyota, Honda, and Nissan hybrid systems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b3fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Diagnostic Specialist"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Sarah Chikwanha</h3>
                <p className="text-primary font-medium mb-2">Diagnostic Specialist</p>
                <p className="text-muted-foreground text-sm">
                  Advanced diagnostics expert specializing in electrical systems and computer-controlled components.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Service Manager"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">David Madhuku</h3>
                <p className="text-primary font-medium mb-2">Service Manager</p>
                <p className="text-muted-foreground text-sm">
                  Customer service expert ensuring transparent communication and satisfaction on every repair.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Experience the Passion Auto Difference
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your service today and see why we're Harare's trusted choice for hybrid auto repair
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/quote">Get A Free Quote</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Visit Our Shop</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;