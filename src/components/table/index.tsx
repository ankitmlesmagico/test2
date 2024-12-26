import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const StatusBadge = ({ status }) => {
  const getStatusStyles = () => {
    switch (status?.toLowerCase()) {
      case 'in review':
        return 'bg-blue-50 text-blue-600';
      case 'on hold':
        return 'bg-purple-50 text-purple-600';
      case 'reviewed':
        return 'bg-green-50 text-green-600';
      case 'in progress':
        return 'bg-orange-50 text-orange-600';
      case 'live':
        return 'bg-emerald-50 text-emerald-600';
      case 'rejected':
        return 'bg-red-50 text-red-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles()}`}
    >
      {status}
    </span>
  );
};

const DataTable = ({ data, itemsPerPage = 15 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(currentData.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="w-12 px-3 py-3">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  onChange={handleSelectAll}
                  checked={selectedItems.length === currentData.length}
                />
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Product Title
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                MFN ID
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Marketplace
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Sell In Country
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Case Qty
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                UPC/GTIN
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Epic Purchase Cost
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Marketplace Status
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {currentData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-3 py-4">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                  />
                </td>
                <td className="px-3 py-4">
                  <a href="#" className="text-blue-600 hover:underline">
                    {item.productTitle}
                  </a>
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {item.mfnId}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {item.marketplace}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {item.sellInCountry}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {item.caseQty}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {item.upcGtin}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  ${item.epicPurchaseCost}
                </td>
                <td className="px-3 py-4">
                  <StatusBadge status={item.status} />
                </td>
                <td className="px-3 py-4">
                  <StatusBadge status={item.marketplaceStatus} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200">
        <div className="flex items-center">
          <span className="text-sm text-gray-700">
            Showing:
            <select
              className="mx-2 rounded border-gray-300"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={15}>15</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            {startIndex + 1}-{Math.min(endIndex, data.length)} of {data.length}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
          >
            <MdKeyboardArrowDown className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (page) =>
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
            )
            .map((page, index, array) => (
              <React.Fragment key={page}>
                {index > 0 && array[index - 1] !== page - 1 && (
                  <span className="px-2">...</span>
                )}
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded ${
                    currentPage === page
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              </React.Fragment>
            ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
          >
            <MdKeyboardArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
