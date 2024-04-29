const newTestamentBooks = ["Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];
const activeBooks = new Set([]);

document.addEventListener("DOMContentLoaded", function() {
  const chaptersElement = document.getElementById('chapters');
  const fragment = document.createDocumentFragment();

  if (chaptersElement) {
    newTestamentBooks.forEach((book) => {
      const isActiveBook = activeBooks.has(book);
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.name = book.toLowerCase().replace(' ', '');
      input.value = book;
      input.id = input.name;
      if (!isActiveBook) {input.disabled = true;}

      if (isActiveBook) {
        const storedValue = localStorage.getItem(input.id);
        if (storedValue !== null) {input.checked = storedValue === 'true';}
        if (storedValue === null) {localStorage.setItem(input.id, 'true');}
      }

      const label = document.createElement('label');
      label.htmlFor = input.id;
      label.textContent = book;
    
      fragment.appendChild(input);
      fragment.appendChild(label);
    });

    chaptersElement.appendChild(fragment);

    const newTestamentCheckboxes = document.querySelectorAll("input[type='checkbox']:not(:disabled)");
    const toggleAllCheckbox = document.getElementById("toggleAll");

    toggleAllCheckbox.addEventListener("change", () => {
      newTestamentCheckboxes.forEach((checkbox) => {
        if (checkbox.id !== "toggleAll" && !checkbox.disabled && activeBooks.has(checkbox.value)) {
          checkbox.checked = toggleAllCheckbox.checked;
          localStorage.setItem(checkbox.id, checkbox.checked.toString());
        }
      });
    });
  }
});