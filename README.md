
## Available Scripts

After fetching code from github run:
### `npm install`

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run lint`

Runs linter

## Things worth to mention

1. In order redux was mentioned as optional for experimental purposes used react hooks and context to create shared state.
2. Intentionally didnt used any third parties like bootstrap to create layout, but created mixin which helps easily create needed classes for responsive grid.
3. Intentionally didnt used any global loaders, IMHO loaders in separate components are more user friendly.
4. For validating address used 'react-geocode' npm package which uses google maps api.
5. Structured project by page, but there are many different ways how to structure it (it depends on application), so didnt payed attention how to structure.
6. IMHO details page is useless, because you can see all data while editing customer.
7. Configured snapshots testing.
8. Added linter and prettier to keep code clean and convenient.
9. Configured to prettify code on every commit.

## Other comments

Due to limited time implemented only required features, but many thing could/must be improved:

1. Adding loaders in all components where fetching any data.
2. Not implemented any error handling (let assume that we're living in perfect world where there are no errors :))) )
3. Implement TypeScript
4. Fix bugs like not allowing click remove while removing item (loaders or disabling buttons would help with that) and etc.
5. WRITE MORE TESTS
6. Some parts could be moved to utils/helpers to be more reusable.
7. Fix warning related with useEffect hook in console.
8. Address validation throw google maps api, not working properly, sometimes it's enough to enter correct city. There are more much better apis to validate address. Also it will be more user friendly to add autocomplete for address. 

