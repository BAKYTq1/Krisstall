export default function NotFound() {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-2">Oops! Page Not Found</p>
        <a href="/" className="mt-4 px-6 py-2 bg-blue-500 rounded-md text-lg">
          Go Home
        </a>
      </div>
    );
  }
  