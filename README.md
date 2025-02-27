
# Pet Adoption Hub 🐾

A modern pet adoption platform connecting loving families with pets in need. This project demonstrates full-stack capabilities with a focus on frontend development, API integration, and responsive design.

![Project Preview](images/pet.webp) *![alt text](image.png)*

## Key Features ✨

- **Responsive UI**: Mobile-first design with Tailwind CSS + DaisyUI components
- **Dynamic Content**: Real-time pet data fetching from REST API
- **Interactive Elements**:
  - Mobile-responsive hamburger menu
  - Price sorting (Low-High/High-Low)
  - Favorites gallery with image storage
  - Pet details modal with vaccination info
- **Error Handling**: Graceful error states for API failures
- **Accessibility**: ARIA labels and semantic HTML
- **Performance Optimizations**:
  - Lazy image loading
  - Dynamic content rendering
  - Efficient state management

## Technologies Used 🛠️

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **API**: [Programming Hero Pet API](https://openapi.programming-hero.com/api/peddy)
- **Tooling**: Vite (recommended), npm scripts

## Installation & Usage 🚀

1. **Clone Repository**
```bash
git clone https://github.com/FahmidaTasmia/PetAdoptHub.git
cd petAdoptHub

## Code Highlights 🔍

### **API Integration**:
This project fetches real-time data from a REST API to display pet categories.

```javascript
// Fetching pet categories
const loadCategories = () => {
  fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.error(error));
};

### **Price Sorting**:
This feature allows users to sort pets by price in both ascending and descending order, providing an efficient way to view pets based on their affordability.

```javascript
const handleSortChangeByPrice = (selectElement) => {
  const sortedPets = [...allPets].sort((a, b) => 
    selectElement.value === 'lowToHigh' ? a.price - b.price : b.price - a.price
  );
  displayAllPets(sortedPets);
};

### **Modal Handling**:
This feature displays detailed information about a pet in a modal window when a user clicks on a specific pet. It allows users to view additional information, such as the pet's image and details, in a clean and user-friendly modal interface.

```javascript
const displayDetails = (petData) => {
  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = `
    <img src="${petData.image}" class="w-full rounded-lg">
    <h3 class="text-xl font-semibold">${petData.pet_name}</h3>
    <p>${petData.pet_details}</p>
  `;
  document.getElementById('customModal').showModal();
};

## Project Structure 📂

pet-adoption-hub/
├── src/
│   ├── assets/
│   ├── scripts/
│   │   └── main.js
│   ├── styles/
│   │   └── main.css
│   └── index.html
├── public/
│   └── images/
├── package.json
└── vite.config.js

## Professional Skills Demonstrated 💼

- **REST API Integration**: Fetching and displaying real-time data from a remote API.
- **Responsive UI Development**: Building mobile-first, responsive layouts using [Tailwind CSS](https://tailwindcss.com/).
- **State Management**: Managing dynamic state in the app (e.g., sorting pets, storing favorite pets).
- **DOM Manipulation**: Interacting with the DOM to display data and handle user actions (e.g., opening modals, sorting data).
- **Error Handling**: Gracefully handling errors, including API failures and missing data.
- **Performance Optimization**: Using techniques like lazy loading and dynamic rendering to optimize app performance.
- **Version Control (Git)**: Utilizing Git for version control .]
