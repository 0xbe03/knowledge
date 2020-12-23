# -*- coding: utf-8 -*-

year = int(input("Enter your year: "))

if year % 4 == 0:
    if year % 100 ==0:
        if year % 400 == 0:
            print("The year " + str(year) + " is Leap year")
else:
    print("The year " + str(year) + " is NOT Leap year")
