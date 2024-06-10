[![My First Workflow](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_1_my_first_workflow.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_1_my_first_workflow.yml)
[![My First Workflow with Manual Triggers](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_2_workflow_with_manual_trigger.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_2_workflow_with_manual_trigger.yml)
[![Environment Variables Demo](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_3_environment_variables.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_3_environment_variables.yml)
[![Artifacts Demo](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_4_artifacts.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_4_artifacts.yml)
[![NPM build with cached dependencies](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_5_npm_build_with_cached_dependencies.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_5_npm_build_with_cached_dependencies.yml)
[![Github Actions NPM Publish](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_6_npm_publish_with_github_actions.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_6_npm_publish_with_github_actions.yml)
[![Publish to Docker With Github Actions](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_7_docker_image_publish_with_github_actions.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_7_docker_image_publish_with_github_actions.yml)
[![Use Custom Javascript Action in Workflow](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_8_javascript_action_workflow.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_8_javascript_action_workflow.yml)
[![Use Custom Docker Action in Workflow](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_9_docker_action_workflow.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/MS_LEARN_9_docker_action_workflow.yml)
[![Add scripts to your workflow](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_1_add_scripts_to_workflow.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_1_add_scripts_to_workflow.yml)
[![Expressions and Functions](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_2_expressions_and_functions.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_2_expressions_and_functions.yml)
[![Contexts and Variables](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_3_contexts_and_variables.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_3_contexts_and_variables.yml)
[![Call Reusable Logging Workflow (Caller workflow)](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_4_2_caller_workflow.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_4_2_caller_workflow.yml)
[![Matrix Combinations](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_5_matrix_combinations.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_5_matrix_combinations.yml)
[![Publish And Run Docker Image With Direct Usage of Command](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_7_1_run_jobs_in_a_container.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_7_1_run_jobs_in_a_container.yml)
[![Publish And Run Docker Image With Container Option](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_7_2_run_jobs_in_a_container.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_7_2_run_jobs_in_a_container.yml)
[![Environment protection rules, secrets and variables](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_8_environments.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_8_environments.yml)
[![Creating PostgreSQL service containers](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_9_containerized_services.yml/badge.svg)](https://github.com/CynicDog/github-actions-demo/actions/workflows/GITHUB_DOC_9_containerized_services.yml)

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
