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

const darkArmy = [{
  id: 1,
  name:"Gexium",
  wand:"Black Ichor",
  house: "Slytherin",
  imageUrl:"https://static.wikia.nocookie.net/evil-never-dies/images/b/b8/Dark_Wizard_FINAL.jpg/revision/latest?cb=20160920162126",
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
            student.house === "Ravenclaw" ? "Ravenclaw-Footer":
            '';

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

const filter = (array, studenthouse) => {
    const studentArray = [];

    for (const student of array) {
      if (student.house === studenthouse) {
        studentArray.push(student);
      }
    }
  // Filter function needs this
    return studentArray;
  };

  // Targeting buttons on the dom
  cardsOnDom(students);
  
const showGryffindorButton = document.querySelector("#Gryffindor"); 
const showSlytherinButton = document.querySelector("#Slytherin")
const showHufflepuffButton = document.querySelector("#Hufflepuff");
const showRavenclawButton = document.querySelector("#Ravenclaw");
const showAllStudentsButton = document.querySelector("#AllStudents");

showAllStudentsButton.addEventListener("click", () => {
  cardsOnDom(students);
});

showGryffindorButton.addEventListener("click", () => {
  const gryffindorStudents = filter(students, "Gryffindor");
  cardsOnDom(gryffindorStudents);
});

(document.querySelector("#Slytherin")).addEventListener("click", () => {
  const slytherinStudents = filter(students, "Slytherin");
  cardsOnDom(slytherinStudents);
});

showHufflepuffButton.addEventListener("click", () => {
  const hufflepuffStudents = filter(students, "Hufflepuff");
  cardsOnDom(hufflepuffStudents);
});

showRavenclawButton.addEventListener("click", () => {
  const ravenclawStudents = filter(students, "Ravenclaw");
  cardsOnDom(ravenclawStudents);
});

// const form = document.querySelector('form');

// const createStudent= (e) => {
// //  Allforms need this
//   e.preventDefault();
   
//   const createStudentObj= {
//     id:students.length + 1,
//     name:document.querySelector("#name").value,
//     color:document.querySelector("#color").value,
//     specialSkill:document.querySelector("#specialSkill").value,
//     house:document.querySelector("#house").value,
//     imageUrl:document.querySelector("#imageUrl").value,

//   };

//   // Add pet function /double check variables when pasting

//   students.push(createStudentObj);
//   cardsOnDom(students);
//   form.reset();
// };
// form.addEventListener('submit', createStudent);

const app=document.querySelector("#app");

app.addEventListener('click', (e) => {
  if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split("--");
    const index= students.findIndex((e) => e.id===Number(id));

    darkArmy.splice(index, 1);
    cardsOnDom(students);
    cardsOnDom(darkArmy);

  }
});
