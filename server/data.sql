-- Drop "Order" table
DROP TABLE IF EXISTS "Order";

-- Drop "Game" table
DROP TABLE IF EXISTS Game;

-- Drop "User" table
DROP TABLE IF EXISTS "User";


-- Create User table
CREATE TABLE "User" (
    UserID SERIAL PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Email VARCHAR(255),
    Password VARCHAR(255),
    PhoneNo VARCHAR(20)
);

CREATE TABLE Game (
    GameID SERIAL PRIMARY KEY,
    Title VARCHAR(255),
    Developer VARCHAR(255),
    Price DECIMAL(10, 2),
    ReleaseDate DATE,
    Description TEXT,
    UPC VARCHAR(255),
    Brand VARCHAR(255),
    VendorNo VARCHAR(255),
    NoOfPlayers INTEGER,
    Genre VARCHAR(255),
    Platforms VARCHAR(255),
    Franchise VARCHAR(255),
    PublisherName VARCHAR(255),
    ImageURL VARCHAR(255)
);


-- Create "Order" table
CREATE TABLE "Order" (
    OrderID SERIAL PRIMARY KEY,
    UserID INTEGER REFERENCES "User"(UserID),
    GameID INTEGER REFERENCES Game(GameID),
    OrderDate DATE,
    DelivedDate DATE,
    TotalAmount DECIMAL(10, 2),
    Status VARCHAR(255)
);


-- Game 1
INSERT INTO Game (Title, Developer, Price, ReleaseDate, Description, UPC, Brand, VendorNo, NoOfPlayers, Genre, Platforms, Franchise, PublisherName, ImageURl)
VALUES (
    'Final Fantasy XVI - PlayStation 5',
    'Square Enix',
    64.99,
    '2023-06-22',
    'The sun is setting upon the land of Valisthea. For centuries, people have flocked to her Mothercrystals to partake of their blessing—the abundant aether that fuels the magicks they rely upon in their everyday lives. But as the aether begins to fade and the lifeless deadlands spread ever further, so too does the struggle over the final flickers of the Mothers'' light grow ever more fierce. Bloody battle rages across the realm, rival nations sending their ultimate weapons against each other: the Dominants. Men and women within whom sleep the world-shattering power of an Eikon. There are few in Valisthea whose lives have not been touched by this war for the crystals'' blessing, and Clive Rosfield, firstborn son of the Archduke of Rosaria, is no exception. Unlike most, however, the vicissitudes of fate are to reveal to him the dark truth that lies at the heart of his world, and lead him on a mission to destroy those selfsame Mothercrystals the rest of the realm hold sacred. The legacy of the crystals has shaped mankind''s destiny for long enough.',
    '662248927152',
    'Square Enix',
    '92715',
    1,
    'RPG',
    'PlayStation 5',
    'Final Fantasy',
    'Square Enix',
    'https://images-ext-2.discordapp.net/external/OFZfPCrnlgqo1ZYWgvg7Esvj1mlSN2ETpujJ4sGdbDk/https/i.imgur.com/JHFymHd.png'    
);


-- Game 2
INSERT INTO Game (Title, Developer, Price, ReleaseDate, Description, UPC, Brand, VendorNo, NoOfPlayers, Genre, Platforms, Franchise, PublisherName, ImageURl)
VALUES (
    'Call of Duty: Modern Warfare',
    'Infinity Ward',
    59.99,
    '2019-10-25',
    'Prepare to go dark, Call of Duty: Modern Warfare is back on PS4! The stakes have never been higher as players take on the role of lethal Tier One operators in a heart-racing saga that will affect the global balance of power. Call of Duty: Modern Warfare engulfs fans in an incredibly raw, gritty, provocative narrative that brings unrivaled intensity and shines a light on the changing nature of modern war. Developed by the studio that started it all, Infinity Ward delivers an epic reimagining of the iconic Modern Warfare series from the ground up. In the visceral and dramatic single-player story campaign, Call of Duty: Modern Warfare pushes boundaries and breaks rules the way only Modern Warfare can. Players will engage in breathtaking covert operations alongside a diverse cast of international special forces and freedom fighters throughout iconic European cities and volatile expanses of the Middle East. ',
    '047875884487',
    'Activision',
    '88448',
    1,
    'FPS',
    'PlayStation 4, Xbox One, PC',
    'Call of Duty',
    'Activision',
    'https://images-ext-2.discordapp.net/external/0HBLs6qIct3NFZcYdbSSLSx3ooW9Raqockc_UeXJpCs/https/i.imgur.com/0Q86UMd.png'    
);

-- Game 3
INSERT INTO Game (Title, Developer, Price, ReleaseDate, Description, UPC, Brand, VendorNo, NoOfPlayers, Genre, Platforms, Franchise, PublisherName, ImageURl)
VALUES (
    'The Legend of Zelda: Breath of the Wild',
    'Nintendo',
    59.99,
    '2017-03-03',
    'An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda™: Tears of the Kingdom for Nintendo Switch. The adventure is yours to create in a world fueled by your imagination. In this sequel to The Legend of Zelda: Breath of the Wild, you’ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link’s new abilities to fight back against the malevolent forces that threaten the kingdom? The resulting game lacks the admittedly difficult-to-recreate, undeniable impact and newness of the prior game. Instead, it gives players a chance to revisit the world through a completely new lens with new abilities for a brilliant adventure providing players a staggering amount of agency in how they approach nearly every gameplay instance.',
    '045496590420',
    'Nintendo',
    '59042',
    1,
    'Action-Adventure',
    'Nintendo Switch',
    'The Legend of Zelda',
    'Nintendo',
    'https://images-ext-2.discordapp.net/external/0DiaWNQ9QfCxkWy_ZCgOL0GlnjBOt5Z6YYT95hIyj1w/https/i.imgur.com/QfdAWcf.png'
);

-- Game 4
INSERT INTO Game (Title, Developer, Price, ReleaseDate, Description, UPC, Brand, VendorNo, NoOfPlayers, Genre, Platforms, Franchise, PublisherName, ImageURl)
VALUES (
    'Grand Theft Auto V',
    'Rockstar North',
    29.99,
    '2013-09-17',
    'Includes Grand Theft Auto V: Story Mode and Grand Theft Auto Online. Continue your journey on PS5™ and transfer both GTAV Story Mode progress and GTA Online characters and progression to PS5™ with a one-time migration. Experience entertainment blockbusters, Grand Theft Auto V and GTA Online — now for PlayStation®5. When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each other. Experience GTA Online, a dynamic and ever-evolving online universe for up to 30 players, where you can rise from street-level hustler to become a kingpin of your own criminal empire.',
    '710425471254',
    'Rockstar Games',
    '47125',
    1,
    'Action-Adventure',
    'PlayStation 4, Xbox One, PC',
    'Grand Theft Auto',
    'Rockstar Games',
    'https://images-ext-2.discordapp.net/external/3sFnpvD3_Yw73c-aiNwihzKWIqpncDVVJdvX3qLzfjA/https/i.imgur.com/HLpFSRj.png'
);

-- Game 5
INSERT INTO Game (Title, Developer, Price, ReleaseDate, Description, UPC, Brand, VendorNo, NoOfPlayers, Genre, Platforms, Franchise, PublisherName, ImageURl)
VALUES (
    'Minecraft',
    'Mojang Studios',
    19.99,
    '2011-11-18',
    'Build! Craft! Explore! Bring your imaginations to life with Minecraft Starter Collection– PlayStation® 4. The critically acclaimed Minecraft offers bigger worlds and greater draw distance than the PS3 and PS Vita editions. Create your own world, then, build, explore and conquer. When night falls the monsters appear, so be sure to build a shelter before they arrive. Will you hide from monsters or craft tools, armor and weapons to fight back? The world is only limited by your imagination! With constant updates and community creations, Minecraft is bigger, better and more beautiful than ever before. Explore amazing player-made maps, thrilling minigames and more! Band together with friends playing on phone, Windows 10 or console, set up your own online world with Realms*, or join one of the massive player-run servers! There are so many ways to play!	',
    '885370606515',
    'Mojang',
    '60651',
    1,
    'Sandbox',
    'Multiple Platforms',
    'Minecraft',
    'Microsoft Studios',
    'https://images-ext-1.discordapp.net/external/FArbzrkliOUTPr6H4Imy-BPtQ-8YRkm7dMqaC-Z5_CA/https/i.imgur.com/F08fizn.png'
);

-- Game 6
INSERT INTO Game (Title, Developer, Price, ReleaseDate, Description, UPC, Brand, VendorNo, NoOfPlayers, Genre, Platforms, Franchise, PublisherName, ImageURl)
VALUES (
    'Red Dead Redemption 2',
    'Rockstar Games',
    59.99,
    '2018-10-26',
    'The end of the Wild West era has begun. After a robbery gone wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. Now featuring additional Story Mode content and a fully-featured Photo Mode, Red Dead Redemption 2 also includes free access to the shared living world of Red Dead Online, where players take on an array of roles to carve their own unique path on the frontier as they track wanted criminals as a Bounty Hunter, create a business as a Trader, unearth exotic treasures as a Collector or run an underground distillery as a Moonshiner and much more.',
    '710425478901',
    'Rockstar Games',
    '47890',
    1,
    'Action-Adventure',
    'PlayStation 4, Xbox One, PC',
    'Red Dead Redemption',
    'Rockstar Games',
    'https://images-ext-1.discordapp.net/external/-ia7RsHFbJGyxmuX-Sxa5lkdTHZV93wwlWuMMDcDuRU/https/i.imgur.com/qKTsTvR.png'
);

INSERT INTO Game (Title, Developer, Price, ReleaseDate, Description, UPC, Brand, VendorNo, NoOfPlayers, Genre, Platforms, Franchise, PublisherName, ImageURl)
VALUES (
    'Super Mario Odyssey',
    'Nintendo',
    59.99,
    '2017-10-27',
    'Embark on a cap-tivating, globe-trotting adventure! Join Mario on a massive, globe-trotting 3D adventure and use his incredible new abilities to collect Moons so you can power up your airship, the Odyssey, and rescue Princess Peach from Bowser''s wedding plans! This sandbox-style 3D Mario adventure—the first since 1996''s beloved Super Mario 64 and 2002''s Nintendo GameCube classic Super Mario Sunshine—is packed with secrets and surprises, and with Mario''s new moves like cap throw, cap jump, and capture, you''ll have fun and exciting gameplay experiences unlike anything you''ve enjoyed in a Mario game before. Get ready to be whisked away to strange and amazing places far from the Mushroom Kingdom!',
    '045496590741',
    'Nintendo',
    '59074',
    1,
    'Platformer',
    'Nintendo Switch',
    'Super Mario',
    'Nintendo',
    'https://images-ext-1.discordapp.net/external/tAw9kBdY5VLhKAxoOcc9gu6k5YLvBPGoGc7AiGABVpA/https/i.imgur.com/CogN4rL.png'
);


-- Game 8
INSERT INTO Game (Title, Developer, Price, ReleaseDate, Description, UPC, Brand, VendorNo, NoOfPlayers, Genre, Platforms, Franchise, PublisherName, ImageURl)
VALUES (
    'The Witcher 3: Wild Hunt',
    'CD Projekt Red',
    39.99,
    '2015-05-19',
    'You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world. The Complete Edition contains the base game, offering a huge, over 100-hour long, open-world adventure, as well as both of its massive story expansions: Hearts of Stone & Blood and Wine worth an extra 50 hours of gameplay! It also comes with all additional content released for the game, alongside new items including swords, armor, and alternate outfits inspired by The Witcher Netflix series — and more! Behold the dark fantasy world of the Continent like never before! This edition of The Witcher 3: Wild Hunt has been enhanced with numerous visual and technical improvements, including vastly improved level of detail, faster loading times, a range of community created and newly developed mods for the game, real-time ray tracing, 3D audio support, and more - all implemented with the power of the PlayStation®5 in mind. The game also utilizes the unique features of the DualSense controller, with its advanced haptics and adaptive triggers, letting you immerse yourself in the adventure even more!',
    '883929552248',
    'CD Projekt',
    '55224',
    1,
    'Action RPG',
    'PlayStation 4, Xbox One, PC',
    'The Witcher',
    'CD Projekt',
    'https://images-ext-1.discordapp.net/external/n-Xd8YYiyepEfatF7JtuT8nEyFoYNC5xb4xtQiLzesY/https/i.imgur.com/3weKDua.png'
);

-- Game 9
INSERT INTO Game (Title, Developer, Price, ReleaseDate, Description, UPC, Brand, VendorNo, NoOfPlayers, Genre, Platforms, Franchise, PublisherName, ImageURl)
VALUES (
    'Pokémon Sword and Shield',
    'Game Freak',
    59.99,
    '2019-11-15',
    'A new generation of Pokémon is coming to the Nintendo Switch™ system. Begin your adventure as a Pokémon Trainer by choosing one of three new partner Pokémon: Grookey, Scorbunny, or Sobble. Then embark on a journey in the new Galar region, where you’ll challenge the troublemakers of Team Yell, while unravelling the mystery behind the Legendary Pokémon Zacian and Zamazenta! Explore the Wild Area, a vast expanse of land where the player can freely control the camera. Team up with three other players locally in the new multiplayer co-op Max Raid Battles* in which players will face off against gigantic and super-strong Pokémon known as Dynamax Pokémon.',
    '045496596583',
    'Nintendo',
    '59658',
    1,
    'RPG',
    'Nintendo Switch',
    'Pokémon',
    'Nintendo',
    'https://images-ext-2.discordapp.net/external/vwNAswlOn86pBQntCeYKojERBL8xb_Oe_beQ1DZAC74/https/i.imgur.com/j7i5ELP.png'
);

-- Game 10
INSERT INTO Game (Title, Developer, Price, ReleaseDate, Description, UPC, Brand, VendorNo, NoOfPlayers, Genre, Platforms, Franchise, PublisherName, ImageURl)
VALUES (
    'Fortnite',
    'Epic Games',
    0.00,
    '2017-07-25',
    'Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing; Fortnite: Save the World, a cooperative hybrid tower defense-shooter and survival game in which up to four players fight off zombie-like creatures and defend objects with traps and fortifications they can build; and Fortnite Creative, in which players are given complete freedom to create worlds and battle arenas.Save the World and Battle Royale were released in 2017 as early access titles, while Creative was released on December 6, 2018. While the Save the World and Creative versions have been successful for Epic Games, Fortnite Battle Royale in particular became an overwhelming success and a cultural phenomenon, drawing more than 125 million players in less than a year, earning hundreds of millions of dollars per month. Fortnite as a whole generated $9 billion in gross revenue up until December 2019.',
    '850942007076',
    'Epic Games',
    '00707',
    1,
    'Battle Royale',
    'Multiple Platforms',
    'Fortnite',
    'Epic Games',
    'https://images-ext-1.discordapp.net/external/rma5MaguhXM3zmkBry3gI4-VOJoJ3yUxzf3NkNzyrZ8/https/i.imgur.com/ykp20YI.png'
);


-- Insert data into User table
INSERT INTO "User" (FirstName, LastName, Email, Password, PhoneNo)
VALUES ('Alice', 'Johnson', 'alice@example.com', 'password123', '1234567890');

-- Insert data into Order table
INSERT INTO "Order" (UserID, GameID, OrderDate, DelivedDate, TotalAmount, Status)
VALUES (1, 1, '2023-06-23', '2023-06-25', 64.99, 'Delivered');

-- Insert another order for the same user
INSERT INTO "Order" (UserID, GameID, OrderDate, DelivedDate, TotalAmount, Status)
VALUES (1, 1, '2023-06-26', NULL, 64.99, 'Pending');
