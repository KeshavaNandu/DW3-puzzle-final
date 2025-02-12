# Code Review

1. The observable which is subscribed in `ngOnInit` is never unsubscribed which leads to the memory leak.

2. `formateDate()` is implemented using a function. Function call triggers with every change detection which impacts application performance.

3. Naming conventions used for variables in `ngFor` are not proper.

4. Test cases are failing in `reading-list.reducer.spec.ts`.

5. Lifecycle hooks are added but never used.

6. `a` tag is used for functionality of a button.

# Code Improvements

1. Added async pipe in `book-search.component.html` and removed `ngOnInit` from `book-search.component.html`.

2. In `book-search.component.html` added pipe for formatting date to improve performance.

3. Gave better variable names in the below files:
    - `book-search.component.html`
    - `reading-list.component.html`

4. Implemented `failedAddToReadingList` and `failedRemoveFromReadingList` actions in `reading-list.reducer.ts` to update state with proper value in case of failure scenario.

5. Removed unused `ngOnInit()` from `total-count.component.ts`.

6. In `book-search.component.html` added `button` in place of `a` tag as we are not navigating away from the page when we click on the  anchor tag. Anchor tag is used to navigate from one page to another page.

7. In `book-search.component.html`, `submit` event was added for submit form but as it is reactive form the best practice is to use ngSubmit which provides form validation before sending the request.


# Web Accessibility issues

## From Lighthouse report:

- Adjusted background and foreground colors to achieve a sufficient contrast ratio between them.

- Added `aria-label` attribute is added to buttons

# Manual checks

- Image can be interactive OR not interactive. So you can add alt attribute with appropriate value vs just keep **alt=""**

# Improvements that can be added

- For better user experience, a spinner can be added when the API is loading. **implemented**

- Error messages can be displayed properly to the user in case of API failure.

- Making the application responsive for all screen sizes.

- Clear button can be added to clear the search results.
