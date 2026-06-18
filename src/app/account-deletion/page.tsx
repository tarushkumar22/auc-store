import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Account Deletion",
  description: "Learn how to delete your AUC Store account and what happens to your data.",
};

const sections = [
  {
    title: "1. Your Right to Delete",
    content: `You have the right to delete your AUC Store account at any time. This is a permanent action. Once your account is deleted, your Store ID, listings, and profile data will be removed from the public platform. We are committed to making this process simple, transparent, and compliant with data protection standards.`,
  },
  {
    title: "2. How to Delete Your Account",
    content: [
      "Step 1: Open the AUC Store app or visit aucstore.in and log into your account.",
      "Step 2: Navigate to Profile → Settings → Account.",
      "Step 3: Tap 'Delete My Account'.",
      "Step 4: Read the deletion summary and confirm your identity via OTP.",
      "Step 5: Select a reason for deletion (optional) and tap 'Confirm Delete'.",
      "Step 6: You will receive a confirmation email. Your account will be deactivated immediately and permanently deleted within 30 days.",
    ],
  },
  {
    title: "3. Before You Delete",
    content: [
      "Resolve all pending orders, active service bookings, and open disputes before requesting deletion.",
      "Withdraw any pending wallet balance (refunded to your original payment method).",
      "Sellers: Ensure all active listings are closed and pending payments are received.",
      "Engineers: Complete all ongoing service assignments.",
      "Deletion cannot be undone. Your Store ID will be released and may be claimed by others after 60 days.",
    ],
  },
  {
    title: "4. What Happens to Your Data",
    content: [
      "Your public Store ID page and all listings will be removed immediately upon confirmation.",
      "Your personal profile, contact details, and preferences are deactivated immediately.",
      "Within 30 days, personal data is permanently deleted from our active systems.",
      "Transaction records (order history, payments) are retained for 7 years as required by Indian tax and accounting laws — this data is anonymized where possible.",
      "Reviews you left on other stores will be anonymized (not deleted) to maintain review integrity.",
      "Chat messages will be deleted from our servers within 30 days.",
    ],
  },
  {
    title: "5. Data Retention After Deletion",
    content: `Certain information may be retained after account deletion as required by law or for legitimate business purposes:\n\n• Financial transactions: 7 years (Indian IT Act compliance)\n• Fraud prevention records: Up to 3 years\n• Legal hold data: As required by court orders\n\nThis retained data is kept in a restricted, encrypted archive and is not used for marketing or profiling.`,
  },
  {
    title: "6. Alternative to Deletion",
    content: [
      "Deactivate your account temporarily: Your profile is hidden but data is preserved. Reactivate anytime.",
      "Disable notifications: Manage in Settings → Notifications.",
      "Remove specific listings: Delete individual products or services without closing your account.",
      "Contact support if you are having platform issues — we will do our best to resolve them.",
    ],
  },
  {
    title: "7. Deletion by AUC Store",
    content: `AUC Store may delete accounts that violate our Terms & Conditions, engage in fraudulent activity, or have been inactive for more than 24 consecutive months. You will be notified via email before such deletion (except in cases of fraud or illegal activity), giving you 30 days to resolve the issue or export your data.`,
  },
];

export default function AccountDeletionPage() {
  return (
    <PolicyPage
      title="Account Deletion"
      subtitle="How to permanently delete your AUC Store account and what happens to your data."
      lastUpdated="June 18, 2026"
      sections={sections}
    >
      {/* Quick action box */}
      <div className="mt-6 bg-red-50 rounded-3xl p-6 border border-red-100">
        <h3 className="font-bold text-gray-900 mb-2">Ready to Delete?</h3>
        <p className="text-gray-600 text-sm mb-4">
          You can request account deletion directly from within the AUC Store app. If you need
          assistance, email us and we will process your request within 2 business days.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:delete@aucstore.in"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition-colors"
          >
            Request via Email
          </a>
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-semibold hover:bg-gray-200 transition-colors"
          >
            Read Privacy Policy
          </Link>
        </div>
      </div>
    </PolicyPage>
  );
}
