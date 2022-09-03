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

## Changing the icon
This might sound so silly but I stressed so much over this. Had to go the extent of renaming my icon to match the name in the pre-formatted react app, and deleting their icon. 

This of course didn't work for days. I kept wondering why till I finally realised that i missed a closing quote in my link tag. 🤣🤣

## Responsiveness
I had a bit of an issue making this responsive. 

To be honest, I can't fully remember all that I did, I just kept playng around with bootstrap till I found what worled for me. Sorry guys 😔

It is not half as responsive as I would have wanted it, but I am unsure what next to do now.

## Adding functionality
My biggest snag so far would be the fact that I can't think of a single functionality to add.

I want to include more javascript in it, or at least react props, but I can't think of anything at the moment.

Would keep updating as th ideas come. 

Looking forward to the many things I am going to learn. 


# Learning curve
1. ### React Bootstrap:
This was the biggest lesson from this project. First from finding out about React BOotstrap, to learning how to use it. 
Although I didn't use any fancy Bootstrap components, I am still glad for the ones I used.

2. ### Rendering images in React
This was probably the most annoying, mostly because I felt it was something that I had to know, yet didn't. 

Gosh!! 😂😂😂

3. ### Writing a ReadME 
This is my first time writing a comorehensive ReadMe, journaling my progress along the project. 

It was tough as this isn't something that I am used to doing, but I am really glad that I learnt it. 

I defintely know that there is a lot of room for improvement, but I am glad at how far I have come. 

4. ### Running npm start 
This was also big for me as thhe first time my React app didn't work, I didn't know that it simply meant React wasnt "spinning" on my port anymore, and I had to re-initialise it. 
# Resources used:
1. React Bootstrap documentation [https://react-bootstrap.github.io/getting-started/introduction]
2. Coding status [https://codingstatus.com/how-to-display-images-in-react-js/]
3. Solution to styling my webpage body [https://stackoverflow.com/questions/42464888/how-do-i-change-the-background-color-of-the-body]
4. Google and stackoverflow as always 😏 
