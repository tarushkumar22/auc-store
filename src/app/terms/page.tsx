import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the Terms and Conditions governing your use of the AUC Store platform.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using AUC Store (aucstore.in), its mobile applications, or any related services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you may not use the platform. These terms constitute a legally binding agreement between you and AUC Store.`,
  },
  {
    title: "2. Eligibility",
    content: [
      "General Use (Buying, Browsing, Quotations): AUC Store is open to all users of any age. Students and young users are welcome to browse products, place orders, and request quotations.",
      "Users under 18 must have a parent or guardian's consent to register an account and make purchases. By registering, you confirm that consent has been obtained.",
      "Selling, Freelancing & Business Activities: Creating a Seller Store ID, Engineer Store ID, Freelancer profile, or Influencer profile requires the user to be 18 years of age or older, or a legally registered business entity.",
      "All users must provide accurate, complete, and current information during registration.",
      "You must be a resident of India or an entity registered under Indian law for business/seller accounts.",
      "Accounts found to violate eligibility requirements may be suspended or terminated.",
    ],
  },
  {
    title: "3. Store ID and Account",
    content: [
      "Each user may create one Store ID. Creating multiple accounts to circumvent bans or restrictions is prohibited.",
      "You are responsible for maintaining the confidentiality of your login credentials.",
      "You are responsible for all activities that occur under your account.",
      "Store IDs are non-transferable without written consent from AUC Store.",
      "AUC Store reserves the right to reclaim Store IDs that violate naming policies or are inactive for 12+ months.",
    ],
  },
  {
    title: "4. Seller Obligations",
    content: [
      "Sellers must list products/services accurately with correct descriptions, images, and pricing.",
      "Sellers must fulfill orders within the stated processing time.",
      "Sellers are prohibited from listing counterfeit, stolen, prohibited, or illegal goods.",
      "Sellers must maintain a minimum AUC Score rating to remain active on the platform.",
      "Sellers are responsible for their own GST compliance and tax filings.",
      "Misrepresentation of products or services may result in permanent account suspension.",
    ],
  },
  {
    title: "5. Buyer Obligations",
    content: [
      "Buyers must provide accurate delivery addresses and contact information.",
      "Buyers must not make false complaints or fraudulent return claims.",
      "Buyers agree to pay the listed price plus applicable taxes and delivery charges.",
      "Buyers must not attempt to contact sellers outside the platform to avoid commission.",
    ],
  },
  {
    title: "6. Prohibited Activities",
    content: [
      "Listing or selling illegal, counterfeit, or prohibited items.",
      "Harassment, abuse, or threatening behavior toward other users.",
      "Attempting to manipulate reviews, ratings, or AUC Scores.",
      "Spamming, phishing, or distributing malware through the platform.",
      "Circumventing platform fees by conducting transactions off-platform.",
      "Creating fake accounts or impersonating other users or businesses.",
      "Scraping, copying, or reverse-engineering platform content or technology.",
    ],
  },
  {
    title: "7. Commission and Fees",
    content: `AUC Store charges a commission on product sales ranging from 1% to 5% depending on the category, product value, and seller tier. Service bookings incur lead fees and service commissions. Membership plans, featured listings, and sponsored advertisements are charged separately. All fees are subject to applicable GST. Fee structures may change with 30 days' notice.`,
  },
  {
    title: "8. Intellectual Property",
    content: `All content on AUC Store — including the platform design, logo, software, and technology — is owned by AUC Store and protected by Indian and international intellectual property laws. Users retain ownership of content they upload but grant AUC Store a worldwide, royalty-free license to use, display, and distribute such content for platform operations.`,
  },
  {
    title: "9. Dispute Resolution",
    content: `In case of disputes between buyers and sellers, AUC Store provides a mediation service. Parties must attempt resolution through the platform's dispute center first. Unresolved disputes will be settled by binding arbitration in Dehradun, Uttarakhand, India, under the Arbitration and Conciliation Act, 1996. Indian law governs these terms.`,
  },
  {
    title: "10. Limitation of Liability",
    content: `AUC Store acts as a marketplace intermediary and is not liable for the quality, safety, or legality of products and services listed by third parties. Our maximum liability to any user shall not exceed the amount paid by that user to AUC Store in the 3 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.`,
  },
  {
    title: "11. Termination",
    content: `AUC Store reserves the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, receive persistent negative feedback, or harm the platform community. Users may also close their accounts voluntarily through the Account Deletion process. Termination does not relieve obligations for pending transactions.`,
  },
  {
    title: "12. Modifications",
    content: `AUC Store may modify these Terms at any time. Significant changes will be communicated via email or in-app notification. Continued use of the platform after notification constitutes acceptance of the revised terms.`,
  },
];

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      subtitle="The rules and guidelines governing your use of the AUC Store platform."
      lastUpdated="June 18, 2026"
      sections={sections}
    />
  );
}
