# component-library
This component library uses Lerna (https://lerna.js.org/) as a tool for managing multiple packages within the project itself. Lerna
allows us to publish these packages independently and easily. 

Inside the packages folder there's two folders, 'components' and 'playground'.

Components: This is where we want to host all of our sharable components or reusable code in external projects. Once a new version has been published, 
any updates to this package will be available by using npm install/yarn install.

Playground: This is a private package within the monorepo. Any changes to this package will not be published to the npm registry and therefore will be 
unavailable as a node module. This package is basically a create-react-app application leveraging storybook so that we can test the components from
the public components package. 

# Prerequisites:

- Install npm: npm install -g npx
- Install yarn: npm install --global yarn
- Install Lerna: npm install --global lerna


# How to run locally
From root:

- Run: npm run bootstrap

From components:

- Run: npm run start

From playground:

- Run: npm run start
- Run: npm run storybook

Once the previous commands have been successful we can go to packages/playground
and run the command npm run start to run playground locally or npm run storybook
to open storybook.

# How to publish a new version

Once a new component has been added or an existing one has been updated to packages/components we can proceed to publish a new version.
 - First we need to push the changes to the github repository.
 - Then we want to login to npm, use the command: npm login --scope=@stoafund --registry=https://npm.pkg.github.com --auth-type=legacy , then enter your username and valid token as password.
 - From root run: npm run publish


# How to install/update the package

We just need to make sure we're authenticated so we can again use the command: npm login --scope=@stoafund --registry=https://npm.pkg.github.com

Then for any given project we would want to run npm install @stoafund/components (if any errors occur we'll need to add --force option to the installation) which will import the latest version from the registry.

The packages will be always be private to Stoa, we can find them here https://github.com/orgs/stoafund/packages