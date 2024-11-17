import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "About",
    links: [
      { name: "Zoom Blog", href: "#" },
      { name: "Customers", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Investors", href: "#" },
      { name: "Press", href: "#" },
      { name: "ESG Responsibility", href: "#" },
      { name: "Media Kit", href: "#" },
    ],
  },
  {
    title: "Download",
    links: [
      { name: "Meetings Client", href: "#" },
      { name: "Zoom Rooms Client", href: "#" },
      { name: "Browser Extension", href: "#" },
      { name: "Outlook Plug-in", href: "#" },
      { name: "iPhone/iPad App", href: "#" },
      { name: "Android App", href: "#" },
    ],
  },
  {
    title: "Sales",
    links: [
      { name: "1.888.799.9666", href: "tel:1.888.799.9666" },
      { name: "Contact Sales", href: "#" },
      { name: "Plans & Pricing", href: "#" },
      { name: "Request a Demo", href: "#" },
      { name: "Webinars and Events", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Test Zoom", href: "#" },
      { name: "Account", href: "#" },
      { name: "Support Center", href: "#" },
      { name: "Live Training", href: "#" },
      { name: "Feedback", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Developer Support", href: "#" },
      { name: "Privacy, Security, Legal Policies", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: <FaFacebookF />, href: "#" },
  { name: "Twitter", icon: <FaTwitter />, href: "#" },
  { name: "LinkedIn", icon: <FaLinkedinIn />, href: "#" },
  { name: "YouTube", icon: <FaYoutube />, href: "#" },
  { name: "Instagram", icon: <FaInstagram />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto py-12 px-4 lg:px-0 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img className="h-10" src="/Zoom_logo.svg" alt="Zoom" />
            <p className="text-gray-500 text-base">
              Zoom helps you express ideas, connect to others, and build toward
              a future limited only by your imagination.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerLinks.slice(0, 2).map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    {section.title}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {section.links.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerLinks.slice(2).map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    {section.title}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {section.links.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 Zoom Video Communications, Inc. All rights reserved.
            Terms | Privacy Policy | Cookie Preferences | Do Not Sell My
            Personal Information
          </p>
        </div>
      </div>
    </footer>
  );
}
