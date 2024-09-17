For this assignment, you are going to use your knowledge of JavaScript to create an interest calculator. Everything you need to know to get this to work you have learned in class except for a couple of things. The rest of this document will explain in detail those things that you need to make this work properly.

Interest Calculation
Unless you have a secret passion for finances, you probably do not know the calculation for finding interest. Therefore, the formula below will help guide your assignment:

Total = Principle(1+Rate\*Time)

Principle is the amount of money invested.
Rate is the interest rate you are receiving
Time is the amount of time the money will accrue interest. (In this case, you will use years.)

parseFloat
We haven't talked about getting numeric values from input elements. You will notice that it doesn't matter whether the input element is a text or number input element, it will result in a string. Go ahead and try it. I have included the following input elements to demonstrate this point. Click on the Check Console button after you input values in each text field:

You can see on the page that even when I try to add the number values together, it treats them as strings. That is because they are strings. You need to convert them to integers before you can do any computations.

Luckily, changing these string values to integers is fairly simple.To do this, we use parseFloat. This will turn our string numbers into real integers. To use parseFloat, your code will look something like this:

var num1 = parseFloat(document.getElementById('nInput').value);
Now click the Add Values button to see this in action.

Fixed Values
Also - if you would like your values to end in only 2 decimal places, simply add toFixed() after your variable with the number of decimal places you would like inside the parentheses.

myNumber.toFixed(2) //Will result in two decimal places (ex. 5.00)
Interest Calculator
Now you know everything you need to know to get started. This is what your calculator should look like after someone has entered values:

Interest Calculator Results
