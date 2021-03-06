#Sample Rails App with React Components



* Overview

	I'm Mark Park, and this is my third version of rails_map_project. This is my individual project as a student at
	DevBootcamp.The app takes origin, destination, and mode as user inputs and returns distance, duration and a rendered 		google map. User stories include...

	1. A user can register/login/logout 
	2. If logged in, A user can create a new direction by submitting a form with inputs: origin,destination, and mode (driving, walking, bicycling)
	3. A user can see a rendered google map for a given path
	4. A user can see a list of directions (most recent five)



* Technology Overview 

	1. Ruby on Rails 
	2. React components on top of server-rendered DOM 
	3. AJAX(asynchronous JavaScript and XML) on client side 
	4. Bcrypt gem for user authentication
	5. Omniauth gem for OAuth(user authentication through Facebook and Google )
	6. Google Maps Directions API request (through HTTParty gem) to render map, and return distance,duration



* Learning & Limitation

	Through this project, I wanted to solidify concepts on Sinatra, Ruby on Rails, ActiveRecord, Jquery, AJAX 
	and React. First version is based on sinatra (sinatra_map_project) and Second version contained Ruby on Rails.
	In third version, I tried to incorporate React for better user experience. I wasn't able to make a single 
	page web with best user experience, but in the process, I learned how to incorporate new technology in my
	application (React). Given short amount of time, I did not include any styling yet.



* Goals

	1. Use Bootstrap css for styling
	2. Add React components (buttons, links)
	3. Add AJAX request to render map without refreshing the page
	4. Add Bart API 
	5. Deploy to Heroku
	6. Use Firebase for external database
	7. Add Rspec test

