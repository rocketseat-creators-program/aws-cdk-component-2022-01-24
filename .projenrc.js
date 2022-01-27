const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Bruno Russi Lautenschlager',
  authorAddress: 'brunoxd13@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'rocketseat-component',
  repositoryUrl: 'https://github.com/brunoxd13/rocketseat-component.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ['prettier'] /* Build dependencies for this module. */,
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
