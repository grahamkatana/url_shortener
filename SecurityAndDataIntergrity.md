### How can we ensure the system is secure and data intergrity is maintained
<p>
To improve on the securiy, our short url field can be changed to a UUID field. This will ensure that the URL is unique. UUIDs can be difficult to guess, ensuring no one can just open the URL, also as discussed in the review, we can use a combianation of a timestamp and a generated URL.
<br/>
Shareable links that are facing the public usually do have a long character length, this ensures that no one can easily guess a URL, however based on what we are trying to achieve to shorten a URL the character length is not that important, as at the end of the day we will defeat the whole purpose of this system. Thus, security on the generated URLs is not that important, rather as part of improving security, we can associate the shortened URLs to a user, so that only the user can access the URL when logged in.
</br>
Further to the above point, all URLs can be initially private, and then only published URLs can be accessed on the index page. Hence a security level on what can be shared and what cannot be shared.
<br/>
Initially we did implement a primary key on our system, which we can tick as part of our database design.
<br/>
The generated URL is stored in a field that is unique ensuring that we do not duplicate the URLs, however since we are using a third part library, what are the chances of the generated URL being unique all the times? Since the unique constraint was specified we do not have to worry much about this.
<br>
Follow up on the above point is say, the generated URL already exist, on the users side using our system we can face frustration, hence mitigate this by handling this ourselve to ensure uniqueness on create else retry generating the URL.
</p>