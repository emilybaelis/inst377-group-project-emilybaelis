# INST377-Final_Project
- Group members: Emily Baelis, Farhaan Lalit, Joaquim Benitez
- Title: Adopt-A-Pet MD
- Description: The goal of our project is to make adopting pets easier and more reliable. We are focusing on the state of Maryland and plan to present animals ready to adopt within the state to potential adopters.
- Description of target browsers: Our project was designed for computers and the target browser is Google Chrome. 
- [Go to User Manual](#user-manual)
- [Go to Developer Manual](#developer-manual)

## User Manual
- On the home page, select either <code>Dogs</code> or <code>Cats</code>, enter the desired zip code, and the desired range (miles) for the area you would like to search.
    - Click <code>Search!</code>, and a list of available animals with short descriptions about them will appear on the page. 
    - If interested in learning more about a specific animal, click anywhere in the animal's outlined box and you will be brought to their page on [adoptapet.com](https://www.adoptapet.com/). 
- If interested in learning more about our mission, click on the <code>About Us</code> tab in the top navigation bar. 
- If in need of help or looking to get in contact with us, click on the <code>Help and Contact</code> tab in the top navigation bar. 
    - A list of FAQ's will be present on the left side of the <code>Help and Contact</code> page, and if interested in reading the answers, please click on the questions. 
    - If you would like to contact us, please click on <code>Contact us now to get started!</code> in the middle of the page. 
        - A form will appear, fill out all the required elements of the form for us to receive your message.
- To navigate back to home you may either click the <code>Home</code> tab on the top right side of the navigation bar, or click the logo, or <code>Adopt-A-Pet MD</code> on the left side of the navigation bar. 


## Developer Manual
### Installation
1. Clone the repository into your desired directory with the following command: 
    <code>git clone git@github.com:INST377-UMD/inst377-group-project-emilybaelis.git</code>
2. Open the project directory with the following command:
    <code>cd INST377-UMD/inst377-group-project-emilybaelis</code>
3. Make sure Node.js is installed on your device. If not please click this link, https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/, and follow the istructions. 
    Once Node.js is installed, run the following commands to install project dependencies: 
    <code>npm install<br>npm start</code>
    This will start the server and you should see the message <code>App is running</code> in your terminal indicating the server is running.
### Running the application
- The application can be accessed at http://127.0.0.1:5500/index.html through your browser. 
### API Information
- We are using the Adopt-a-Pet.com Basic API, and one GET endpoint we are using is /search/pet_search. This endpoint returns a list of pets that match the search. The other GET endpoint we are using from Adopt-a-Pet.com Basic API is /search/limited_pet_details. This endpoint provides a full list of details about the pet as well as a link to the animal's page on [adoptapet.com](https://www.adoptapet.com/) which can provide the user with more details about the animal.
- We also connected to an external database in supabase with a POST endpoint. This database is called "Customer", and it stores the information filled out by the user in the contact form on the <code>Help and Contact</code> page. 
### Comments 
- Not all animals have a photo associated with them. 
- jQuery was used for some front end styling. 
- Future development could include expanding the types of animals up for adoption (fish, bunnies, birds, etc.). Also, adding an interactive map to visually show where the animals are up for adoption could be something to add in the future. 


## Resources
Picture on Contact page taken from ASPCA: https://www.aspca.org/adopt-pet/adoption-tips
