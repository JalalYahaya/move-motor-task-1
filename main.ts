input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 1)
})
input.onButtonPressed(Button.AB, function () {
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 1)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.stop()
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 2)
})
basic.forever(function () {
	
})
