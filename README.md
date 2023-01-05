# !["Javascript Logo"][1] **Scope and Clouseres**
------------
This repository contains everything related to the Platzi asynchronism course taught by Professor Oscar Barajas, where an attempt will be made to understand what asynchronism is and how it works in ![2]Javascript.

Javascript is a synchronous programming language, which uses a thread, that is, a single thread to lock, that is, Javascript is synchronous and non-blocking, with an event loop **(concurrency)** implemented with a single thread for its interfaces. input and output.

####Single-Threaded🧵
When it is mentioned that it is sigle-threaded, it means that it can only execute tasks in a single thread, called the main thread.

###Bloqueante🚫
It is defined as blocking when a task does not return control until it has completed, so the thread is blocked or in a waiting state.

###No-Bloqueante🆗
Refers to when a task returns control immediately regardless of the result. If complete, return data, otherwise an error.

###Sincrono⏭️
The tasks are executed sequentially, they must wait for their completion to continue with the next task.

###Asincrono🚦
Tasks can be performed later, which makes it possible for the response to be processed later. The completion of the input and output operation is signaled later, by means of a specific mechanism such as a callback, a promise or an event, which makes it possible for the response to be processed deferred.

###Paralelismo🛤️
Parallelism is the simultaneous execution of two or more tasks. Some tasks can be divided into smaller parts that can be solved simultaneously.

###Concurrencia🎮
Concurrency refers to the ability of an algorithm or program to execute more than one task at the same time. The concept is similar to parallelism, however with the possibility of many independent jobs doing different things at the same time instead of running the same job.

###EventLoop🌀
It is the event loop of a design pattern that waits for and dispatches these events or messages from a program.
___
##Formas de Manejar la Asincronia

###Callbacks📨
This is a function that is sent as an argument to another function that will be called as needed.

###Promesas🌟
It is a function implemented in *(ES6)* non-blocking and asynchronous which can return a value now, in the future or never.

###Async/Await⏱️
This was implemented in *(ES2017)* and allows you to structure a non-blocking asynchronous function in a similar way to an ordinary synchronous function.
___

####Callback
Es una funcion que pasa como argumento otra funcion
___

*Curso Asynchronism - Platzi -* <img src='https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg' height=32 alt='Platzi Logo' title='Platzi' />

**Prof. Oscar Barajas [GNDX](https://gndx.dev)**


Transcribed by: **Kevin Palma** - *DevKev*<img src="https://avatars.githubusercontent.com/u/47469351?s=400&u=3967350005c463e9ad98ab92c2afbc71e2d51a44&v=4" width=32  style="background: rgba(0,0,0,.2); border-radius: 100%; outline: 2px solid rgba(0,0,0,.5); margin-left: 10px;" />

------------
<img src="src/assets/certificate.png" alt="Certificate" title="Diploma Javascript Closures Scope">

[1]:https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/64px-Unofficial_JavaScript_logo_2.svg.png "Javascript"
[2]:https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/16px-Unofficial_JavaScript_logo_2.svg.png "Javascript"