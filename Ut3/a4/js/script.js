function redirect() {
    let limit = Math.trunc((Math.random() * 10 + 1));
    const date = new Date();
    let hour = date.getHours();
    let good_morning = "Buenos dias";
    let good_afternoon = "Buenas tardes";
    if ( limit <= 5) {
        location.href="https://www.google.com";
    } else {
        if (hour < 12) {
            alert(good_morning);
        } else {
            alert(good_afternoon);
        }
    }
}