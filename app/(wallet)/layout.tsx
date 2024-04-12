import WalletBar from "@/components/global/wallet-nav-bar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <WalletBar/>
      <div className="container my-16">{children}</div>
    </main>
  );
}
