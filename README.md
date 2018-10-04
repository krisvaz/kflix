# kflix
Video on Demand/Streaming app

## Steps
  1. After cloning the repository, in your terminal (opened in the kflix directory) type:
  
     ```npm install```
      
  2. You'll want to setup your mongoDB with a database for storing the video metadata. You can use either a local or cloud based setup. 
  3. Once your mongodb is setup, grab the uri path to your database and paste it in config/keys.js where the mongoURI attribute is 
      * If your database has been created using a cloud service like mlab, then copy the URI they give you. 
      * If your database is local, your URI should look something like 'mongodb://localhost:27017/[your_database]'
  4. Now that your database is setup, it's time to populate it with videos... In this example, I've already provided two videos in the directory ```assets/``` (an episode of batman the animated series, and a short of avatar the last airbender)
     <br><br>If you want to test the app using those videos, then you can populate your db with the following:
   ```
     {
      "name": "Batman The Animated Series",
      "url": "http://i1079.photobucket.com/albums/w512/krisvaz/Series/bman_zpskyjvhihw.jpg",
      "desc": "This animated series conveys the dark mood of the original \"Batman\" comic books. Unlike the light action \"Batman\" show of the 1960s, Gotham City's Caped Crusader, Bruce Wayne, is sometimes moody. And Robin's alter ego, Dick Grayson, has a more-mature personality than in the original series.",
      "vidFile": "bman.mkv"
    },
    {
      "name": "Avatar The Last Airbender",
      "url": "http://i1079.photobucket.com/albums/w512/krisvaz/Series/atla_zpscdq4jstk.jpg",
      "desc": "The world is divided into four nations -- the Water Tribe, the Earth Kingdom, the Fire Nation and and the Air Nomads -- each represented by a natural element for which the nation is named. Benders have the ability to control and manipulate the element from their nation. Only the Avatar is the master of all four elements. The ruthless Fire Nation wants to conquer the world but the only bender who has enough power, the Avatar, has disappeared ... until now. His tribe soon discovers that Aang is the long-lost Avatar. Now Katara and Sokka must safeguard Aang on his journey to master all four elements and save the world from the Fire Nation.",
      "vidFile": "Atla_short.m4v"
    }
  ```
  
 Notice that there are four fields for each video: name, url, desc, vidFile.
 name denotes the name of the video, url refers to the url for the display picture of the vide, desc is the description, and vidFile is the file name of the video itself (as found in assets/). <br><br>
 You can populate the db either directly through mongo, or you could type ```npm run server``` to start the server, at which point you could use a service like Postman and POST to localhost:5000/api/series. If posting via Postman, POST each JSON video object one at a time.
 
  5. Now that the database is populated and the corresponding videos are inside assets/ stop your server (if you had it running). 
  cd to the client/ folder and type ```npm install```
  6. After the dependencies are installed, cd back to the kflix root and type 
  ```npm run dev```
  
  Both the server and client should be up and running after some time, and you may access the app via localhost:3000
  
  Enjoy!
