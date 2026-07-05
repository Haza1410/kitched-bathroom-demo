import type { Metadata } from "next";
import { ReviewFunnel } from "@/components/ReviewFunnel";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leave a review",
  description: `Tell us how your kitchen or bathroom renovation went with ${company.name}.`,
  robots: { index: false, follow: false },
};

export default function FeedbackPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-beige px-5 py-14">
      <ReviewFunnel />
    </main>
  );
}
