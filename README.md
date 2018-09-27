# MyGrove components
## Basic info
This is a repository for MyGrove components. 
It works as any other external package - as it's included in `package.json`, you can download it to application repo using npm:
```sh
$ npm i mygrove-components
```
or simply 
```sh
$ npm i
```

## Installation
MyGrove components requires [Node.js](https://nodejs.org/) to run.
After cloning a repo, install the dependencies and devDependencies and start the storybook's server.

```sh
$ cd mygrove-components
$ npm i
$ npm run dev
```

## Development
### Storybook
To run storybook just run command:
```sh
$ npm run dev
```
And open http://localhost:9005 in your browser.

### Generating components
If you want to create a component (directive, filter, etc.), run following command:
```sh
$ node generate.js --type [type] --name [name]
$ node generate.js --type directive --name newDirective // example
```
Where `[name]` is camelCased name of component and `[type]` is one of available types:
 - directive
 - filter
 - service
 - util
 - constant

It will generate all requied files, with appropiate names & content ready to implement. 

### Implementation guide
As we use Babel for transpilation, please use es6 features:
 - import/export
 - arrow functions
 - spread & deconstructing operators

### Commiting changes
When committing your changes, please follow this naming convention for commit message: 
`[type](module name): short message`
Rules: 
 - [type] must be all lowercase and one of: feat, fix, update, 
 - (module name) is optional
 - short message shouldn't be longer than 100 chars


### Tests
By default, all tests run in pre-commit hook. If you want to run tests manually, you can use following commands:
```sh
$ npm run test:lint // runs eslint check
$ npm run test:unit // runs karma check
```

### Release
If for some purposes you need to build components manually, then run command:
```sh
$ npm run build
```
You can find bundled files in `/dist` directory.
To release dist version of components run one of following commands:
```sh
$ npm run release // patch release by default
$ npm run release:major
$ npm run release:minor
$ npm run release:patch
```
This command will generate bundle in `/dist` and create a commit with new version bumped up. 
Then, create a tag (using new version from `package.json` file that will point to your brand-new commit.
**NOTE:** Please remember to do release only on **master** branch, so on **dev** environment.

## Todos
 - Write MORE Tests
 - Make storybook looks better
 - Establish CI for automatic tests run, build, version bump & deploy