const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});


Selection.addEventListener("click",()=>{
    Options_list.classList.toggle("active");
    Selection.querySelector(".fa-chevron-down").classList.toggle("fa-chevron-up");
})