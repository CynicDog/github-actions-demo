
# Microsoft Learn's GitHub Actions Collections  
https://learn.microsoft.com/en-us/collections/n5p4a5z7keznp5

# GitHub Actions Document 
https://docs.github.com/en/actions

# The components of GitHub Actions 
## Workflows 
**A *workflow* is a configurable automated process that will run one or more jobs**. Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository, or when they can be triggered manually, or at a defined schedule. 
Workflows are defined in the `.github/workflows` directory in a repository, and a repository can have multiple workflows, each of  which can perform a different set of tasks. 

## Events 
**An *event* is a specific activity in a repository that triggers a workflow run**. For example, an activity can originate from GitHub when someone creates a pull request, opens an issue, or pushes a commit to a repository. You can also trigger a workflow to run on a schedule, by posting to a REST API, or manually on Actions UI.

## Jobs
**A *job* is a set of *steps* in a workflow that is executed on the same runner**. Each step is ethier a shell script that will be executed, or an *action* that will be run. Since each step is executed on the same runner, you can share data from one step to another. 
You can configure job's dependencies with other jobs; by default, jobs have no dependencies and run in parallel with each other. When a job takes a dependency on another job, it will wait for the dependent job to complete before it can run. 

## Actions 
**An *action* is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task**. Actions are used to help reduce the amount of repetitive code that you write in your workflow files.An action can pull your git repository from GitHub, set up the correct toolchain for your  build environment, or set up the authentication to your cloud provider. 

## Runners 
**A *runner* is a server that runs your workflows when they're triggered. Each runner can run a single job at a time**. Each workflow run executes in a fresh, newly-provisioned virtual machine. 
