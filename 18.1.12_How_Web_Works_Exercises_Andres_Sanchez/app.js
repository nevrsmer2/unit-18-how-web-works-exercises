
Andres Sanchez
USF Programming Bootcamp
October 5, 2022
How Web Works Exercise

Part One: Solidify Terminology

In your own terms, define the following terms:
1. What is HTTP?

HTTP stands for Hypertext transfer protocol.  It’s a protocol that dictates how requests and responses are handled between a browser and a server

2. What is a URL?

URL stands for Uniform Resource Locater.  It’s basically the address of a webpage, for example.  It consists of four components: the hostname (the name of a website), the port (the port through which the browser and the server communicates, the resource (the specific page on the website that is being searched for, and the query string, which is how specific data is requested, e.g., using the search function on a website.  

3. What is DNS?

Domain name Service is the service that transforms the name of a website into an IP address.  For example, a DNS would convert mysite.com into 119, 01, 22, 711.  It’s easier to remember the name of a site than the numeric address.  


4. What is a query string?

A query string is the part of a URL (the last component) and is used to pass information into a get in a key:value pair format.

5. What are two HTTP verbs and how are they different?

GET and POST are two HTTP methods/verbs. GET gets/request data with no side effects, whereas POST posts/sets/inputs information and has side effects in the server.


6. What is an HTTP request?

An HTTP request is made by a client to a server.  The request is made by the browser for HTML, CSS, and JS, and dependencies to the server if the request cannot be fulfilled by the cache, router, or ISP 

7. What is an HTTP response?

An HTTP response is the response to an HTTP request made by a browser, and it provides the content requested

8. What is an HTTP header? Give a couple examples of request and response headers you have seen.

An HTTP request has a header that will contain information such as, the host name being requested, the date the browser thinks it is, the language and variant, cookies the server has sent, browser type and version, OS, etcetera. 

An HTTP response from a server has a header that will contain information such as, host IP address, destination IP address, date and time the server thinks it is, content type, caching information, file size and character count, server type and software version, and more.

9. What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?


The HTTP protocol is invoked, the host name is converted into an IP address, port 80 is used for HTTP, the resource /some/page.html is the focus of the search.  The browser send the request to the server, and the server send the response with the requested HTML, JS, CSS and the browser parses this information into a DOM and finds other content from any dependencies (Google fonts, CDNs, …)

Part Two: Practice Tools
1.	Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”


panilo@Andress-MacBook-Pro ~ % curl https://icanhazdadjoke.com/search\?term\=pirate


Why couldn't the kid see the pirate movie? Because it was rated arrr!
What does a pirate pay for his corn? A buccaneer!
What did the pirate say on his 80th birthday? Aye Matey!
Why do pirates not know the alphabet? They always get stuck at "C".
Why are pirates called pirates? Because they arrr!%                             panilo@Andress-MacBook-Pro ~ % 


2.	Use dig to find what the IP address is for icanhazdadjoke.com

panilo@Andress-MacBook-Pro ~ % dig icanhazdadjoke.com 

; <<>> DiG 9.10.6 <<>> icanhazdadjoke.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12001
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 8192
;; QUESTION SECTION:
;icanhazdadjoke.com.		IN	A

;; ANSWER SECTION:
icanhazdadjoke.com.	300	IN	A	104.21.66.15
icanhazdadjoke.com.	300	IN	A	172.67.198.173

;; Query time: 66 msec
;; SERVER: 192.168.50.1#53(192.168.50.1)
;; WHEN: Wed Oct 05 16:38:14 EDT 2022
;; MSG SIZE  rcvd: 79

panilo@Andress-MacBook-Pro ~ %



3.	Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser.

http://127.0.0.1:5500/C4_This_Working/c.4.this.html


Part Three: Explore Dev Tools
Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted.
Add a field or two to the form and, after submitting it, explore in Chrome Developer tools how you can view the request and response headers.

Edit the page to change the form type to POST, refresh in the browser and re-submit. Do you still see the field in the query string? Explore in Chrome how you can view the request and response headers, as well as the form data.


Part Four: Explore the URL API
At times, it’s useful for your JavaScript to look at the URL of the browser window and change how the script works depending on parts of that (particularly the query string).
Read about the URL API
Try some of the code examples in the Chrome Console so that you can get comfortable with the basic methods and properties for instances of the URL class.

