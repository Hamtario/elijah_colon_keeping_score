input.onButtonPressed(Button.A, function () {
    rylee += 1
    basic.showNumber(rylee)
    basic.showString("R")
})
input.onButtonPressed(Button.AB, function () {
    Tie += 1
    basic.showNumber(Tie)
    basic.showString("T")
})
input.onButtonPressed(Button.B, function () {
    boat += 1
    basic.showNumber(boat)
    basic.showString("B")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Rylee")
    basic.showNumber(rylee)
    basic.showString("Boat")
    basic.showNumber(boat)
    basic.showString("Tie")
    basic.showNumber(Tie)
})
let Tie = 0
let boat = 0
let rylee = 0
rylee = 0
boat = 0
Tie = 0
