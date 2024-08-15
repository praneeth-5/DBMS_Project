export const handleOrder = async (UserID, GameID) => {
  try {
    const response = await fetch("http://localhost:3001/user/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ UserID, GameID }),
    });
    const data = await response.json();
    console.log(data);
    // Do something with the order data
  } catch (error) {
    console.error("Error occurred during order:", error);
    // Handle the error
  }
};