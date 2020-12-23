friends = ["Ali" , "Reza" , "Mahdi" , "Ahmad"]

print(friends[0])

for friend in friends:
    print(friend)


a = [1,2,3]
b = [4,5,6]
c = a + b
print(c)

d = c * 2
print(d)

print(d[2:5])

d.append("In Taze ezafe shod")
print(d)
d.sort()
print(d)

x = ["a","b"]
y = ["c" , "d"]
x.extend(y)
print(x)
x.pop(1)
print(x)
x.remove("d")
print(x)

s = "Reza"
t = list(s)
print(t)

s2 = "My name is Reza"
t2 = s2.split()
print(t2)