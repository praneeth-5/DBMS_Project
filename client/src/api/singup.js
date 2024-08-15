export const signup = async (firstName, lastName, email, password, phoneNo) => {
    const response = await fetch('http://localhost:3001/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email, password, phoneNo })
    });
  
    if (!response.ok) {
      throw new Error('Signup failed');
    }
  
    const data = await response.json();
    return { success: true, message: 'Signup successful', user: data.user, id: data.user.id };
  };