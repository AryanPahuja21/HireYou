import AdminNavbar from "@/components/Navbar/AdminNavbar";
import { format } from "date-fns";

const Dashboard = () => {
  const dateNow = format(new Date(), "EEEE, dd MMMM yyyy hh:mm a");

  return (
    <>
      <header>
        <AdminNavbar />
      </header>
      <main className="mx-auto mt-8 p-4">
        <section className="mb-10">
          {" "}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-blue-400 py-1 mb-4">
              Welcome, Aryan Pahuja!
            </h1>
            <p className="text-center text-xl text-gray-700">
              <span className="font-semibold text-blue-600">Today: </span>{" "}
              {dateNow}
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Upcoming Interviews
            </h2>
            <p className="text-gray-600">
              You have no upcoming interviews scheduled.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Recent Activity
            </h2>
            <p className="text-gray-600">No recent activity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Quick Links
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <a href="/dashboard" className="text-blue-500 hover:underline">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/interviews" className="text-blue-500 hover:underline">
                  Interviews
                </a>
              </li>
              <li>
                <a href="/candidates" className="text-blue-500 hover:underline">
                  Candidates
                </a>
              </li>
              <li>
                <a href="/reports" className="text-blue-500 hover:underline">
                  Reports
                </a>
              </li>
              <li>
                <a href="/settings" className="text-blue-500 hover:underline">
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Dashboard Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Interview Performance
              </h3>
              <p className="text-gray-600">No data available.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Candidate Statistics
              </h3>
              <p className="text-gray-600">No data available.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
