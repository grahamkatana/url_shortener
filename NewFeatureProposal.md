### What other features can we have
-Add a User model
<br/>
-Associate URLs to a User
<br/>
-Add a login and register endpoint
<br/>
-Make URLS private, only the user who created them can see them, unless published, then we can make them public to rest of users.
<br/>
-Add a frontend for the application
<br/>
-URLs expiration dates
<br/>

<ol>
<li>We can add a user model for our application, this will help us keep track of our users. For users that try to upload malicious links we can identify them and close their accounts</li>
<li>We can associate URLs to users, this will allow for every user to manage their own URLs to be able to do Create, Read, Update and Delete.</li>
<li>The users will need a way to login and register accounts which is a feature we can implement, make use of JWT, then add a middleware to the application for the above point that allows for CRUD operations.</li>
<li>Publish or unpublish URLs, only published URLs can be shared to the public</li>
<li>Since this is an API backend, we can incorporate a frontend, this will help users to better interact with the system on managing their URLs</li>
<li>URLs can be made in such a way they expire, when an expiration date is set, when that date passes the URL is no longer valid. This can be helpful for users who runs surveys that are limited.</li>
</ol>
<p>
<br/>
These features can easily be used or incorporated in our system, and this is headed towards improving security, usability and flexibility as the expiration can be configured, one can publish or unpublish a URL.
<br/>
The frontend will mainly very useful for the users, they can easily manage their URLs, and also see the statistics of the URLs they have created. We can further expand this by graphing which URLs get's visited the most. The frontend can be done in React or React Native.
<br/>
Impact is easy usability on the users and easy accessibility. On the system side we will be headed torwards a more secure system that can provide for accountability on users who try to upload malicious links.
</p>
