import { Metadata } from "next";
import { Mail, MapPin, Clock, Linkedin, Github, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { socialLinks } from "@/lib/constants";
import { BackForwardButtons } from "@/components/back-forward-button";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export const metadata: Metadata = {
  title: "Contact | Frontend Developer Portfolio",
  description: "Get in touch with me for collaboration, job opportunities, or to discuss your project.",
};

export default function ContactPage() {
  return (
    <div className="container px-4 mx-auto py-24 md:py-32">
      <BackForwardButtons />
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-muted-foreground max-w-2xl">
          Have a project in mind or looking to collaborate? I&lsquo;m open to freelance opportunities and always excited to work on innovative ideas. Let&lsquo;s build something great together.
        </p>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <ContactCard
          icon={ <Mail className="h-6 w-6" /> }
          title="Email"
          description="Feel free to email me directly"
          action={ socialLinks.email }
          actionLabel="mahermarvel@gmail.com"
        />

        <ContactCard
          icon={ <MapPin className="h-6 w-6" /> }
          title="Location"
          description="Currently based in"
          action="#"
          actionLabel="Egypt, Giza"
        />

        <ContactCard
          icon={ <Clock className="h-6 w-6" /> }
          title="Availability"
          description="Currently available for new projects"
          action="#"
          actionLabel="Operating in Egypt Time Zone (GMT+2)"
        />
        <ContactCard
          icon={ <Phone className="h-6 w-6" /> }
          title="Phone"
          description="Feel free to reach out anytime"
          action="tel:+201200409971" // use your actual number here
          actionLabel="+20 120 040 9971" // readable format
        />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
          <ContactForm />
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-muted/30 p-8 rounded-lg border">
            <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
            <p className="text-muted-foreground mb-8">
              I&apos;m also active on social media and developer communities. Feel free to connect with me on any of these platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a
                  href={ socialLinks.github }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" size="lg" className="w-full" asChild>
                <a
                  href={ socialLinks.linkedin }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
            <div className="mt-8 p-4 bg-card rounded-lg border">
              <p className="text-sm text-center text-muted-foreground">
                <span className="font-medium text-foreground">Current Status:</span> Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  description,
  action,
  actionLabel
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  actionLabel: string;
}) {
  return (
    <Card>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          { icon }
        </div>
        <h3 className="font-medium mb-1">{ title }</h3>
        <p className="text-sm text-muted-foreground mb-3">{ description }</p>
        <Button variant="link" className="p-0 h-auto" asChild>
          <a
            href={ action.startsWith("http") ? action : `mailto:${action}` }
            target={ action.startsWith("http") ? "_blank" : undefined }
            rel={ action.startsWith("http") ? "noopener noreferrer" : undefined }
          >
            { actionLabel }
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}