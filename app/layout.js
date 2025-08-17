import "./globals.css";

export const metadata = {
  title: "Happy Birthday! 🎉",
  description: "A beautiful love story with animations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
