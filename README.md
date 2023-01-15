# movie-search

##### Link to deployed app :
[https://movie-search-murex.vercel.app/](https://movie-search-murex.vercel.app/)

#### Tech Stack:

- React
- Vite (build tool)
- RTK Toolkit/Query
- tailwindcss

#### Reasoning behind tech choices:   

I've went with vite as a build tool instead of using CRA which uses webpack. In my opinion (and at this age) there are almost no reasons to go with CRA when vite exists

I've also went with RTK query instead redux/saga just because I'm not familiar with those libraries (I'm not really that familiar with rtk query, it just seemed easier to get into after reading through documentation)

And finally I've went with tailwindcss instead of using pure css (or SASS), reasoning being that for this kind of project, it's a no brainer cause writing apps with tailwind reduces time massively, and after all it's just normal css written as a classes. Honestly after I was introduced to tailwind I never even considered using any other method (or UI libraries) for my private projects

## Installation and Setup Instructions

#### Example:  

Installation:

`npm install`  

Start Server:

`npm run dev`  

Build & TS check & minify:

`npm run build`  
