import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Refund Policy – AUC Store",
  description: "AUC Store's refund, return, and cancellation policy for products and services.",
};

const sections = [
  {
    title: "1. Overview",
    content: `AUC Store strives for complete customer satisfaction. This Refund Policy outlines the conditions under which refunds, returns, and cancellations are accepted for products purchased and services booked through the AUC Store platform. This policy applies to both buyers and the platform's responsibilities.`,
  },
  {
    title: "2. Product Returns & Refunds",
    content: [
      "Defective or Damaged Products: You may return within 7 days of delivery for a full refund or replacement.",
      "Wrong Item Delivered: Return within 7 days for a full refund plus free return shipping.",
      "Item Not as Described: Return within 7 days if the product significantly differs from its listing.",
      "Change of Mind: Returns accepted within 3 days for most categories (product must be unused, in original packaging). Shipping charges are non-refundable.",
      "Perishable items, customized products, and digital goods are non-returnable unless defective.",
      "Used/pre-owned products sold via the Used Marketplace carry a 48-hour inspection window.",
    ],
  },
  {
    title: "3. Service Cancellations & Refunds",
    content: [
      "Free cancellation is allowed up to 2 hours before the scheduled service appointment.",
      "Cancellations within 2 hours of appointment may incur a cancellation fee of up to ₹99.",
      "Visit charges and diagnosis fees are non-refundable once the engineer has visited.",
      "If the service is cancelled by the engineer or AUC Store, a full refund will be issued within 5–7 business days.",
      "If a service is completed but not up to standard, raise a dispute within 24 hours for resolution.",
    ],
  },
  {
    title: "4. Auction Purchases",
    content: [
      "Auction purchases are binding once the auction closes.",
      "Refunds on auction items are only available if the item is not delivered, is significantly not as described, or is defective.",
      "Bidders must exercise due diligence before bidding as auctions are generally final sale.",
    ],
  },
  {
    title: "5. Membership Plans",
    content: [
      "Membership fees are non-refundable once activated.",
      "If AUC Store is unable to provide the promised membership benefits, a pro-rated refund will be issued.",
      "Annual memberships cancelled within 7 days of purchase may receive a full refund.",
    ],
  },
  {
    title: "6. Escrow-Protected Transactions",
    content: `For high-value transactions protected by our Escrow system, payment is held by AUC Store until the buyer confirms satisfactory delivery. If the buyer raises a valid dispute within 48 hours of delivery, the payment is withheld pending investigation. Resolution typically takes 5–10 business days.`,
  },
  {
    title: "7. Refund Process",
    content: [
      "Initiate a return/refund request through the AUC Store app or website within the applicable window.",
      "Our support team will review the request within 24–48 hours.",
      "Approved refunds are processed to the original payment method within 5–7 business days.",
      "UPI refunds are typically instant to 2 business days.",
      "Credit/Debit card refunds may take 7–10 business days depending on your bank.",
    ],
  },
  {
    title: "8. Non-Refundable Items",
    content: [
      "Digital products and downloads once accessed.",
      "Customized or personalized products.",
      "Perishable or consumable goods.",
      "Services where work has already commenced with customer approval.",
      "Subscription/membership fees (except as outlined in Section 5).",
      "Platform fees and service charges once the service is delivered.",
    ],
  },
  {
    title: "9. Dispute Resolution",
    content: `If you are unhappy with the outcome of a refund request, you may escalate to our Dispute Resolution Team through the Help Center. We aim to resolve all escalated disputes within 10 business days. For unresolved disputes, refer to the dispute resolution process outlined in our Terms & Conditions.`,
  },
];

export default function RefundPage() {
  return (
    <PolicyPage
      title="Refund Policy"
      subtitle="Our commitment to fair refunds, returns, and cancellations."
      lastUpdated="June 18, 2026"
      sections={sections}
    />
  );
}
