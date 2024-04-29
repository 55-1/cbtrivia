const oldTestamentBooks = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi"]
const activeBooks = new Set(["Genesis", "Exodus"]);

document.addEventListener("DOMContentLoaded", function() {
  const chaptersElement = document.getElementById('chapters');
  const fragment = document.createDocumentFragment();

  if (chaptersElement) {
    oldTestamentBooks.forEach((book) => {
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

    const oldTestamentCheckboxes = document.querySelectorAll("input[type='checkbox']:not(:disabled)");
    const toggleAllCheckbox = document.getElementById("toggleAll");

    toggleAllCheckbox.addEventListener("change", () => {
      oldTestamentCheckboxes.forEach((checkbox) => {
        if (checkbox.id !== "toggleAll" && !checkbox.disabled && activeBooks.has(checkbox.value)) {
          checkbox.checked = toggleAllCheckbox.checked;
          localStorage.setItem(checkbox.id, checkbox.checked.toString());
        }
      });
    });
  }
});