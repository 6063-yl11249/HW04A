function setup() {
    createCanvas(windowWidth, windowHeight);
    background('beige');
}

function draw() {
    background('beige');

    // Draw rect by seconds
    drawrectByTime (2 * width / 3, 0, second(), 59, 'gold');
    
    // Draw rect by minutes
    drawrectByTime (width / 3, 0, minute(), 59, 'pink');

    // Draw rect by hours
    drawrectByTime (0, 0, hour(), 23, 'lightblue');
}

function drawrectByTime (x, y, Period, maxTime,rectColor){
    let timeNow = Period;
    let rectHeight = map(timeNow, 0, maxTime, 1, height);
    fill(rectColor);
    noStroke();
    rect(x, y, width / 3, rectHeight);
}