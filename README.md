# Project I | Hexlet "Brain games" | Frontend

[![Maintainability](https://api.codeclimate.com/v1/badges/51af8ef46e17e37375d1/maintainability)](https://codeclimate.com/github/Sinoptik93/frontend-project-lvl1/maintainability)
[![Node CI](https://github.com/Sinoptik93/frontend-project-lvl1/workflows/Node%20CI/badge.svg)](https://github.com/Sinoptik93/frontend-project-lvl1/actions)
[![Build](https://travis-ci.com/Sinoptik93/frontend-project-lvl1.svg?branch=master)](https://travis-ci.com/Sinoptik93/frontend-project-lvl1)

## Description
Set from 5 console games:
1. [Brain-even](https://github.com/Sinoptik93/frontend-project-lvl1#game-brain-even)
2. [Brain-calc](https://github.com/Sinoptik93/frontend-project-lvl1#game-brain-calc)
3. [Brain-GCD](https://github.com/Sinoptik93/frontend-project-lvl1#game-brain-gcd)
4. [Brain-progression](https://github.com/Sinoptik93/frontend-project-lvl1#game-brain-progression)
5. [Brain-prime](https://github.com/Sinoptik93/frontend-project-lvl1#game-brain-prime)

## Installing
Before installing you need to required in install of [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/).
Check in your console next command:
```
$ node -v
```
and 
``` 
$ npm -v
```
you must have version for Node.js (example `v13.7.0`) and NPM (example `6.13.7`). If you don't, make next steps. 

### Node.js
#### For Linux and Mac OS:
Installing Node.js by typing:
```
$ [sudo] apt install nodejs -g  
//atribute "-g" means global
```
or [download binaries](https://nodejs.org/en/download/) and check `$ node -v` in console.

#### For Windows
[Download installer](https://nodejs.org/en/download/) and install this distributive and check `$ node -v` in console.

### NPM
NPM must be installed with Node.js, but 

### Installing game package
1. Choose directory for installing binaries and make next:
*recomended 

```
$ npm install git+ssh://git@github.com:Sinoptik93/frontend-project-lvl1.git
```

or without SSH:

```
$ npm instal git+https://github.com/Sinoptik93/frontend-project-lvl1
```

2. next make binaries links in system

```
$ npm link
```
you must get the following lines:
```
frontend-project-lvl1$ npm link
audited 474 packages in 5.09s

17 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

/usr/local/bin/brain-calc -> /usr/local/lib/node_modules/brain-games-jan2020/bin/brain-calc.js
/usr/local/bin/brain-even -> /usr/local/lib/node_modules/brain-games-jan2020/bin/brain-even.js
/usr/local/bin/brain-gcd -> /usr/local/lib/node_modules/brain-games-jan2020/bin/brain-gcd.js
/usr/local/bin/brain-progression -> /usr/local/lib/node_modules/brain-games-jan2020/bin/brain-progression.js
/usr/local/bin/brain-prime -> /usr/local/lib/node_modules/brain-games-jan2020/bin/brain-prime.js
/usr/local/bin/brain-games -> /usr/local/lib/node_modules/brain-games-jan2020/bin/brain-games.js
/usr/local/lib/node_modules/brain-games-jan2020 -> /home/sinner/git/Hexlet/frontend-project-lvl1
```

3. installing with `npm publish`:

<a href="https://asciinema.org/a/mdPitzuuwmU52f4tLbNGjqiVy" target="_blank"><img src="https://asciinema.org/a/mdPitzuuwmU52f4tLbNGjqiVy.svg" /></a>


## Game "Brain-even"
### About
Your target - is to determine the random number: even or not.

*You can adjust the difficulty by changing the configuration parameters in `src/games/even.js` -> Section `// CONFIGURATION //`

### Launch game
Input next command to launch game:
```
$ brain-even
```
<a href="https://asciinema.org/a/OqA8R23NkdokAiXUleqFsO2Fe" target="_blank"><img src="https://asciinema.org/a/OqA8R23NkdokAiXUleqFsO2Fe.svg" /></a>


## Game "Brain-calc"
### About
Remember school arithmetic and show your brilliant knowledges by counting random expressions!
*You can adjust the difficulty by changing the configuration parameters in `src/games/calc.js` -> Section `// CONFIGURATION //`

### Launch game
```
$ brain-calc
```
<a href="https://asciinema.org/a/TMjCAFHRzcNehCrhb1cxJmpf5" target="_blank"><img src="https://asciinema.org/a/TMjCAFHRzcNehCrhb1cxJmpf5.svg" /></a>


## Game "Brain-GCD"
### About
Find the greatest common divisor  for two random numbers.

*You can adjust the difficulty by changing the configuration parameters in `src/games/gcd.js` -> Section `// CONFIGURATION //`

### Launch game
```
$ brain-gcd
```
<a href="https://asciinema.org/a/RxAVNifbQl7GsEJxVlDCDcSDf" target="_blank"><img src="https://asciinema.org/a/RxAVNifbQl7GsEJxVlDCDcSDf.svg" /></a>


## Game "Brain-progression"
### About
Write a missing number in increasing progression.

*You can adjust the difficulty by changing the configuration parameters in `src/games/progression.js` -> Section `// CONFIGURATION //`

### Launch game
```
$ brain-progression
```
<a href="https://asciinema.org/a/F1moVTGVfBEaxBBkWvRnVmkqk" target="_blank"><img src="https://asciinema.org/a/F1moVTGVfBEaxBBkWvRnVmkqk.svg" /></a>


## Game "Brain-prime"
### About
You need to answer the question: is the current random number prime?

*You can adjust the difficulty by changing the configuration parameters in `src/games/prime.js` -> Section `// CONFIGURATION //`

### Launch game
```
$ brain-prime
```
<a href="https://asciinema.org/a/b7mivZ1lJQcAdfGuUJVbb7yvr" target="_blank"><img src="https://asciinema.org/a/b7mivZ1lJQcAdfGuUJVbb7yvr.svg" /></a>
