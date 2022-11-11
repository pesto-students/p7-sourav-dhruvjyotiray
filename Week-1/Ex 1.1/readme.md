When a user enters an URL in the browser, how does the browser fetch the desiredresult ? Explain this with the below in mind and Demonstrate this by drawing a diagramfor the same.

1. When a user enters a URL, the browser identifies the domain name of the given link.
2. With the domain name, the networking component makes a query to the DNS (domain name resolver) until the IP address of the server has been resolved.
3. After getting the IP address of the domain name, the browser establishes a TCP (transmission control protocol) connection with the server.
4. The browser now sends a HTTP call to the server to access resources.
5. After receving response from the server, the browser uses its Rendering engine to parse the HTML data and create a DOM Tree.
6. Parsing can check and fix errors in the code.
7. The rendering engine uses the CSS resouces it received to create a Render Tree from the DOM Tree.
8. The engine now calculates the layout of all the HTML elements directed by CSS using the Render Tree.
9. All the information is now sent to the UI backend for Painting.
10. Painting makes all the rendered HTML and styling elements visible fo the user on the webpage.
11. The browser’s Persistence layer stores cookies, search history and other data locally.


![image](https://i.ibb.co/jvr6xQB/exercise-1-1.jpg)