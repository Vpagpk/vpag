import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="relative py-20 bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-12 animate-fade-in">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Visit Our <span className="text-primary">Studio Location</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Located in the heart of Pakistan's cultural capital, our studio welcomes visitors, students, and potential clients.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-8">
          {/* Address Card */}
          <div className="mx-auto max-w-md bg-card border border-border rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in animate-delay-200">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">Studio Address</h3>
            <p className="text-muted-foreground leading-relaxed">
              Lahore, Punjab, Pakistan<br />
              Pakistan's premier cultural dance studio
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="mx-auto max-w-5xl animate-fade-in animate-delay-300">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7050398.57309783!2d68.9966984!3d30.36295725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6078332b9bab122d%3A0x3431c7bc5df9f9ec!2sVPAG(Versatile%20Performing%20Art%20Group)%20vpag%20lahore!5e0!3m2!1sen!2s!4v1763971504265!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VPAG Studio Location in Lahore, Pakistan"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;