import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
            Visit our shop or get in touch for professional auto repair services
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Our Location</h3>
                        <p className="text-muted-foreground">
                          19303 Borrowdale Rd<br />
                          Gunhill, Harare<br />
                          637F+CWM, Zimbabwe
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Phone & Text</h3>
                        <p className="text-muted-foreground mb-2">
                          <a href="tel:+263782842888" className="hover:text-primary transition-colors">
                            +263 782 842 888
                          </a>
                        </p>
                        <div className="flex space-x-2">
                          <Button size="sm" asChild>
                            <a href="tel:+263782842888">
                              <Phone className="mr-2 h-4 w-4" />
                              Call Now
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href="sms:+263782842888">
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Text Us
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:info@passionauto.co.zw" className="hover:text-primary transition-colors">
                            info@passionauto.co.zw
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Business Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 8:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Find Us</h2>
              <Card>
                <CardContent className="p-0">
                  <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">
                      Interactive Google Map<br />
                      19303 Borrowdale Rd, Gunhill, Harare
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Directions</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    We're conveniently located on Borrowdale Road in Gunhill, Harare. 
                    Look for our red signage and professional auto repair facility.
                  </p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• From Harare CBD: Take Borrowdale Road north for approximately 15km</li>
                    <li>• From Borrowdale Shopping Centre: Continue north on Borrowdale Road for 3km</li>
                    <li>• Ample parking available on-site</li>
                    <li>• Customer waiting area with WiFi and refreshments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Emergency Services</h2>
            <p className="text-xl text-muted-foreground">
              Need immediate assistance? We're here to help
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>Emergency Repairs</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Urgent repairs and roadside assistance for critical vehicle issues
                </p>
                <Button size="lg" asChild>
                  <a href="tel:+263782842888">Call Emergency Line</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <span>Quick Quote</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Text us your vehicle details and symptoms for a quick estimate
                </p>
                <Button size="lg" variant="outline" asChild>
                  <a href="sms:+263782842888">Text for Quote</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">We Serve All of Harare</h2>
          <p className="text-xl mb-8 opacity-90">
            Professional auto repair services throughout the greater Harare area
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg mb-8">
            <div>Borrowdale</div>
            <div>Gunhill</div>
            <div>Mount Pleasant</div>
            <div>Avondale</div>
            <div>Newlands</div>
            <div>Highlands</div>
            <div>Eastlea</div>
            <div>Belvedere</div>
            <div>Marlborough</div>
            <div>Chisipite</div>
            <div>Alexandra Park</div>
            <div>Greystone Park</div>
          </div>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
            <a href="tel:+263782842888">Schedule Your Service</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;