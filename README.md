# Taper.ai Take Home

*Deployed at <https://taper-ai-take-home.vercel.app/>*

## Overview

1. Find out how <https://jsonplaceholder.typicode.com/> REST API works and make a web page to display all photos in album id:1.
1. Create a page with a form to submit new user to <https://jsonplaceholder.typicode.com/>.
1. Write an unit test for task 2 to confirm the response from server when submit.

## How to run

1. Install dependencies

   ```bash
   npm install
   ```

2. Run the app

   ```bash
     npm run dev
   ```

3. Run the test

   ```bash
     npm run test
   ```

### Technologies choices

- React
- Tailwind
- daisyUI
- Vite
- Vitest
- msw
- react-query
- react-hook-form
- react-router-dom
- gts (google's typescript style)

### daisyUI

simple ui components built on top of tailwind for a quick build

### msw + vitest + testing-library <3

very easy to test the api calls and the components and vitest is so quick

### react-query

industry standard for data fetching, mind you with react server components coming soon, this might be a thing of the past. We'll have to see i avoided anything more complex because of the size of the project

### gts

use someone elses config to keep my code tidy, this has just been released recently and i was keen to give it a go. can recommend very minimal config with sensible defaults

### react-hook-form

i prefer this over formik for ts projects,  i find it easier to use.

### react-router-dom

could've done a nextjs project but it seemed a bit over kill for this project.
