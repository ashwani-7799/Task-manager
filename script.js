// const checkboxlist = document.querySelectorAll(".custom-checkbox");
// const inpurtfields = document.querySelectorAll(".goal-input");
let inpurtfields;
const errorlabel = document.querySelector(".error-label");
const progressbar = document.querySelector(".progress-bar");
const wellknow = document.querySelector(".wellknow");
const progressvalue = document.querySelector(".progress-value");
const progresslevel = document.querySelector(".progress-level");
// const addbutton = document.querySelector(".addbutton");
const goalcontainer = document.querySelectorAll(".goal-container");
const fatherofgoalconatiner = document.querySelector(".fatherofgoalconatiner");
let count = 0;

let a = JSON.parse(localStorage.getItem("a")) || []; 


// let a = [];
const allQuotes = [
  "Raise the bar by completing your goals!",
  "Well begun is half done!",
  "Just a step away keep going!",
  "Completing half gives full motivation",
  "Whoa! You just completed all the goals",
  "time for chill :D",
];

// const allgoals = JSON.parse(localStorage.getItem("allgoals")) || {
//   first: { name: "", completed: false },
//   second: { name: "", completed: false },
//   third: { name: "", completed: false },
// };

const allgoals = JSON.parse(localStorage.getItem("allgoals")) || {};
addelement();

// let completedgoalcount = Object.values(allgoals).filter(
//   (goal) => goal.completed
// ).length;

// progressvalue.style.width = `${
//   (completedgoalcount / inpurtfields.length) * 100
// }%`;
// progressvalue.firstElementChild.innerText = `${completedgoalcount}/${inpurtfields.length} completed`;
// progresslevel.innerText = allQuotes[completedgoalcount];

// checkboxlist.forEach((checkbox) => {
//   checkbox.addEventListener("click", (e) => {
//     const allgoaladded = [...inpurtfields].every(function (input) {
//       return input.value;
//     });

//     if (allgoaladded) {
//       checkbox.parentElement.classList.toggle("completed");
//       // progressvalue.style.width = '33%';
//       const inputid = checkbox.nextElementSibling.id;

//       allgoals[inputid].completed = !allgoals[inputid].completed;
//       completedgoalcount = Object.values(allgoals).filter(
//         (goal) => goal.completed
//       ).length;
//       progressvalue.style.width = `${
//         (completedgoalcount / inpurtfields.length) * 100
//       }%`;
//       progressvalue.firstElementChild.innerText = `${completedgoalcount} / ${inpurtfields.length} completed`;
//       progresslevel.innerText = allQuotes[completedgoalcount];

//       localStorage.setItem("allgoals", JSON.stringify(allgoals));
//     } else {
//       progressbar.classList.add("show-error");
//     }
//   });
// });

// inpurtfields.forEach((input) => {
//   /////one//////////////////////////////
//   // if(input.id == 'third'){
//   //   input.value = 'koko';
//   // }

//   ///////////////two//////////////////
//   // input.value = input.id == 'third' ? 'koko' : input.value;

//   //////////////third/////////////
//   // input.value = inputValues[input.id] || input.value;

//   // console.log(input.id);
//   // input.value = allgoals[input.id].name;

//   if (allgoals[input.id]) {
//     input.value = allgoals[input.id].name;

//     if (allgoals[input.id].completed) {
//       input.parentElement.classList.add("completed");
//     }
//   }

//   // if (allgoals[input.id].completed) {
//   //   input.parentElement.classList.add("completed");
//   // }

//   input.addEventListener("focus", () => {
//     progressbar.classList.remove("show-error");
//   });

//   input.addEventListener("input", (e) => {
//     if (allgoals[input.id] && allgoals[input.id].completed) {
//       e.target.value = allgoals[input.id].name;
//       return;
//     }

//     if (allgoals[input.id]) {
//       allgoals[input.id].name = input.value;
//     } else {
//       allgoals[input.id] = {
//         name: input.value,
//         completed: false,
//       };
//     }

//     localStorage.setItem("allgoals", JSON.stringify(allgoals));
//   });
// });

function moretask() {
  if (a.length === 0) {
    a.push(1);
  } else if (a.length < 5) {
    a.push(a[a.length - 1] + 1);
  } else {
    return; 
  }

  localStorage.setItem("a", JSON.stringify(a));

  addelement();
}

function addelement() {
  if (!a) {
    return;
  }

  let innerHtml = ``;

  a.forEach(( element , index) => {
    innerHtml += `<div class="goal-container">
      <div class="custom-checkbox">
        <img class="check" src="images/Vector1.png" alt="check" />
      </div>
      <input
        id="${index}"
        class="goal-input"
        type="text"
        placeholder="Add a new goal"
      />
          <img class="delimage" onclick="del(${index})" src="images/delete.png" alt="sun"/>
    </div>`;
  });

  fatherofgoalconatiner.innerHTML = innerHtml;
  spaa();

  console.log("inside  for each loop");

  inputfields();
}

function inputfields() {
  inpurtfields = document.querySelectorAll(".goal-input");

  inpurtfields.forEach((input) => {
    // console.log(`hey this is  input id ${input.value} `);

    /////one//////////////////////////////
    // if(input.id == 'third'){
    //   input.value = 'koko';
    // }

    ///////////////two//////////////////
    // input.value = input.id == 'third' ? 'koko' : input.value;

    //////////////third/////////////
    // input.value = inputValues[input.id] || input.value;

    // console.log(input.id);
    // input.value = allgoals[input.id].name;

    if (allgoals[input.id]) {
      input.value = allgoals[input.id].name;

      if (allgoals[input.id].completed) {
        input.parentElement.classList.add("completed");
      }
    }

    // if (allGoals[input.id].completed) {
    //   input.parentElement.classList.add("completed");
    // }

    input.addEventListener("focus", () => {
      wellknow.classList.remove("show-error");
    });

    input.addEventListener("input", (e) => {
      if (allgoals[input.id] && allgoals[input.id].completed) {
        e.target.value = allgoals[input.id].name;
        return;
      }

      if (allgoals[input.id]) {
        allgoals[input.id].name = input.value;
       
      } else {
  
        allgoals[input.id] = {
          name: input.value,
          completed: false,
        };
      }
      // console.log(`hey this is  input id ${input.value} `);

      localStorage.setItem("allgoals", JSON.stringify(allgoals));
    });
  });

  let completedgoalcount = Object.values(allgoals).filter(
    (goal) => goal.completed
  ).length;

  progressvalue.style.width = `${
    (completedgoalcount / inpurtfields.length) * 100
  }%`;
  progressvalue.firstElementChild.innerText = `${completedgoalcount}/${inpurtfields.length} completed`;
  progresslevel.innerText = allQuotes[completedgoalcount];

  const checkboxlist = document.querySelectorAll(".custom-checkbox");

  checkboxlist.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      const allgoaladded = [...inpurtfields].every(function (input) {
        return input.value;
      });

      if (allgoaladded) {
        checkbox.parentElement.classList.toggle("completed");
        // progressvalue.style.width = '33%';
        const inputid = checkbox.nextElementSibling.id;

        allgoals[inputid].completed = !allgoals[inputid].completed;
        completedgoalcount = Object.values(allgoals).filter(
          (goal) => goal.completed
        ).length;
        progressvalue.style.width = `${
          (completedgoalcount / inpurtfields.length) * 100
        }%`;
        progressvalue.firstElementChild.innerText = `${completedgoalcount} / ${inpurtfields.length} completed`;
        progresslevel.innerText = allQuotes[completedgoalcount];

        localStorage.setItem("allgoals", JSON.stringify(allgoals));
      } else {
     
        // error();
        wellknow.classList.add("show-error");
        error1();
      }
    });
  });
}

// function error() {
//   count = 0;
//   length = a.length;

//   if (allGoals) {
//     Object.keys(allGoals).forEach((key) => {
//       // Check if the name property is an empty string
//       if (allGoals[key].name === "") {
//         count++;
//       }
//     });
//   }
//   if (count == 5) {

//     errorlabel.innerText = `Please set all goals!`;
//   } else {
//     errorlabel.innerText = `Please set remaning ${count} goals!`;
//   }
// }

function spaa() {
  const spa = document.querySelector(".spa");
  const goalinput = document.querySelectorAll(".goal-input");

  const length = 5 - goalinput.length;

  if (length == 0) {
    spa.innerText = `MAX LIMIT EXCEED`;
  } else {
    spa.innerText = `ADD ${length} TASK MORE`;
  }
}

function error1(){

  count = 0;
   inpurtfields.forEach((element) =>{
    if(element.value == ''){ 
      count++;
      console.log(`hey please set ${count} goals`)
    }
   })

   if(count == 5){
     errorlabel.innerText = `Please set all goals!`

   }

   else{
     errorlabel.innerText = `Please set remaning ${count} goals!`
   }

}

function del(index) { 

  if (allgoals) {
    // Adjust allgoals by shifting indexes after splice
    delete allgoals[index];
    
    Object.keys(allgoals).forEach((key) => {
      if (key > index) {
        allgoals[key - 1] = allgoals[key]; // Shift down by 1
      } else if (key < index) {
        allgoals[key] = allgoals[key]; // Keep lower indexes the same
      }
    });
    delete allgoals[Object.keys(allgoals).length - 1];

    localStorage.setItem("allgoals", JSON.stringify(allgoals));
    
    a.splice(index, 1); // Remove from a
    localStorage.setItem("a", JSON.stringify(a));
  }

 
  addelement(); // Re-render the task list
 
}
 