
const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = popupBox.querySelector("header i");
addBtn = popupBox.querySelector("button");
titleTag = popupBox.querySelector("input");
descTag = popupBox.querySelector("textarea");



const months = [
    "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    

const notes = JSON.parse(localStorage.getItem("notes") || "[]");



addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});


closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
});


addBtn.addEventListener("click", e => {
   e.preventDefault();
   let noteTitle = titleTag.value,
   noteDesc = descTag.value;

   if(noteTitle || noteDesc){
    let dateObj = new Date();
    month = months[dateObj.getMonth()];
    day = dateObj.getDate();
    year = dateObj.getFullYear();

   let noteInfo ={
     title: noteTitle, desciription: noteDesc,
     date:`${month},${day},${year}`

   }
       console.log(noteInfo)
    // console.log(noteDesc,noteTitle)
    // console.log(month,day, year)


    const notes = [];
    notes.push(noteInfo);
    localStorage.setItem("notes",JSON.stringify(notes))
   }
 
});

//32