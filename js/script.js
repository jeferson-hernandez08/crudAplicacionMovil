
// document.addEventListener('DOMContentLoaded', function () {
//     const dropdownButton = document.getElementById('dropdownButton');
//     const dropdownContent = document.getElementById('dropdownContent');

//     dropdownButton.addEventListener('click', function () {
//         dropdownContent.classList.toggle('hidden');
//     });

//     // Cierra el dropdown si se hace clic fuera de él
//     window.addEventListener('click', function (event) {
//         if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
//             dropdownContent.classList.add('hidden');
//         }
//     });
// });

//Funcionabilidad Modal
const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModal');

openModalButton.addEventListener('click', () => {
    // barraLateral.classList.add('active');
    modal.classList.remove('hidden');
});

// closeModalButton.addEventListener('click', () => {
//     // barraLateral.classList.remove('active');
//     modal.classList.add('hidden');
// });
function cerrarModal(){
    modal.classList.add('hidden');
}

//Funcionabilidad Side bar
const toggleSidebarButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const closeSidebarButton = document.getElementById('closeSidebar');

toggleSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
});

closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
});

// document.getElementsByClassName("lis").addEventListener("click", e=>{
//     barraLateral.classList.add("active");
// });