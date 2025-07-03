// For App Router (page.tsx)
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Paves Technologies</h1>
      <p className="text-lg text-gray-700 mb-8">We build smart digital solutions to empower your business.</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
        Get Started
      </button>
    </main>
  );
}
