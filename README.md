# okra-node
> This is a an API client in node.js that allows you impkement sign up flow and profile change on [Muly](https://bit.ly/muly-normal-apk) 

## USAGE

### 1. Install the module

Be sure to have node and MongoDB installed on your computer. Download the project file, navigate to the root directory and use node package manager npm to intall the projects dependencies.

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



## Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
