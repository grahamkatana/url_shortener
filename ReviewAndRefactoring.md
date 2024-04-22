### For code review please see on the repository history

### Potential areas to improve
<p>The application can further be improved by adding a global error handler that catches all errors. A global error handler is beneficial when we dedcide to log our app events.
<br/>
Given more resources, to follow the structure already implemented, under utils add a new file to handle errors at a global level, however it needs to be noted asynchronous calls, when they encounter an error, it can only be caught after the call has been resolved.
<br/>
The above point means we need to be aware of this hence needs to implement a global error handler based on that.
<br/>
A simple refactoring that I can pick up, on our controller level is to add a try catch block to help us catch most errors, this can be done and used in combination with the global error handler.
<br>
As discussed on the review, a status of 302 is returned when you hit the redirect, hence status code should be tested against a 302 on success, with also a try catch block, on error throw an exception.
<br/>
More user friendly messages can be used on our APIs, also discussed on the pull request, what are the chances of the short URL to be duplicated, of course the application will throw an error at the database error (duplicated throws an intergrity error), however we can further decrease these chances by either using a timestamp+generatedUrl. This has also been discussed on the pull request. Instead of having a sole `shortened_url` field, using sequalize we can change the primary key to be a UUID field.
<br/>
Having the UUID field on id means we can instead use it as the `shortened_url` field, since this is a primary key it is a special kind of index which can improve the speed on `openUrl method`
</p>