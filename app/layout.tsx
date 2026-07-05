import "./globals.css";

export const metadata = {
  title: "Plot Selling Website",
  description: "Find the best plots at best prices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}