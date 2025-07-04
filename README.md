<h1 align="center">
  <br>
  <img src="https://i.ibb.co/3FdZL3J/Screenshot-2023-10-24-at-15-33-28.png" alt="Two Column Portfolio" width="200">
  <br>
  Oliver Ng's Two-Column Portfolio
  <br>
</h1>

<h4 align="center">A simple two-column portfolio template built with <a href="https://nextjs.org" target="_blank">Next.js</a> and <a href="https://tailwindcss.com" target="_blank">Tailwind CSS</a>.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#customization">Customization</a> •
  <a href="#license">License</a>
</p>

<div align="center">
  <img alt="Mockup of website" src="https://i.ibb.co/HqmLMCf/Mockups-Two-Column-Portfolio.png">
</div>

## Key Features

* Simple and easy to edit - your version is up and running in minutes.
  - All information of the page is loaded from a JSON file, which can be modified without coding knowledge.
* Colors are easily customizable to your taste.
  - There are a few presets, but even adding your own color palette is very easy.
* Mobile ready.
  - Optimized for desktop, but looks good on mobile as well.
* Deployed very easily using Vercel.
  - Create a private fork of this repository on your GitHub account, change the details and deploy the page using Vercel's GitHub integration.

## How To Use

To clone and run this website, you'll need to paste the following steps in your command line:

```bash
# Clone this repository
$ git clone <your-repo-url>

# Go into the repository
$ cd two-column-portfolio

# Install dependencies
$ npm install

# Run the app
$ npm run dev

# Build the app
$ npm run build
```

> **Note**
> After running the app the live version of it is available at `localhost:3000`.

## Customization

In order to customize the template to your own needs, please do the following.

1. Edit the title and description of the website in the file `app/layout.js`.
2. Add your personal details by editing the file `translations/en.json`
   - You can specify an arbitrary number of positions in experiences (+ their skills), education, and projects.
   - In the About section, multiple paragraphs can be created by creating multiple entries in the array `General:about`.
3. Replace the file `app/favicon.ico` with a favicon of your choice.
4. (Optional) Change the color palette by editing the file `tailwind.config.js`.
5. (Optional) Edit the imprint and privacy statement if it is necessary in your country.
6. Enjoy!

## Credits

This portfolio was created and is maintained by Oliver Ng.

## License

MIT License
