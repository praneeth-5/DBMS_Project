export const getGames = async () => {
    const response = await fetch('http://localhost:3001/games', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to get games');
    }

    const data = await response.json();
    return { data };
}