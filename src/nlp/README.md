# Loobot's badass nlp module
The sole purpose of this module is to determine what does the user want!

### But HOWWWWWWWWWWWWWWWWW?

1. Classify!
```javascript
classifier.classify('Hi bro') // => 'GREET'
```
Congratulations! We are done! We simply return `{type: 'GREET'}` and our
`respond` module will know what to do.

However, what if the user wants something more complicated? Like the food menu
or something.

```javascript
classifier.classify('What is on the menu at V1 caf?') // => 'ASK_FOOD'
```

You think all is good? Hell no! Our `respond` module does not have enough
information! When the user asks what is on the menu, we need to `fetch` the
menu then tell her what is on the menu! But which menu do we want? We need more
information.

2. Tokenize!
```javascript
awesomeTokenizeMethod('What is on the menu at V1 caf?') // => {location: 'V1'}
```

or

```javascript
awesomeTokenizeMethod('What is on the menu') // => {location: null}
```

Then we can make request to the endpoint to fetch the menu then returns
maybe something like `{type: 'ASK_FOOD', payload: {...}`

For the second case, we return `{type: 'ASK_FOOD_MISSING_LOCATION'}` or
`{type: ERROR}`

Then our `respond` method will format and send our message! :)
