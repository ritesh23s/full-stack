console.log("create diffrent patterns using nested for loop");

for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star += '*';
    }
    console.log(star);
}

for (let i = 10; i >= 1; i--) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star += "S";
    }
    console.log(star);
}


