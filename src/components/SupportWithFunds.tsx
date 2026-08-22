import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface Supporter {
  id: number;
  name: string;
  amount: number;
  village?: string;
}

const mockSupporters: Supporter[] = [
  { id: 1, name: "Shri Ramesh Singh", amount: 11000, village: "Ranjeet Moxan" },
  { id: 2, name: "Smt. Kamla Devi", amount: 5100, village: "Uniyal Moxan" },
  { id: 3, name: "Shri Mohan Lal", amount: 2100, village: "Ranjeet Moxan" },
  { id: 4, name: "Shri Bhagwan Singh", amount: 11000, village: "Nainidanda" },
  { id: 5, name: "Smt. Parvati Devi", amount: 1500, village: "Ranjeet Moxan" },
  { id: 6, name: "Shri Jeet Singh", amount: 5100, village: "Haldukhal" },
  { id: 7, name: "Shri Gopal Ram", amount: 2100, village: "Ranjeet Moxan" },
  { id: 8, name: "Smt. Indira Devi", amount: 1100, village: "Uniyal Moxan" },
  {
    id: 9,
    name: "Shri Virendra Singh",
    amount: 7500,
    village: "Ranjeet Moxan",
  },
  { id: 10, name: "Shri Kishan Lal", amount: 3100, village: "Berhat Palla" },
];

const SupportWithFunds: React.FC = () => {
  const [data, setData] = useState<Supporter[]>(mockSupporters);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: "name" | "amount";
    direction: "asc" | "desc";
  } | null>({ key: "amount", direction: "desc" });

  const rowsPerPage = 8;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleSort = (key: "name" | "amount") => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...data].sort((a, b) => {
      if (key === "name") {
        return direction === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      return direction === "asc" ? a.amount - b.amount : b.amount - a.amount;
    });

    setSortConfig({ key, direction });
    setData(sorted);
    setCurrentPage(1);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );
  return (
    <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="p-8 pb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Our Supporters
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We gratefully acknowledge the generous contributions of these devotees
          who helped in the construction and development of the temple premises.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 text-sm">
            <tr>
              <th className="px-6 py-4 font-semibold">S.No.</th>
              <th
                className="px-6 py-4 font-semibold cursor-pointer hover:text-orange-600"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center gap-1">
                  Name
                  {sortConfig?.key === "name" &&
                    (sortConfig.direction === "asc" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    ))}
                </div>
              </th>
              <th className="px-6 py-4 font-semibold">Village</th>
              <th
                className="px-6 py-4 font-semibold cursor-pointer hover:text-orange-600 text-right"
                onClick={() => handleSort("amount")}
              >
                <div className="flex items-center justify-end gap-1">
                  Amount (₹)
                  {sortConfig?.key === "amount" &&
                    (sortConfig.direction === "asc" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    ))}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {paginatedData.map((supporter, index) => (
              <tr
                key={supporter.id}
                className="hover:bg-orange-50/50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                  {(currentPage - 1) * rowsPerPage + index + 1}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {supporter.name}
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {supporter.village}
                </td>
                <td className="px-6 py-4 text-right font-semibold text-orange-600 dark:text-orange-400">
                  ₹{supporter.amount.toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 dark:border-gray-800">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 disabled:opacity-40 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Previous
        </button>

        <div className="flex gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                currentPage === page
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 disabled:opacity-40 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default SupportWithFunds;
