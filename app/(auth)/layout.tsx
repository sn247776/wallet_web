import LandingHeader from "../(landing)/sections/landing-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <LandingHeader/>
      <div className="container">{children}</div>
    </main>
  );
}
