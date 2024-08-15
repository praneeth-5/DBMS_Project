import React, { useEffect, useState } from "react";
import { userOrder } from "../api/userOrder";
import { cancelOrder } from "../api/cancelOrder";
import Navbar from "../components/NavbarOrder";
import testImage from "../assets/images/test.jpeg";

const OrderPage = () => {
  const [orderData, setOrderData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // filteredOrders.sort((a, b) => { new Date(b.date) - new Date(a.date) });

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await userOrder();
        setOrderData(response.orders);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrderData();
  }, []);

  const filteredOrders = orderData.filter((order) =>
    order.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(orderData);

  const handleCancelOrder = async (orderId) => {
    try {
      await cancelOrder(orderId);
      // Update the orderData state by removing the canceled order
      setOrderData(orderData.filter((order) => order.id !== orderId));
      console.log(`Order with ID ${orderId} cancelled successfully`);
      window.location.reload();
    } catch (error) {
      console.log(`Failed to cancel order with ID ${orderId}`);
    }
  };

  return (
    // <div className="flex flex-col justify-p items-center h-screen">
    <div className="flex flex-col items-center justify-center ">
      <Navbar />
      <div className="w-3/4 mb-8  my-6">
        <h1 className="text-3xl font-bold mb-2">Your Orders</h1>
        <div className="flex items-center border-b border-gray-400 py-2">
          <input
            type="text"
            placeholder="Search all orders"
            className="w-full px-2 py-1 mr-3 border border-gray-400 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-yellow-400 black-text px-4 py-2 rounded-md hover:bg-yellow-500">
            Search Orders
          </button>
        </div>
        <div className="flex justify-between mb-2">
          <div className="text-gray-600">
            Total Orders: {filteredOrders.length}
          </div>
          <div className="text-gray-600">
            Pending:{" "}
            {
              filteredOrders.filter((order) => order.status === "Pending")
                .length
            }
          </div>
          <div className="text-gray-600">
            Shipped:{" "}
            {
              filteredOrders.filter((order) => order.status === "Shipped")
                .length
            }
          </div>
          <div className="text-gray-600">
            Delivered:{" "}
            {
              filteredOrders.filter((order) => order.status === "Delivered")
                .length
            }
          </div>
        </div>
      </div>
      <div className="w-3/4">
        {filteredOrders.map((order) => (
          <div
            key={order.orderid}
            className="flex items-center border border-gray-400 rounded-md p-4 mb-4"
          >
            <div className="w-1/5">
              <img src={order.imageurl} alt="Test Image" className="w-full h-auto" />
            </div>
            <div className="w-2/5 ml-4">
              <h2 className="text-lg font-bold">{order.title}</h2>
              <p className="text-gray-600">
                {new Date(order.orderdate).toLocaleDateString()}
              </p>
            </div>
            <div className="w-1/5 text-right">
              <p className="text-gray-600">
                ${parseFloat(order.totalamount).toFixed(2)}
              </p>
              <p className="text-gray-600">{order.status}</p>
            </div>
            <div className="w-1/5 text-right">
              {order.status === "Pending" && (
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  onClick={() => handleCancelOrder(order.orderid)}
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
