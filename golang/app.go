package main 

import "fmt"

func vals() (int,int) {
	return 7,3
}

func main() {
	a,b := vals()
	fmt.Println(a)
	fmt.Println(b)
}