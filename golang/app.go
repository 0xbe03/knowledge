package main

import "fmt"

const usinteenbitmax float64 = 65535
const kmh_multiple float64 = 1.609

type car struct {
	gas_pedal uint16
	brake_pedal uint16
	string_wheel int16
	top_speed_kmh float64
}

func (c car) kmh() float64 {
	return c.top_speed_kmh * kmh_multiple
}

func main() {
	a := car{gas_pedal: 22300, brake_pedal: 200, string_wheel: 4, top_speed_kmh:360.0}
	fmt.Println(a.gas_pedal)
	fmt.Println(a.kmh())

}