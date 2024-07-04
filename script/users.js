const users = [
  {
    name: {
      firstName: "Kamau",
      lastName: "Muchangi",
    },
    age: 30,
    occupation: "Software Engineer",
    hobbies: ["reading", "hiking", "coding"],
    image: "https://placeholder.com/100x100",
  },
  {
    name: {
      firstName: "William",
      lastName: "Omondi",
    },
    age: 25,
    occupation: "Data Scientist",
    hobbies: ["swimming", "traveling", "cooking"],
    image: "https://placeholder.com/100x100",
  },

  {
    name: {
      firstName: "Kabi",
      lastName: "Wa Judas",
    },
    age: 35,
    occupation: "Manager",
    hobbies: ["fishing", "hiking", "coding"],
    image: "https://placeholder.com/100x100",
  },

  {
    name: {
      firstName: "Alice",
      lastName: "Makori",
    },
    age: 40,
    occupation: "Designer",
    hobbies: ["reading", "hiking", "painting"],
    image: "https://placeholder.com/100x100",
  },
];
const mainTag = document.querySelector("main");
users.map((user) => {
  const userCard = document.createElement("div");
  userCard.className = "user-card";

  const image = document.createElement("img");
  image.src = user.image;

  const firstName = document.createElement("h3");
  firstName.textContent = user.name.firstName;

  const secondName = document.createElement("h3");
  secondName.textContent = user.name.lastName;

  const hobbies = document.createElement("p");
  hobbies.textContent = " Hobbies " + user.hobbies.join(",");
hobbies.className ="hobbies"
  const age = document.createElement("p");
  age.textContent = user.age;

  const occupation = document.createElement("p");
  occupation.textContent = user.occupation;

  userCard.appendChild(image);
  userCard.appendChild(firstName);
  userCard.appendChild(secondName);
  userCard.appendChild(hobbies);
  userCard.appendChild(age);
  userCard.appendChild(occupation);
  mainTag.appendChild(userCard);
});
