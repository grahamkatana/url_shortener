### The system becomes bigger what can we do to handle traffic and a growing user base
<p>The structure of the application is designed in such a way to allow for scalability. Thus if we have to add features, with our current structure it will be easy for us to maintain and add features.
<br/>
This was a small task, but the developer took the time to think in advance about such, hence routers in own file, helpers/utils have own folder, controllers to handle business logic in own files, unlike having all the routes on the index.js file.
<br/>
The above point, however addressed scalability in terms of features, so the main point is on scaling the app in terms of handling traffic. The database system being used, mysql, we can encounter locking as requests increases. Since we are using an ORM, we can create a pool of connections to the database, this will help us to handle the traffic.
<br/>
Another solution is to make use of a caching solution. We can cache our data so that the system no longer has to keep on fetching data unnecessarily. 
</br>
On the index method on our controller to fetch all data, we are fetching all records, instead we can paginate the results of the returned URLs. Thus, we return only the required records at a time.
</br>
Load balancing is another technique that can be implemented, for example if we are using a cloud provider like AWS or Digital Ocean we can make use of a load balancer to improve on distributing the traffic. We can then look at an auto scaling solution, hence more resources during busy hours.
The 

</p>