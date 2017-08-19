Notes
---

This project builds is a front end single page app built using pure Javascript. It uses the event handlers provided by DOM instead of jQuery.

Instruction
---

```
$ git clone https://github.com/aballal/notes.git
$ cd notes
$ open index.html
```

Functionality
---

1. Displays pre added notes when index.html is opened.
2. Only a summary of 20 characters is displayed for each note.
3. The summary is clickable which shows the entire note.
4. A new note can written and submitted which gets added.

Behind the scenes
---

All components are encapsulated in modules. Only the interface of each module is exported to the window.
A simple testing framework has been written for the project using which the tests have then been written. This is available in ./jasMine/lib/assert.js.
