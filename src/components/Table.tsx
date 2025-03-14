import { FaTrash } from 'react-icons/fa';
import deleteicon from '../assets/icons/Delete.svg';
interface TableProps {
  columns: { key: string; label: string }[];
  data: {
    [key: string]: {
      value: string | boolean;
      color?: string;
      isDeletable?: boolean;
    };
  }[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="relative overflow-x-auto pb-3 sm:rounded-lg">
      <table className="w-full text-xs text-left rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-primary uppercase border border-[#E3E3E3] bg-bodylight dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-4 py-3 text-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-3.5 h-3.5 border-[#969696] rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </th>

            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-start">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white font-medium border-b dark:bg-gray-800 dark:border-gray-700 border-[#E3E3E3] hover:bg-gray dark:hover:bg-gray-600"
            >
              {/* عمود الـ Checkbox لكل صف */}
              <td className="px-4 py-2 text-center">
                <input
                  id={`checkbox-table-${rowIndex}`}
                  type="checkbox"
                  className="w-3.5 h-3.5 text-blue-600 border-[#969696] rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </td>

              {columns.map((col) => {
                const cellData = row[col.key];
                const textColor = cellData.color || 'text-black-2'; // الافتراضي اللون الأساسي

                return (
                  <td
                    key={col.key}
                    className={`px-4 py-2 text-start ${textColor}`}
                  >
                    {col.key === 'status' ? (
                      <span
                        className={`px-3 py-1 rounded-md ${
                          ['Complete', 'Approved', 'Shipped'].includes(
                            String(cellData.value),
                          )
                            ? 'bg-green-100 text-green-600'
                            : ['Delivered', 'Refunded'].includes(
                                String(cellData.value),
                              )
                            ? 'bg-blue-100 text-blue-600'
                            : ['Pending', 'Processing'].includes(
                                String(cellData.value),
                              )
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-red-100 text-red-600'
                        }`}
                      >
                        {String(cellData.value)}
                      </span>
                    ) : col.key === 'action' ? (
                      cellData.isDeletable ? (
                        <button className="p-1 rounded-md bg-bodylight hover:bg-gray-300">
                          <img src={deleteicon} alt="Delete" />
                        </button>
                      ) : (
                        <button className="p-1 bg-red-100 text-red-600 rounded-md text-xs">
                          Inactivate
                        </button>
                      )
                    ) : (
                      <span>{cellData.value as string}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
