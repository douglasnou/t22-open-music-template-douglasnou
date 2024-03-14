export function applyInputRangeStyle() {
    const inputRange = document.querySelector("#precos-range");
  
    inputRange.addEventListener("input", (event) => {
      const currentInputValue = event.target.value;
      const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
  
      inputRange.style.background = `linear-gradient(to right, var(--color-purple) 
      ${runnableTrackProgress}%, var(--color-input-gray) ${runnableTrackProgress}%)`;
    });
  }

