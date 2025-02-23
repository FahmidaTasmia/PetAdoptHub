document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    // Toggle menu visibility when button is clicked
    button.addEventListener('click', function() {
        menu.classList.toggle('hidden');
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
    });

    // Close the menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!button.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.add('hidden');
            button.setAttribute('aria-expanded', 'false');
        }
    });
});

//load categories

const loadCategories =()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories))
    .catch(error=>console.log(error))
}

//display categories

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categoryContainer.innerHTML = ''; // Clear previous content

    categories.forEach(pet => {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'flex'; // Ensure proper grid behavior
        buttonContainer.innerHTML = `
            <button class="w-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 p-3 md:p-4 bg-white rounded-xl hover:rounded-full border border-gray-200 hover:border-teal-600 hover:bg-teal-50 transition-all duration-300 shadow-sm hover:shadow-md group">
                <img class="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 object-contain transition-all duration-300 group-hover:scale-110" 
                     src="${pet.category_icon}" 
                     alt="${pet.category} icon">
                <span class="text-sm md:text-base font-medium text-gray-700 group-hover:text-teal-800">
                    ${pet.category}
                </span>
            </button>
        `;
        categoryContainer.appendChild(buttonContainer);
    });
};



loadCategories();
