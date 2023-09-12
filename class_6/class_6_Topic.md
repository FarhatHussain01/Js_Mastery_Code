# Introduction to Arrays

# What is an array?

An array is a data structure in JavaScript used to store a collection of values. It can hold multiple values of different data types

#

Declaring and initializing arrays.
Accessing array elements using indices.
Getting the length of an array.
Modifying array elements.
Creating arrays with the new Array() syntax.

const y = new Array(1991, 1984, 2008, 2020);

Creating arrays with mixed data types.

# Array methods for adding elements:

- push(): Add an element to the end of an array.
- unshift(): Add an element to the beginning of an array.

# Array methods for removing elements:

pop(): Remove and return the last element of an array.
shift(): Remove and return the first element of an array.

# Searching for elements in an array:

indexOf(): Find the index of an element in an array.
includes(): Check if an element exists in an array.

<!-- condotional satement base on array method -->
if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}