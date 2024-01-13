import { useState } from "react";

const DashBoard = ()=> {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  const [theme, setTheme] = useState(`grey`);

  return (
    <>
      <input
        className="bg-emerald-600  absolute top-0 right-0 h-16 w-16 rounded-3xl"
        type="button"
        value="Theme"
        onClick={() => setTheme("black")}
      />
      <div
        className="container mx-auto px-4 py-8"
        style={{ backgroundColor: theme }}
      >
        <h1 className="text-4xl font-bold text-white">
          IIMI Inventory Management{" "}
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Total Products
            </h2>
            <p className="text-5xl font-bold text-green-500">{}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Out of Stock
            </h2>
            <p className="text-5xl font-bold text-red-500">{}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-700">Low Stock</h2>
            <p className="text-5xl font-bold text-yellow-500">{}</p>
          </div>
        </div>
        <div className="mt-8">
          <table className="w-full table-auto bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">
                  Product Name
                </th>
                <th className="px-4 py-2 text-left text-gray-600">Category</th>
                <th className="px-4 py-2 text-left text-gray-600">Price</th>
                <th className="px-4 py-2 text-left text-gray-600">Quantity</th>
                <th className="px-4 py-2 text-left text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200">{}</td>
                <td className="px-4 py-2 border-b border-gray-200">{}</td>
                <td className="px-4 py-2 border-b border-gray-200">{}</td>
                <td className="px-4 py-2 border-b border-gray-200">{}</td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <span className="inline-block px-2 py-1 rounded-full bg-green-200 text-green-800">
                    {}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
