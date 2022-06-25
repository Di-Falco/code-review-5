# Space Age

#### Calculate your age on other planets

#### By Anthony DiFalco

## Technologies Used

* Javascript
* Jest
* Webpack
* JQuery
* HTML

## Description

This program has an index.html file with only one input field, for the user to input their birthdate (DD-MM-YYYY). Then the page displays the user's age on Earth and four other planets. It also displays their expected remaining lifespan in each planet's years.

The third output is for displaying how long until the user's next birthday, on any of the four planets aside from Earth. This function doesn't seem to be very accurate, but for the most part it gets the planet right with number of days off by a little. Since the planet is usually Mercury, it almost always gets that part correct.

## Setup/Installation Requirements

* clone this repository using<br>
```git clone https://github.com/Di-Falco/code-review-5```
* within the root directory, run<br> 
```npm install```

## Known Bugs

* nextBirthday feature.<br>
 The error seems to be somewhere in the math. It should simply count up from 0, starting at the user's birth date and in increments equal to the number of days it takes for each planet to orbit the sun. The output differs from similar features on other sites.

## License

## Contact Information

I can be reached at
aodifalco@gmail.com