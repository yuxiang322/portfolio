function toggleExpand(button) {
    const expandableContent = button.closest('.expandableContent');
    //Toggle
    const content = expandableContent.querySelector('.certContent');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.textContent = '-';
    } else {
        content.style.display = 'none';
        button.textContent = '+';
    }
}