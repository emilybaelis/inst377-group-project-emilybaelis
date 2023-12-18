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
- How to install your application and all dependencies
- How to run your application on a server
- We are using the Adopt-a-Pet.com Basic API, and one GET endpoint we are using is /search/pet_search. This endpoint returns a list of pets that match the search. The other GET endpoint we are using is /search/limited_pet_details. This endpoint provides a full list of details about the pet as well as a link to the animal's page on [adoptapet.com](https://www.adoptapet.com/) which can provide the user with more details about the animal.
- Not all animals have a photo associated with them. 


## Resources
Picture on Contact page taken from ASPCA: https://www.aspca.org/adopt-pet/adoption-tips
