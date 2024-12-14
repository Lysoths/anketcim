export default function PageWrapper({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`flex flex-1 w-full ${center ? "items-center" : ""}`}>
      <div className="max-w-5xl mx-auto px-4 py-6 md:py-12 w-full">
        {children}
      </div>
    </div>
  );
}
