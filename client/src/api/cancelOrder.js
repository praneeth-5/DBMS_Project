export const cancelOrder = async (orderId) => {
  const response = await fetch(`http://localhost:3001/user/orders/cancel/${orderId}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to cancel the order');
  }

  console.log('Order cancelled successfully');
};
