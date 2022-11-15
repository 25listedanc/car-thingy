input.onButtonPressed(Button.A, function () {
    servos.P0.run(100)
    servos.P1.run(-100)
})
basic.forever(function () {
	
})
