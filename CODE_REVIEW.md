# Code Review

1. The observable which is subscribed in `ngOnInit` is never unsubscribed which leads to the memory leak.

2. FormateDate is impemented using a function. Function call triggers with every change detection which impacts application performance.

3. Naming convention used for variables in `ngFor` are not readable.

4. Testing cases failing in `reading-list.reducer.spec.ts`.

5. Lifecycle hooks are added but never used.

6. `a` tag is used for functionality of a button.

# Code Improvements

1. Added async pipe in `book-search.component.html` and removed the `ngOnInit` in `book-search.component.html`.

2. In `book-search.component.html` added pipe for formatting date.

3. Gave better variable names in the below files:
    - `book-search.component.html`
    - `reading-list.component.html`

4. Implemented `failedAddToReadingList` and `failedRemoveFromReadingList` in `reading-list.reducer.ts`.

5. In `total-count.component.ts` ngOnInit was implemented and never used so removed that.

6. In `book-search.component.html` added button in place of `a` tag.

7. In `book-search.component.html`, `submit` event was added for submit form but as it is reactive form the best practice is to use ngSubmit which provides form validation before sending the request.


# Web Accessibility issues

## From Lighthouse report:

- Adjusted background and foreground colors to achieve sufficient contrast ratio between them.

- Added `aria-label` attribute is added to buttons

# Manual checks

- Added `alt` attribute to `img` tags as it specifies an alternate text for image in case the image is not loaded.

# Improvements that can be added

- For better user experience, a spinner can be added when the API is loading.

- Error messages can be displayed properly to the user.

- Making the application responsive for all screen sizes.

- Clear button can be added to clear the search results.
