function steam_Sensor () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        return 1
    } else {
        return 0
    }
}
basic.forever(function () {
    steam_Sensor()
    if (steam_Sensor() == 1) {
        music.setVolume(255)
        music.ringTone(262)
        music.setVolume(0)
    } else {
        music.setVolume(0)
    }
})
