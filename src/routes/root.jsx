export default function Root() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-blue-100">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">GuestBook</h1>
        <ul className="flex justify-center items-center space-x-6">
          <li className="flex flex-col items-center space-y-1">
            <a href="/signup-guest">
              <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg">
                Sign Up as Guest
              </button>
            </a>
            <div className="text-sm text-blue-500">
              Already a Guest?
              <a href="/login-guest" className="text-blue-700 ml-1">
                Login
              </a>
            </div>
          </li>
          <li className="flex flex-col items-center space-y-1">
            <a href="/signup-admin">
              <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg">
                Sign Up as Admin
              </button>
            </a>
            <div className="text-sm text-blue-500">
              Already an Admin?
              <a href="/login-admin" className="text-blue-700 ml-1">
                Login
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
