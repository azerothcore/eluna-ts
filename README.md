# Eluna TS

Eluna-TS is a system that uses [TypeScriptToLua](https://typescripttolua.github.io/) to compile Lua files compatible with the [Eluna Engine](https://github.com/ElunaLuaEngine/Eluna/blob/master/README.md)

This project is composed by:

* ✔️ A pre-configured workspace compatible with VSCode to compile your sources
* ✔️ The `deps/eluna-ts-definitions` which adds Eluna definition files to Typescript allowing proper type-checking and intellisense feature
* ✔️ The `deps/eluna-ts-lib` which must be included in your project to add needed methods and make it work on Eluna. It also adds some useful reusable Typescript classes and functions.

DISCLAIMER ⚠️: not all Typescript features are supported by Eluna-TS, the limitations are listed inside the documentation of the TypeScriptToLua project.
### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/FEmjdauPKH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Last Eluna commit compatibility check](https://github.com/ElunaLuaEngine/Eluna/commit/2962d4fea3708cf22964d1cc750290b8980b313f)

## Installation (Without Docker)

If you don't have docker or you already have Nodejs install, you can just follow this guide to setup your environment by using Nodejs directly.

### 1. Requirements

- Install [nodejs 12+](https://nodejs.org/en/)

- Install **NPM v7** : run `npm install -g npm@7` once installed nodejs (on linux you may need `sudo` to run this command). **NOTE:** NPM v7 is already included in nodejs 15+

### 2. Install dependencies

- Run `npm install` to install the required node dependencies

## Installation (With Docker)


### 1. Requirements

- [Docker](https://docs.docker.com/get-docker/)

### 2. Build and run the container

- Run `docker-compose up --build eluna-ts-dev` 
## Configure your environment


##


