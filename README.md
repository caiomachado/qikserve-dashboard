# Overview

This is part of the screening process for QikServe where I have to build a simple dashboard application

# How to run
Run `npm install` to install the dependencies and run `npm run dev` to start the server locally

# Observations

I had to mock the data returned from the API because of a cors issue, therefore I kept it very simple just to have the data ready to be used.
I kept the project structure very simple due to its simplicity, so there's nothing fancy in folder structure or separation of styles, I did create a separate style sheet for the button just to represent how I would separate my styles when using plain css.

# Loading list of items
Since there was a request to not have pagination, I didn't include anything related to it such as infinite scroll, pagination or a load more button, I figured since we want to display the entire list of menu items from the get go, I thought it would be best to optimize it in different ways, for example we optimize the images by lazy loading them, adding a debounce to the search bar so that the list isn't filtered on every key stroke, we memo the list items so that they don't rerender unless an actual prop change.
Performance optimization depends on a bunch of factors, so it comes down to what approach we want to take, in this case, since the goal was to build a simple dashboard app, I didn't go that far into implementing it.

# Extra
I added an ability to filter down the list using the input at the top