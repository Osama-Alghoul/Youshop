const minPriceInput = document.querySelector('.min-thumb');
const maxPriceInput = document.querySelector('.max-thumb');
const minPriceDisplay = document.getElementById('min-price');
const maxPriceDisplay = document.getElementById('max-price');
const sliderTrack = document.querySelector('.slider-track');

function updateRange() {
  const minVal = parseInt(minPriceInput.value);
  const maxVal = parseInt(maxPriceInput.value);

  if (minVal > maxVal) {
    const temp = minPriceInput.value;
    minPriceInput.value = maxPriceInput.value;
    maxPriceInput.value = temp;
  }

  const min = parseInt(minPriceInput.value);
  const max = parseInt(maxPriceInput.value);
  const minPercentage = (min / 5500) * 100;
  const maxPercentage = (max / 5500) * 100;

  minPriceDisplay.textContent = min;
  maxPriceDisplay.textContent = max;

  sliderTrack.style.left = minPercentage + '%';
  sliderTrack.style.width = (maxPercentage - minPercentage) + '%';
}

minPriceInput.addEventListener('input', updateRange);
maxPriceInput.addEventListener('input', updateRange);

// Initial call to set the range on load
updateRange();