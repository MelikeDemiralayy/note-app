
const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = popupBox.querySelector("header i");
const addBtn = popupBox.querySelector("button");
const titleTag = popupBox.querySelector("input");
const descTag = popupBox.querySelector("textarea");
const popupTitle = popupBox.querySelector("header p");

const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const notes = JSON.parse(localStorage.getItem("notes") || "[]");

addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
    addBtn.innerText = "Add Note";
    popupTitle.innerText = "Add a New Note";
    titleTag.value = "";  // Yeni not eklerken eski verilerin kalmaması için temizle
    descTag.value = "";
});

closeIcon.addEventListener("click", () => {
    titleTag.value = "";
    descTag.value = "";
    popupBox.classList.remove("show");
});

function showNotes() {
    document.querySelectorAll(".note").forEach(note => note.remove());
    notes.forEach((note, index) => {
        // Burada description değeri doğru olduğundan emin olun
        let liTag = `
        <li class="note">
            <div class="details">
                <p>${note.title}</p>
                <span>${note.description}</span>  <!-- description burada doğru yazılmalı -->
            </div>
            <div class="bottom-content">
                <span>${note.date}</span>
                <div class="settings">
                    <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                    <ul class="menu">
                        <li onclick="updateNote(${index}, '${note.title}', '${note.desc}')"><i class="uil uil-pen"></i> Edit</li>
                        <li onclick="deleteNote(${index})"><i class="uil uil-trash"></i> Delete</li>
                    </ul>
                </div>
            </div>
        </li>`;
        addBox.insertAdjacentHTML("afterend", liTag);
    });
}

showNotes();

// Menüyi gösterme
function showMenu(elem) {
    elem.parentElement.classList.toggle("show");
    document.addEventListener("click", e => {
        if (!e.target.closest(".settings")) {
            elem.parentElement.classList.remove("show");
        }
    });
}

// Not silme
function deleteNote(noteId) {
    notes.splice(noteId, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}

// Not güncelleme
function updateNote(noteId, title, desc) {
    addBox.click();  // Popup'ı açma
    addBtn.innerText = "Update Note";  // Buton yazısını güncelle
    popupTitle.innerText = "Update a Note";  // Başlığı güncelle
    titleTag.value = title;  // Eski başlık değerini al
    descTag.value = desc;  // Eski açıklamayı al
    currentNoteId = noteId;  // Güncellenecek notu kaydet
}

// Yeni veya güncellenmiş not ekleme
addBtn.addEventListener("click", e => {
    e.preventDefault();
    let noteTitle = titleTag.value;
    let noteDesc = descTag.value;

    if (noteTitle || noteDesc) {
        let dateObj = new Date();
        let month = months[dateObj.getMonth()];
        let day = dateObj.getDate();
        let year = dateObj.getFullYear();

        let noteInfo = {
            title: noteTitle,
            description: noteDesc,
            date: `${month} ${day} ${year}`
        };

        if (isEditing) {
            notes[currentNoteId] = noteInfo;  // Mevcut notu güncelle
        } else {
            notes.push(noteInfo);  // Yeni not ekle
        }

        localStorage.setItem("notes", JSON.stringify(notes));
        closeIcon.click();  // Popup'ı kapat
        showNotes();  // Notları tekrar göster
    }
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
     date:`${month} ${day} ${year}`

   }
       console.log(noteInfo)
    // console.log(noteDesc,noteTitle)
    // console.log(month,day, year)

    notes.push(noteInfo);
    // const notes = JSON.parse(localStorage.getItem("notes") || "[]");    
    localStorage.setItem("notes",JSON.stringify(notes));
    closeIcon.click();
    showNotes();
   }
 
});
