import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageSquare, CheckCircle, Clock, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    serviceType: "",
    description: "",
    urgency: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Quote request:", formData);
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 2 hours with your estimate.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleYear: "",
      serviceType: "",
      description: "",
      urgency: ""
    });
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const serviceTypes = [
    "Hybrid Vehicle Diagnostics",
    "General Auto Repair",
    "Inverter Repair/Replacement",
    "AC Repair/Recharge",
    "Check Engine Light",
    "Oil Change",
    "Brake Service",
    "Tune-Up",
    "Suspension/Shocks",
    "Exhaust System",
    "Other"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get A Free Quote</h1>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
            Get an accurate estimate for your vehicle repair needs
          </p>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Need An Immediate Quote?</h2>
            <p className="text-muted-foreground">Get in touch directly for faster service</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" asChild className="flex-1">
              <a href="tel:+263782842888">
                <Phone className="mr-2 h-5 w-5" />
                Call +263 782 842 888
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="flex-1">
              <a href="sms:+263782842888">
                <MessageSquare className="mr-2 h-5 w-5" />
                Text Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Request Your Free Quote</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you with an accurate estimate within 2 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>

                    {/* Vehicle Information */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">Vehicle Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="vehicleMake">Make *</Label>
                          <Input
                            id="vehicleMake"
                            placeholder="e.g., Toyota"
                            value={formData.vehicleMake}
                            onChange={(e) => handleInputChange("vehicleMake", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="vehicleModel">Model *</Label>
                          <Input
                            id="vehicleModel"
                            placeholder="e.g., Prius"
                            value={formData.vehicleModel}
                            onChange={(e) => handleInputChange("vehicleModel", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="vehicleYear">Year *</Label>
                          <Input
                            id="vehicleYear"
                            placeholder="e.g., 2020"
                            value={formData.vehicleYear}
                            onChange={(e) => handleInputChange("vehicleYear", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">Service Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="serviceType">Service Type *</Label>
                          <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceTypes.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="urgency">Urgency</Label>
                          <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="How urgent?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="emergency">Emergency (Same day)</SelectItem>
                              <SelectItem value="urgent">Urgent (Within 2-3 days)</SelectItem>
                              <SelectItem value="normal">Normal (Within a week)</SelectItem>
                              <SelectItem value="flexible">Flexible timing</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Problem Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Please describe the issue, symptoms, or work needed..."
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        required
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>What To Expect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Quick Response</h4>
                      <p className="text-sm text-muted-foreground">We'll contact you within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Accurate Pricing</h4>
                      <p className="text-sm text-muted-foreground">Transparent, upfront estimates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">No Obligation</h4>
                      <p className="text-sm text-muted-foreground">Free quotes with no pressure</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For urgent repairs or emergency situations, call us directly
                  </p>
                  <Button asChild className="w-full">
                    <a href="tel:+263782842888">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Emergency Line
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>8:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;