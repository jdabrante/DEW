function newWindow() {
    if (confirm('Open a new window?')) {
        window.open('form.html', 'new_window', 'height=800, width=800');
    } else {
        alert('Register can\'t be complete')
    }
}
