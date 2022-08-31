# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# Project Idea 💡💡
This project is meant to be a mock of a movie streaming website. 
This website woud be primarily html and css for the time being. As I progress, I will be adding functionality to it. 

# Challanges encountered 😭😭
## Bootstrap
The first issue I faced was in adding Bootstrap to my app. 
I didn't initially know that Bootstrap didn't work on React the same way it did on vanilla html. 
After finding out about React Bootstrap, I went about the process of installing it. 

`
npm install react-bootstrap bootstrap
`
### After Installing Bootstrap
After running this, I encountered a peculiar issue: my react app stopped working. Local host 3000 wasn't spinning up anything anymore. 
I solved this problem by having to run 

`
npm start
`

again after installing Bootstrap. 

## Changing the styles in my bootstrap
I didn't like some of the bootstrap styles, and I trid to change it to suit my taste, but this proved very tasking. As at writing this, I still have not figured out how to do this. 
had to result to using a lot of inline styling. 
I dislike inline styling.

## Adding an image to a React app
It wasn't till after hours of trying did I finally figure out that I was required to import my image first, before going ahead to use it. 
An example: 

`
import download from "./download.png"
`

then go ahead an add it to your image as thus:

```
 <img
  alt="logo"
  src={download}
  width="40"
  height="40"
  className="d-inline-block align-top brand-image" />
  ```

## Styling the body of my page
I had the most issues with this. ANy general styling I wanted to do simply won't work and I was very frustrated. 
Read through a lot of material online, but the solutions were mostly based on using vanilla javascript to manipulate the background color. 
I didn't want to do this, as I had multiple styles to add.
I eventually found a solution that suggested to target the id #root from the html as thus 

`
#root {background-color: red};
`

in my index.css file. This did the trick!


Looking forward to the many things I am going to learn. 

# Resources used:
1. React Bootstrap documentation [https://react-bootstrap.github.io/getting-started/introduction]
2. Coding status [https://codingstatus.com/how-to-display-images-in-react-js/]
3. Solution to styling my webpage body [https://stackoverflow.com/questions/42464888/how-do-i-change-the-background-color-of-the-body]
4. Google and stackoverflow as always 😏 
