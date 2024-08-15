const faker = require('faker');
const pool = require('./db');

// Generate fake data for User table
async function generateUsers() {
  try {
    for (let i = 0; i < 100; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const email = faker.internet.email();
      const password = faker.internet.password();
      const phoneNo = faker.phone.phoneNumber();

      await pool.query(
        'INSERT INTO "User" (FirstName, LastName, Email, Password, PhoneNo) VALUES ($1, $2, $3, $4, $5)',
        [firstName, lastName, email, password, phoneNo]
      );
    }

    console.log('Fake users generated successfully.');
  } catch (error) {
    console.error('Error generating fake users:', error);
  }
}

// Generate fake data for Game table
async function generateGames() {
  try {
    for (let i = 0; i < 1000; i++) {
      const title = faker.random.words();
      const description = faker.lorem.paragraph();
      const genre = faker.random.word();
      const price = faker.random.number({ min: 1, max: 100 });
      const releaseDate = faker.date.past();
      const platform = faker.random.word();
      const quantity = faker.random.number({ min: 1, max: 100 });
      const imageURL = faker.image.imageUrl();

      await pool.query(
        'INSERT INTO Game (Title, Description, Genre, Price, ReleaseDate, Platform, Quantity, ImageURL) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [title, description, genre, price, releaseDate, platform, quantity, imageURL]
      );
    }

    console.log('Fake games generated successfully.');
  } catch (error) {
    console.error('Error generating fake games:', error);
  }
}

// Generate fake data for Order table
async function generateOrders() {
  try {
    const users = await pool.query('SELECT UserID FROM "User"');
    const games = await pool.query('SELECT GameID FROM Game');

    for (let i = 0; i < 100; i++) {
      const userID = faker.random.arrayElement(users.rows).userid;
      const gameID = faker.random.arrayElement(games.rows).gameid;
      const orderDate = faker.date.past();
      const totalAmount = faker.random.number({ min: 10, max: 100 });
      const status = faker.random.arrayElement(['Completed', 'Pending', 'Cancelled']);

      await pool.query(
        'INSERT INTO "Order" (UserID, GameID, OrderDate, TotalAmount, Status) VALUES ($1, $2, $3, $4, $5)',
        [userID, gameID, orderDate, totalAmount, status]
      );
    }

    console.log('Fake orders generated successfully.');
  } catch (error) {
    console.error('Error generating fake orders:', error);
  }
}

// Generate fake data
async function generateFakeData() {
  await generateUsers();
  await generateGames();
  await generateOrders();

  // Close the database connection
  await pool.end();
}

// Call the function to generate fake data
generateFakeData();
