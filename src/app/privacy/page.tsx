import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy – AUC Store",
  description: "Learn how AUC Store collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Introduction",
    content: `AUC Store ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, mobile application, and related services. By using AUC Store, you agree to the collection and use of information in accordance with this policy.`,
  },
  {
    title: "2. Information We Collect",
    content: [
      "Personal Identification: Name, email address, phone number, date of birth.",
      "Government IDs (for verification): Aadhaar number, PAN card details — encrypted and stored securely.",
      "Business Information: GST number, business name, store description, operating hours.",
      "Financial Information: Payment method details processed through secure payment gateways. We do not store card numbers.",
      "Usage Data: Pages visited, features used, time spent, click behavior for improving the platform.",
      "Device Information: IP address, browser type, device model, operating system.",
      "Location Data: Approximate location for showing nearby services and engineers (with your permission).",
      "Communications: Messages sent through our in-app chat system.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: [
      "To create and manage your Store ID and account.",
      "To process transactions and send related notifications.",
      "To connect customers with sellers, engineers, and freelancers.",
      "To verify identities and prevent fraud.",
      "To send order updates, service notifications, and important platform alerts.",
      "To improve our platform through analytics and user feedback.",
      "To comply with legal obligations and government directives.",
      "To personalize your experience and recommend relevant products/services.",
    ],
  },
  {
    title: "4. Information Sharing",
    content: [
      "We do not sell your personal data to third parties.",
      "We share necessary information with service providers (payment gateways, logistics partners, SMS services) under strict confidentiality agreements.",
      "Seller/Engineer profiles and ratings are publicly visible on their Store ID page.",
      "We may disclose information to law enforcement when legally required.",
      "Aggregated, anonymized data may be used for research and analytics.",
    ],
  },
  {
    title: "5. Data Security",
    content: `We implement industry-standard security measures including SSL/TLS encryption for data in transit, AES-256 encryption for sensitive data at rest, two-factor authentication options, regular security audits, and access controls restricting employee access to your data on a need-to-know basis. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain your personal data for as long as your account is active or as needed to provide services. After account deletion, we retain certain data for up to 90 days for fraud prevention and legal compliance, after which it is permanently deleted from our systems. Transaction records may be retained for up to 7 years as required by Indian tax laws.`,
  },
  {
    title: "7. Your Rights",
    content: [
      "Right to Access: Request a copy of your personal data we hold.",
      "Right to Rectification: Correct inaccurate or incomplete data.",
      "Right to Erasure: Request deletion of your account and data (see Account Deletion Policy).",
      "Right to Portability: Request your data in a machine-readable format.",
      "Right to Withdraw Consent: Opt out of marketing communications at any time.",
      "Right to Object: Object to certain types of processing.",
    ],
  },
  {
    title: "8. Cookies",
    content: `We use cookies and similar tracking technologies to enhance your experience. Essential cookies are required for platform functionality. Analytics cookies help us understand usage patterns. You can manage cookie preferences through your browser settings. Disabling essential cookies may affect platform functionality.`,
  },
  {
    title: "9. Minors & Student Users",
    content: `AUC Store welcomes students and young users for browsing, buying products, and requesting quotations. Users under 18 years of age are permitted to use the platform with parental or guardian consent.\n\nBusiness features — including creating a Seller Store ID, Engineer profile, Freelancer profile, or Influencer profile — are restricted to users aged 18 and above or legally registered entities.\n\nWe do not knowingly collect sensitive personal information from children under 13 without verifiable parental consent. If you believe a child under 13 has provided sensitive data without consent, please contact us at support@aucstore.in and we will promptly review and delete such data.`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We may update this Privacy Policy periodically. We will notify you of significant changes via email or in-app notification at least 30 days before the changes take effect. Continued use of the platform after changes constitutes acceptance of the updated policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      subtitle="How AUC Store collects, uses, and protects your personal information."
      lastUpdated="June 18, 2026"
      sections={sections}
    />
  );
}
