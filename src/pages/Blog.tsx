import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs Your Hybrid Vehicle Needs Professional Attention",
      excerpt: "Learn to identify common warning signs that indicate your hybrid vehicle requires immediate professional diagnosis and repair services.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Hybrid Maintenance"
    },
    {
      id: 2,
      title: "Understanding Hybrid Battery Health and Maintenance",
      excerpt: "A comprehensive guide to maintaining your hybrid battery for optimal performance and longevity in Zimbabwe's climate conditions.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-03-10",
      readTime: "7 min read",
      category: "Battery Care"
    },
    {
      id: 3,
      title: "The Complete Guide to Inverter Repairs in Hybrid Vehicles",
      excerpt: "Everything you need to know about hybrid inverter systems, common problems, and professional repair solutions.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "Technical Guides"
    },
    {
      id: 4,
      title: "Seasonal Maintenance Tips for Harare's Climate",
      excerpt: "How to prepare your hybrid vehicle for Zimbabwe's wet and dry seasons to ensure year-round reliability.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-02-28",
      readTime: "4 min read",
      category: "Seasonal Care"
    },
    {
      id: 5,
      title: "Check Engine Light: What It Means in Hybrid Vehicles",
      excerpt: "Decode your hybrid vehicle's check engine light and understand when to seek immediate professional diagnosis.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-02-20",
      readTime: "5 min read",
      category: "Diagnostics"
    },
    {
      id: 6,
      title: "Cost-Effective Hybrid Maintenance in Zimbabwe",
      excerpt: "Smart strategies for maintaining your hybrid vehicle while managing costs in the current economic environment.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-02-15",
      readTime: "6 min read",
      category: "Money Saving"
    }
  ];

  const categories = [
    "All Posts",
    "Hybrid Maintenance",
    "Battery Care",
    "Technical Guides",
    "Seasonal Care",
    "Diagnostics",
    "Money Saving"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
            Expert insights, maintenance tips, and automotive knowledge from Harare's hybrid specialists
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button key={category} variant="outline" size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Article</h2>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h3>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <Button asChild>
                    <Link to={`/blog/${blogPosts[0].id}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest automotive tips and industry insights
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Your Vehicle?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our expert technicians are here to help with any automotive concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/quote">Get A Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;