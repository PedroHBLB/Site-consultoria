const crudFile_container = document.getElementsByClassName("crud_container")[0];
const crudAnot_container = document.getElementsByClassName("crud_container")[1];

const editFile_button = crudFile_container.children[0].children[1];
const deleteFile_button = crudFile_container.children[0].children[2];
const editAnot_button = crudAnot_container.children[0].children[1];
const deleteAnot_button = crudAnot_container.children[0].children[2];

editFile_button.style.color = "white";
editFile_button.style.background = "gray";
editFile_button.style.pointerEvents = "none";

deleteFile_button.style.color = "white";
deleteFile_button.style.background = "gray";
deleteFile_button.style.pointerEvents = "none";

editAnot_button.style.color = "white";
editAnot_button.style.background = "gray";
editAnot_button.style.pointerEvents = "none";

deleteAnot_button.style.color = "white";
deleteAnot_button.style.background = "gray";
deleteAnot_button.style.pointerEvents = "none";
