function redirect() {
    let random = Math.floor(Math.random() * 10)
    if ( random <= 5) {
        window.open('https://www.amazon.com/', 'yahoo', 'width=200, height=200');
    } else {
        let current_hour = (new Date()).getHours()
        if (current_hour >= 12) {
            alert("Buenos tardes")
        } else {
            alert("Buenas dias")
        }
    }
}