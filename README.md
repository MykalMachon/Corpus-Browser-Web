# Corpus-Browser-Web
A web app that makes corpora exploration, annotation, and experimentation accessible to all.

## Project Goals
There are a few key goals for the development of Corpus-Browser-Web:

1. Make the exploration, annotation, and experimental research of corpora accessible to all.
2. Provide a stable platform that can easily be deployed and extended by others.  

## Implementation Plan
The following is a basic implementation plan for a web-based version of Corpus Browser. 
Upon approval, I will create a more concrete implementation plan and begin development.

1. Dive into Corpus Browser's source code and extract composable python functionality (linear-regression via scikit-learn, downloading and updating Corpora, etc) 
2. Develop a python-based (flask) API that can execute these functions upon HTTP requests (Considerations: mass storage, concurrency, authentication)   
3. Develop a react.js based web interface that has access to these API's and acts as the GUI portion of the project (Considerations: performance, user-experience, documentation)
4. Extend functionality to include different types of analysis (regressions, clustering, possibly more), add links to additional resources, etc.

## Questions and Considerations
These are my current questions surrounding the project:

1. Are there restrictions to *where* this can be hosted? (both the source code, and the actual application)
2. What license should this be released under? I chose GPLv3 for now because it ensures the software remains open source and free for everybody. 

## Contributors
This project was primarily built during a UFV Research Contract with [Gabriel Murray, PhD and MSc (Edinburgh)](https://www.ufv.ca/cis/faculty-and-staff/murray-gabriel.htm)

Corpus-Browser-Web is based on a project called "Corpus Browser" that is being developed by another researcher at UFV *(insert Jeremy's full name and link to relevant profile if he'd like)* 
It's extremely likely that Corpus-Browser-Web will share code with Corpus Browser: *more on this later*.



