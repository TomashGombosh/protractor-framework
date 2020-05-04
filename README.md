# frontend-testing

# Table of content

1. [Definitions](#definitions)
2. [Technologies](#technologies)
3. [Install and Testing](#install-testing)
4. [Base Test Development Guidelines](#base-test-development)
    - [Mandatory Coding Standards and Principles](#mandatory-coding-standard)
5. [Automation Workflow](#automation-workflow)
    - [Working with test documentation](#working-documentation)
    - [Working with branches](#working-branches)
<a id="definitions"></a>

## 1. Definitions

_Repository_ - is the place where any data is stored and maintained. Often, data in the repository is stored in the form of files available for further distribution over the network.

_Branch_ - in Git is simply a lightweight movable pointer to one of these commits. The default branch name in Git is master. As you initially make commits, you're given a master branch that points to the last commit you made. Every time you commit, it moves forward automatically.

_A pull request_ is a method of submitting contributions to an open development project. It is often the preferred way of submitting contributions to a project using a distributed version control system (DVCS) such as Git.

_The commit_ is used to save your changes to the local repository. ... This means that a file won't be automatically included in the next commit just because it was changed.

_Readme_ - standard text file in repository in what are definitions how setup and configuration auto test in you local machine.

_.gitignore_ - standard git file in repository in what write what file should be not pushed from local repository to remote

_GUI testing_ is the process of ensuring proper functionality of the graphical user interface (GUI ) for a given application and making sure it conforms to its written specifications

_Page Object_ - is a design pattern to create Object Repository of web UI elements and encapsulate the logic of individual web page. Using this concept makes code cleaner and easier to understand, makes object repository independent of test cases and potentially could be used for different purposes with different tools.

_BasePage_ - contains common methods for interacting with pages, navigation, and locators, such as switching between tabs or navigating with a URL. All pages and popups should be inherited from this class directly.

<a id="technologies"></a>

## 2. Technologies

### JavaScript

### [Node.js](https://nodejs.org/en/docs/)

### [Protractor](https://www.protractortest.org/)

### [Circle CI](https://circleci.com/)

<a id="install-testing"></a>
## 3. Install and Testing

### Pre Install
- Install [node](https://nodejs.org/en/download/) to the machine 
- Check is node installed usind ```node -v```
- Check is npm installed using ```npm -v```
- Clone repository from the remote repository
- Install protractor using ```npm install -g protractor```
- Update webdriver manager by command ```webdriver-manager update```
### INSTALL Mac OSX
- Run ```cd {path-to-repo} && npm install```
- Restart the terminal
- Examine `package.json` for relevant commands

### Testing

- Ask a team member for `.env`
- Lauch test by comand ```npm test```

<a id="base-test-development"></a>

## 4. Base Test Development Guidelines

**Goal:** The main idea of this topic is to create rules of Automation coding for the project. Everyone should coding using only these rules to make our product accessible for the team members.

<a id="mandatory-coding-standard"></a>

### Mandatory Coding Standards and Principles

<a id="automation-workflow"></a>

## Automation Workflow

**Goal:** The main idea of this topic is to know how Automation Quality Assurance Engineer(AQA Engineer) should start working. The process of developing of the test cases and opening pull request.

<a id="working-documentation"></a>

### Working with test documentation

<a id="working-branches"></a>

### Working with brances

In the automation project project should be created single branch for test case or test section or usually maintenance. Branches should be create from last development branch and contains all updates from that branch.

Branch that development for test cases or section should have name one of the following variants:

-   `Task → feature/{short description}`
-   `Fix → fix/{short description}`

If work of test cases is not finished in commit message should be present text one of the following variants:

-   `WIP on {short description}`

If work of test case is finished in commit message should be present text on of teh following variants:

-   `WC on {short description}`

Commit message of usually maintenance should be contains name or id section or test cases and maintenance reasons(change locators, change logic of the test, remove test and etc.)

<a id="working-pull-request"></a>

### Working with opening pull request

All changes to the main branches should be done using PR. PR should be opened using gitHub. PR should be opened if next conditions are fulfilled:

1. All page objects, elements, methods have names according to 3 chapters of that document;
2. The test is written according to the Manual Test Case step by step
3. The test is passed on all browser regarding requirements

PR should be reviewed and have approved. If in the PR would be conflicts those should be resolved step by step. PR should be updated if find some inconsistencies or inaccuracies. All inconsistencies or inaccuracies should be written as a comment to the PR or specific method, class, test or etc.

PR should have title: Id and Name of the test case from the file

PR should have a description: In the description should be present the what is added or modified during the development and added ticket from trello