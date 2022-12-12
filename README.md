# cypress_demo
Demo of Cypress testing AirBnB for a technical evaluation


## Installation Steps
1. Clone down this repo to your local machine.
2. Please create a file called `cypress.env.json`.
   - Add a dummy phone number to the file for testing:
```
{
  "phone": "1234567890"
}
```
3. Install NPM with Homebrew. `brew install npm`
4. Install Cypress and install Node if necessary. `brew install cypress`
5. Enter the repo and type the following to run Cypress. `npx cypress open`
6. The Cypress UI should open & click E2E on the left. It should be marked `Configured`.
7. Choose a browser and then click the button marked `Start E2E testing in <selected browser>`.
8. Next the browser will open and render the Specs page by default.
9. Scroll all the way down to the bottom and select either `airbnb_login` or `airbnb_search`.


### General Notes
As of this writing, this will install Cypress 12. It's radically different from Cypress 6 & 7.
There is no longer a recorder in the UI so you will have to install a Chrome extension to
record clicks to speed up test creation.

Please confer with [these docs] (https://docs.cypress.io/guides/guides/environment-variables) if you are unclear on storing Cypress ENV values in a json file. My preferred style is Option #2, but there will be times you will have to export your own bash/zsh vars.
