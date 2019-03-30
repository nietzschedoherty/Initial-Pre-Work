# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When we hit http://www.techtonic.com/ we are asking our computer to use our internet browser, by way of the HTTP protocol, to communicate with the server at the domain name techtonic.com.  The ISP translates the domain name to a specific ip address for the computer server.  Given a successful communication the server then sends a copy of the corresponding html file to my computer’s ip address for my browser to open.  My browser reads the file and displays the contents using asset requests to interpret the source code for HTML, CSS, JS, etc.


## From start to finish, how does data reach you to be rendered in the browser?

After my browser's request has been received the server sends a copy of the corresponding HTML file to my computer for my browser to open.  My browser reads the contents of the file from top to bottom and requests assets for HTML, CSS, and JavaScript as it reads and displays the data.  Generally including CSS in the header of the file, for example, can avoid a flash of unstyled content to appear as the file is rendered.

## What code is rendered in the browser?

The browser is able to render HTML, CSS, and JavaScript code.

## What is the server-side code’s main function?

Server-side code is used to directly access data and files that are stored permanently with the server.  This is used when data in the form of pages are input back from the client to the server.  The main disadvantage I found with this sort of functionality is that it can slow performance for the client as they interact with the webpage, send back information, and then wait for the server to process again.

## What is the client-side code’s main function?

Client-side code is meant to allow processing to occur on the client’s browser.  Client-side code allows for faster response times and puts less stress on the server.   This, of course, requires that the client’s browser supports all the code being used, and this code can be more time-consuming to create.

## What is runtime?

Runtime is the time it takes a software program to execute completely.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I am having some problems finding the answers to these last three questions.  I understand that once the file is delivered to the client that the client's browser must request assets for each instance in which they are encountered.  So, I'm not sure if this is referring to how a file calls its CSS and JavaScript code for ease of rendering or if this is referring to something all together different.

## How many instances of the server-side code are available at any given time?

Unfortunately, I do not believe I understand this question either.  My inclination is to say that sever-side code is available in one instance at any given time to protect data.

## How many instances of the databases connected to the server application are created?

I believe there should only be a single instance of the databases connected to the server application created.  Although, I believe a client can connect with a database through the server, so I suppose that would be a unique instance as well.  So, the instances would be dependent upon the number of client connections.
