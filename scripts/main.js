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
