export const userOrder = async () => {
  const userId = sessionStorage.getItem('id');
  console.log(userId);
  const response = await fetch(`http://localhost:3001/user/orders/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }


  const data = await response.json();
  console.log("Orders");
  console.log(data.orders);
  return data;
};