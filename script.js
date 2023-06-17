let isDragging = false;
const slider = document.querySelector('.slider');
const valueDisplay = document.querySelector('.slider-value');
const tickmarks = document.querySelector('.tickmarks');
const sliderContainer = document.querySelector('.slider-container');
const sliderWidth = sliderContainer.clientWidth;

// начальное положение слайдера и значения
let sliderPosition = 0;
slider.style.left = `${sliderPosition - 8}px`;
valueDisplay.style.left = `${sliderPosition + 1}px`;
valueDisplay.textContent = sliderWidth //Math.round((sliderPosition / sliderWidth) * 100);

// нажатие мыши
slider.addEventListener('mousedown', (event) => {
    isDragging = true;
});

// отслеживание движения мыши
document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        // вычисление положение слайдера по положению курсора
        let mouseX = event.clientX - sliderContainer.offsetLeft;
        sliderPosition = Math.max(0, Math.min(mouseX, sliderWidth));

        // обновление положение слайдера и значения
        slider.style.left = `${sliderPosition - 8}px`;
        valueDisplay.style.left = `${sliderPosition + 1}px`;
        valueDisplay.textContent = Math.round((sliderPosition / sliderWidth) * 100);
    }
});

// отпускание мыши
document.addEventListener('mouseup', () => {
    isDragging = false;
});

// метки на оси
const tickmarkValues = [0, 25, 50, 75, 100];
// добавление меток
tickmarkValues.forEach((value) => {
    const tickmark = document.createElement('div');
    tickmark.classList.add('tickmark');
    tickmark.style.left = `${value}%`;

    const tickmarkLabel = document.createElement('div');
    tickmarkLabel.classList.add('tickmark-label');
    tickmarkLabel.textContent = value;
    tickmark.appendChild(tickmarkLabel);

    tickmarks.appendChild(tickmark);
});
