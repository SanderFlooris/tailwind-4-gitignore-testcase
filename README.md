# TailwindCSS 4 gitignore testcase
This repository exists as an example case where the `.gitignore` causes TailwindCSS to not properly compile the classes when a glob path is used.

## Setup steps
1. `cp -r ./example-content/some-slug ./storage/app/private/cms_content/`
2. `nvm use`
3. `corepack enable`
4. `yarn`
5. `yarn dev`

## How to trigger the bug?
Once you've followed the setup steps, it should already be triggered.

To show that it's specifically the combination of the glob path with a gitignore, follow the instructions at `./src/app.css`.

> [!NOTE]
> You might have to restart the vite server, as it seems like Tailwind caches some things that causes the bug to be temporarily resolved until the server is restarted when switching from a working to not working situation.
