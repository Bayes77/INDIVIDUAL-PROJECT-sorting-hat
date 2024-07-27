const students = [
    {
      id: 1,
      name: "Eneya",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      house: "Hufflepuff",
      imageUrl: "https://cdn11.bigcommerce.com/s-20ff4/images/stencil/1280x1280/products/958/4199/Wizard_at_Night_Poster__94732.1432199659.jpg?c=2",
    },
    {
        id: 2,
      name: "Heinesin",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      house: "Ravenclaw",
      imageUrl: "https://i0.wp.com/dungeonsanddragonsfan.com/wp-content/uploads/2024/07/new-2024-wizard-dnd-5e-class-changes-4.png?fit=800%2C450&ssl=1",
    },
    {
      id: 3,
      name: "Bargery",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      house: "Slytherin",
      imageUrl: "https://i.redd.it/oddado3mfhd61.jpg"
    },
    {
      id: 4,
      name: "Morabulie",
      color: "Black",
      specialSkill: "Burps minimally.",
      house: "Ravenclaw",
      imageUrl: "https://www.enworld.org/attachments/geas-5e-dd-png.353192/"
    },
    {
      id: 5,
      name: "Admus",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      house: "Gryffindor",
      imageUrl: "https://sites.nd.edu/manuscript-studies/files/2020/12/gandalf-icon-860x1024.jpg"
    },
    {
      id: 6,
      name: "Atebe",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      house: "Gryffindor",
      imageUrl: "https://assetsio.gnwcdn.com/0-dungeons-and-dragons-wizard-5e-guide.png?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    },
    {
      id: 7,
      name: "Framsey",
      house: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      house:"Slytherin",
      imageUrl:"https://www.muddycolors.com/wp-content/uploads/2021/07/Mordenkainen-donato-2500.jpg"
    }
];








const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

  const cardsOnDom = (array) => {
    let domString = "";
    for (const student of array) {
        const cardFooter= 
            student.house === "Gryffindor" ? "Griffindor-Footer":
            student.house === "Slytherin" ? "Slytherin-Footer":
            student.house === "Hufflepuff" ? "Hufflepuff-Footer":
            student.house === "Ravenclaw" ? "Ravenclaw":
            "";

  domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
  <p class="card-text">${student.name}</p>
  <img src="${student.imageUrl}" class="img-thumbnail" alt="...">
  <p class="specialSkill">${student.specialSkill} </p>
  </div>
  <button class="btn btn-danger mx-auto" id="delete--${student.id}">Expel</button>
  <div class="cardFooter ${cardFooter}"> ${student.house}</div>
  </div>`;
}
renderToDom("#app", domString);
};
cardsOnDom(students);

// Filter Function

// const filter = (array, studenthouse) => {
//     const studentArray = [];

//     for (const student of array) {
//       if (student.house === studenthouse) {
//         studentArray.push(student);
//       }
//     }
//   // Filter function needs this
//     return studentArray;
//   };

//   // Targeting buttons on the dom
//   cardsOnDom(students);
  
//   const showCatsButton = document.querySelector("#cats"); 
// const showDogsButton = document.querySelector("#dogs");
// const showDinosButton = document.querySelector("#dinos");
// const showAllPetsButton = document.querySelector("#allPets");

// showAllPetsButton.addEventListener("click", () => {
//   cardsOnDom(pets);
// });

// showCatsButton.addEventListener("click", () => {
//   const catsPets = filter(pets, "cat");
//   cardsOnDom(catsPets);
// });

// showDogsButton.addEventListener("click", () => {
//   const dogsPets = filter(pets, "dog");
//   cardsOnDom(dogsPets);
// });

// showDinosButton.addEventListener("click", () => {
//   const dinoPets = filter(pets, "dino");
//   cardsOnDom(dinoPets);
// });
