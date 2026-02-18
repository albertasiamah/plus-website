import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Free financial education from Plus. Watch videos on mutual funds, treasury bills, stocks, budgeting, and building wealth in Ghana.",
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
