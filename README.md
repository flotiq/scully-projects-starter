<a href="https://flotiq.com/">
    <img src="https://editor.flotiq.com/fonts/fq-logo.svg" alt="Flotiq logo" title="Flotiq" align="right" height="60" />
</a>

Scully Starter - Projects
========================

This is a [Scully](https://scully.io/) starter project for a projects website. It's configured to pull projects data from [Flotiq](https://flotiq.com) and can be easily deployed to your cloud hosting - Heroku, Netlify, etc.

Live Demo: https://angry-brattain-f446a1.netlify.app/

Screenshot

<img src="https://github.com/flotiq/scully-projects-starter/raw/master/docs/flotiq-starter-projects.png" width=480 />

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Quick start

1. **Clone project**

    ```bash
   git clone https://github.com/flotiq/scully-projects-starter
   ```

1. **Setup "Project" Content Type in Flotiq**

   Create your [Flotiq.com](https://flotiq.com) account. Next, create the `Project` Content Type:

   ![Project content type in flotiq](docs/create-definition-project.png)
    
   _Note: You can also create `Project` using [Flotiq REST API](https://flotiq.com/docs/API/)._ 

1. **Configure application**
    
    The next step is to configure our application to know from where it has to fetch the data.
    
    In `src/environments/environment.prod.ts`, in `src/environments/environment.ts` and in `src/environments/environment.js` change `YOUR_FLOTIQ_API_KEY` to Read only Flotiq API key.
    
    Remember to change them back to `YOUR_FLOTIQ_API_KEY` before committing code to repository.
    
1.  **Start developing**

    ```sh
        cd scully-projects-starter/
        npm install
    ```
    If you wish to import example projects to your account install [flotiq-cli](https://github.com/flotiq/flotiq-cli), and run in project directory:
            
    ```sh
        flotiq import [flotiqApiKey] .
    ```
    
    It will add 9 images and 3 projects to your Flotiq account.
        
    _Note: You need to put your Read and write API key as the `flotiqApiKey` for import to work. You don't need the `Project` content type in your account. If you already have projects with ids `project-1`, `project-2` they will be overwritten._

    Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
        
    If you wish to add new elements to the project run `npm run ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

    Run `npm run build:prod` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
    
    To build the static version with Scully run:
    
    ```sh
    npm run build --prod
    npm run scully -- --scanRoutes
    npm run scully serve
    ```
    
    This will start the Scully static server on `http://localhost:1668/`

1. **Manage your projects using Flotiq editor**
      
    You can now easily manage your projects using [Flotiq editor](https://editor.flotiq.com)
    
    ![Managing projects using Flotiq](docs/manage-projects.png)

1. **Update Flotiq Angular SDK when you create or update Type Definition**

    Everytime you change something in your Content Type Definitions, you have to regenerate Flotiq Angular Package inside project.
    1. Go to your dashboard in Flotiq, and click on Angular icon in "Your API packages" section, to download an SDK with the updated content of your schema.
    ![Downloading Angular SDK](docs/Dashboard-package.png)
    2. Extract downloaded zip in `flotiq` directory in the project.
    3. Done, you have updated Flotiq Angular SDK in your project!

### Further help with Angular

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploy

  You can deploy this project to Netlify in 3 minutes:
  
  [![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/flotiq/scully-projects-starter)


## Collaborating

   If you wish to talk with us about this project, feel free to hop on our [![Discord Chat](https://img.shields.io/discord/682699728454025410.svg)](https://discord.gg/FwXcHnX) .
   
   If you found a bug, please report it in [issues](https://github.com/flotiq/scully-projects-starter/issues).
