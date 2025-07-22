const block = document.getElementById('scrollable-block');
let isDragging = false;
let startPositionX;
let scrollLeft;

block.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPositionX = e.pageX - block.offsetLeft;
    scrollLeft = block.scrollLeft;
    block.classList.add('dragging');
});

block.addEventListener('mouseup', () => {
    isDragging = false;
    block.classList.remove('dragging');
});

block.addEventListener('mouseleave', () => {
    isDragging = false;
    block.classList.remove('dragging');
});

block.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - block.offsetLeft;
    const walk = (x - startPositionX);
    block.scrollLeft = scrollLeft - walk;
});