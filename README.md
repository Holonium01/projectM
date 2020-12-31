# ProjectM
> This is a an API client in node.js that allows you implement sign up flow and profile change on [Muly](https://bit.ly/muly-normal-apk) 

## USAGE

### 1. Install the module

Be sure to have node on your computer. Download the project file, navigate to the root directory and use node package manager npm to intall the projects dependencies.

```npm install```

### 2. Implementation

* **Sign up**: Sign up on Muly. To sign up, you must: 1. first generate an OTP that will be sent to your email, 2. Send back the OTP with your email and name. 

Here is how to generate OTP
  ```send a POST resquest to 
  route: /muly/otp/generate
  request payload: {email: "ibmjlanre1@gmail.com"}
  ```
Here is how to submit OTP
  ```send a POST resquest to 
  route: /muly/login
  request payload: {email: "ibmjlanre1@gmail.com", otp: "09090", name: "Lanre"}
  ```
 for subsequent logins, you don't need to pass `name` in the payload anymore
* **updateProfilr**: Update profile on Muly. To update your Muly profile , you must: 1. first generate an OTP that will be sent to your email, 2. Send back the OTP with your email and name and what parts of your profile you'll like to update. 

Here is how to generate OTP
  ```send a POST resquest to 
  route: /muly/otp/generate
  request payload: {email: "ibmjlanre1@gmail.com"}
  ```
Here is how to update profile
  ```send a POST resquest to 
  route: /muly/profile/update
  request payload: {
    login: {email: "ibmjlanre1@gmail.com", otp: "09090", name: "Lanre"},
    "profile": {email: "ibmjlanre1@gmail.com", bio: "Happy to be here", username: "Lanre OG", "nolongerlanre@gmail.com}
  }
  ```
## Data Dictionary

Key | Description
---|---
**email**<br>`String`| The email address you'll like to sign up with
**OTP**<br>`Number`| The OTP sent to your email. Expoires after 10 minutes
**name**<br>`String`| Your first name
**bio**<br>`String`| Your profile bio on Muly
**usernamer**<br>`String`| Your Muly username
**phone**<br>`String`| Your phone number

## How It was implemented
1. I downloaded the Muly APK here https://bit.ly/muly-normal-apk and installed on an Andriod device
2. I signed up on Muly and changed profile to understand the flow of the app
3. Connected the andriod phone to a reverse proxy  *Vharles Proxy) to view https traffic, I was only able to get the base URl but not the routes and its payload as the app pins its SSL and HTTP certificate. route: https://muly.starthub.ltd
4. Installed decompiler extension (https://marketplace.visualstudio.com/items?itemName=tintinweb.vscode-decompiler) on VS Code to decomiple the APK and go through the source code
6. Browse through the source code to get find the needed route and their payload
  a. search for http and https keywords and the route from charles proxy to confirm the base URL - https://muly.starthub.ltd/api
  b. searched for /login /auth /register to find the login routes which I discovered was implemented with Retrofit library so I was able to understand the payload and type of request after a quick research
5. Tested the routes on Postman with different emails to follow the signup flow used on the App and took note of response so I was able to seperate a signup response from a login response -(login don't need name and response data always shows that the email already exists). Also figured that the API does not usually return error response but a page wheneever there's an error so I handled that
6. Added the token in the login/signup response data to the header so as to change the profile but didn't work. Currently looking through the code to see how to send back the  token in the header to the API so it recongines the user and confirm if their session is still active (session last for an hour - session token is signed in the response header when there's a failure) so as to change their profile. 
7. I'm happy to talk more about how this was implemented 

## Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
