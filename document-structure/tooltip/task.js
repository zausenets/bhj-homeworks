const tooltipElements = document.querySelectorAll('.has-tooltip');

let activeTooltip = null;

tooltipElements.forEach(element => {
    element.addEventListener('click', function (event) {
        event.preventDefault();

        if (activeTooltip) {
            activeTooltip.remove();
            activeTooltip = null;

            if (activeTooltip === this) {
                return;
            }
        }

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip tooltip_active';
        tooltip.textContent = element.getAttribute('title');

        const coords = element.getBoundingClientRect();

        tooltip.style.left = `${coords.left}px`;
        tooltip.style.top = `${coords.bottom + 5}px`;

        document.body.appendChild(tooltip);

        activeTooltip = tooltip;
    });
});

document.addEventListener('click', function (event) {
    if (
        activeTooltip &&
        !event.target.classList.contains('has-tooltip')
    ) {
        activeTooltip.remove();
        activeTooltip = null;
    }
});