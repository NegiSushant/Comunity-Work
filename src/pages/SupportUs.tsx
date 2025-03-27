import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Supporter {
  id: number;
  name: string;
  amount: number;
}

const mockData: Supporter[] = [
  { id: 1, name: "Alice", amount: 100 },
  { id: 2, name: "Bob", amount: 150 },
  { id: 3, name: "Charlie", amount: 75 },
  { id: 4, name: "Diana", amount: 200 },
  { id: 5, name: "Edward", amount: 50 },
  { id: 6, name: "Fiona", amount: 300 },
  { id: 7, name: "George", amount: 120 },
  { id: 8, name: "Hannah", amount: 180 },
  { id: 9, name: "Irene", amount: 220 },
  { id: 10, name: "Jack", amount: 90 },
];

const SupportUs: React.FC = () => {
  const [data, setData] = useState<Supporter[]>(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: "name" | "amount";
    direction: "asc" | "desc";
  } | null>(null);
  const rowsPerPage = 7;

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleSort = (key: "name" | "amount") => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    const sortedData = [...data].sort((a, b) => {
      if (key === "name") {
        return direction === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else {
        return direction === "asc" ? a.amount - b.amount : b.amount - a.amount;
      }
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8">
      {/* Fixed Left Sidebar */}
      <div className="w-full md:w-1/3 bg-green-100 p-6 rounded-lg shadow-md sticky top-0 h-screen">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Support Us</h2>
        <ul className="space-y-4 text-green-700 font-medium">
          <li>
            <Link to="/support/community" className="hover:text-green-500">
              Support Community
            </Link>
          </li>
          <li>
            <Link to="/support/events" className="hover:text-green-500">
              Organizing Events
            </Link>
          </li>
          <li>
            <Link to="/support/developer" className="hover:text-green-500">
              Support Developer
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-2/3 space-y-8">
        {/* Who We Are Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            We are a dedicated team committed to preserving and promoting our
            heritage, values, and traditions. Our goal is to create a positive
            impact within our community by fostering a deep sense of unity and
            belonging.
          </p>
        </section>

        {/* Why We Need Your Support Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why We Need Your Support
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Your support helps us maintain and develop our community
            initiatives, ensuring that our rich traditions and values are
            preserved for future generations. We rely on community support to
            sustain our activities and to reach more people who can benefit from
            our work.
          </p>
        </section>

        {/* People Who Support Us Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            People Who Support Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Following is the list of renound people from our village which help
            us in the constructing the temple premises in the village.
          </p>
          <table className="table-auto w-full border-collapse border border-gray-200 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">S.No.</th>
                <th
                  className="px-4 py-2 border cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  Name{" "}
                  {sortConfig?.key === "name" &&
                    (sortConfig.direction === "asc" ? "↑" : "↓")}
                </th>
                <th
                  className="px-4 py-2 border cursor-pointer"
                  onClick={() => handleSort("amount")}
                >
                  Amount{" "}
                  {sortConfig?.key === "amount" &&
                    (sortConfig.direction === "asc" ? "↑" : "↓")}
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((supporter, index) => (
                <tr key={supporter.id}>
                  <td className="px-4 py-2 border">
                    {(currentPage - 1) * rowsPerPage + index + 1}
                  </td>
                  <td className="px-4 py-2 border">{supporter.name}</td>
                  <td className="px-4 py-2 border">{supporter.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              ←
            </button>
            <div>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`px-2 py-1 mx-1 ${
                      currentPage === page
                        ? "bg-green-500 text-white"
                        : "bg-gray-200"
                    } rounded hover:bg-gray-300`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              →
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupportUs;
