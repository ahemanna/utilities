# Utilities

Utilities is an API proxy containing frequently used tools. Utilities currently supports below functionalities.,

1. Base64 encoding
2. Base64 decoding

## Getting Started

These instructions will get you a copy of the project up and running on your Apigee Edge account.

### Prerequisites

1. npm CLI
2. Maven - for build and deployment
3. Apigee Edge account to host the API proxy

## Deployment

Below steps to be followed to get the proxy up and running.,

1. Clone the code to local system

```
git clone https://github.com/ahemanna/utilities.git
```

2. Download the node modules using package.json present in the root directory

```
npm install
```

3. Run the Maven command to build and deploy the proxy to your Apigee Edge account

```
mvn clean install -P{environment} -Dusername={edge_email} -Dpassword={edge_password} -Dorg={org_name}
```

## Supported resources

Utilities currently supports resources to base64 encode and decode.

### Base64 encode

```
POST /v1/utilities/base64encode HTTP/1.1
Host: {org_name}-{environment}.apigee.net
Content-Type: application/x-www-form-urlencoded

Sampledata
```

### Base64 decode

```
POST /v1/utilities/base64decode HTTP/1.1
Host: {org_name}-{environment}.apigee.net
Content-Type: application/x-www-form-urlencoded

U2FtcGxlZGF0YQ==
```
## Built With

* [npm 2.15.9](https://www.npmjs.com/) - To manage node modules
* [Maven 3.3.9](https://maven.apache.org/) - For packaging and deployment
