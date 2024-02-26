var h1 = document.createElement("h1");
document.body.append(h1);
setTimeout(() => {
    h1.innerHTML = "Countdown: 10"
    setTimeout(() => {
        h1.innerHTML = "Countdown: 9"
        setTimeout(() => {
            h1.innerHTML = "Countdown: 8"
            setTimeout(() => {
                h1.innerHTML = "Countdown: 7"
                setTimeout(() => {
                    h1.innerHTML = "Countdown: 6"
                    setTimeout(() => {
                        h1.innerHTML = "Countdown: 5"
                        setTimeout(() => {
                            h1.innerHTML = "Countdown: 4"
                            setTimeout(() => {
                                h1.innerHTML = "Countdown: 3"
                                setTimeout(() => {
                                    h1.innerHTML = "Countdown: 2"
                                    setTimeout(() => {
                                        h1.innerHTML = "Countdown: 1"
                                        setTimeout(() => h1.innerHTML = "Happy Independence Day", 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
// console.log(setTimeout());