Helper to easier extend Meteor.publish
======================================

This Meteor smart package provides `extendPublish` helper. You should pass to it a function which receives
`name`, `func`, `options` and returns an array of potentially new values to be passed to `Meteor.publish`.
After `extendPublish` has been called (potentially multiple times), every call to `Meteor.publish` will first
call this function (or functions) instead, before passing arguments to core `Meteor.publish`.

Server side only.

Installation
------------

```
meteor add peerlibrary:extend-publish
```

