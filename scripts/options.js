document.addEventListener("DOMContentLoaded", function() {
  const doc = document;
  const store = localStorage;
  const quizLengthElement = doc.getElementById('quizLength');
  const incrementButton = doc.querySelector('.increment');
  const decrementButton = doc.querySelector('.decrement');
  const input = doc.querySelector('input[type="number"]');

  const setLocalStorageAndLog = (element, isCheckbox) => {
    element.addEventListener('change', function() {
      store.setItem(element.id, isCheckbox ? this.checked.toString() : this.value);
    });
  };
  setLocalStorageAndLog(quizLengthElement, false);
  quizLengthElement.value = store.getItem('quizLength') || 15;

  const updateValue = (shouldIncrement) => {
    const incrementValue = shouldIncrement ? 5 : -5;
    const value = parseInt(input.value, 10) + incrementValue;
    
    input.value = shouldIncrement 
      ? Math.min(value, 100)
      : Math.max(value, 5);
      
    input.dispatchEvent(new Event('change'));
  }
  
  incrementButton.addEventListener('click', () => updateValue(true));
  decrementButton.addEventListener('click', () => updateValue(false));
});