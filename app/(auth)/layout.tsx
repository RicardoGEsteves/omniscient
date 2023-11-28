export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full bg-[#111827] flex items-center justify-center">
      {children}
    </main>
  );
}
