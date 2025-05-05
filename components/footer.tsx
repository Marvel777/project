import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 mt-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-lg">
              <span className="text-primary">Dev</span>Portfolio
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Crafting exceptional digital experiences
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="mailto:email@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              © {currentYear} DevPortfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}