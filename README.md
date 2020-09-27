# LeBlanc Cafe project
This is recent Cafe Project that includes both Front End and Back End that deployed with help of Amazon Web Service EC2

## Amazon EC2 (Amazon Elastic Cloud Compute)
Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. Amazon EC2 is designed to make web-scale cloud computing easier for developers. --Cited from aws.amazon.com

## How to
In order to deploy this project, you should create an instance on AWS Console at EC2 service. Then do these commands:
1. Open an SSH client.
2. Locate your private key file. The key used to launch this instance is yourKey.pem
3. Run this command, if necessary, to ensure your key is not publicly viewable with command "chmod 400 yourKey.pem"
4. Connect to your instance using its Public DNS which is "ec2.yourPublicDNS.compute-1.amazonaws.com"
### EXAMPLE:
ssh -i "yourKey.pem" ubuntu@ec2.yourPublicDNS.compute-1.amazonaws.com

## Tools
On the terminal, use git clone to use this repo as both front end and back end.Then install dependencies:

1) On front end, install:

1. Node.js
2. yarn
3. After installing yarn, use command "yarn install". It will automatically install all dependencies on back end folder project
After installing all dependencies on Front End folder, use command "yarn build"

2) On back end, install:
1. postgresql
2. npm
3. After installing npm, use command "npm install". It will automatically install all dependencies on back end folder project
   
I also use NGINX and PM2 (in order to run both front and back end terminal at once), and don't forget to setup NGINX & Postgres.
