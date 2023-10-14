# Capstone project information

## Project information

-   Project name: Feed the Needy
-   Project description: This website provides the means for users to donate in order to make an impact on the issue of hunger locally. It also provides educational information and pointers to further resources.
-   Technology used: Nextjs, TailwindCSS, i18next, Husky, Prettier, Eslint, Commitlinter, FireBase, Redux, Redux persist, Stripe
-   Team members: Sidahmed Zine el Abidine Slikh, Mohamed Redha Tchoketch, Abdlehamid Serhan Ahmidat, Achraf Mehanneche, Melissa Sidisaid
-   Bootcamp: 202306 NEA DZ FEW 2023 

## Installation

```shell
npm install -g commitizen // Installs commitizen
npx husky install         // Installs Husky
chmod ug+x .husky/*       // Gives husky executable extension
npm install               // Installs the node modules
```

## Development process

-   When commiting you will have to use `git cz` and then go through the process. Look at the first commit I made to know what that means.
-   The translation process is done using the i18next library. There's an example in the index.js file of how this is done. Check this github project for more info on how to use the i18next library: [i18next](https://github.com/i18next/next-i18next)
-   When writing commits, commitlinter library is used to make sure that your commits are consistent with the conventional commits. To learn more about it refer to the guidelines in Canvas or the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) site.
-   The `layout` folder contains the components that will be used in the layout of pages, so components like the header and footer will be placed there.

Good luck and happy coding :D
