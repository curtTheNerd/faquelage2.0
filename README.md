# React + Vite

Frontend for faquelage.com with React.js (vite) and TailwindCSS:  


Nothing much to explain here to be frank; 
I developed the original website FrontEnd in beginning of 2024 with React.js and plain SCSS => now with restructured components and refined CSS through Tailwind. For checking further previous processes please check out the older repository of "faquelageReact" on my GitHub.

New developments, conclusions and boni: 
    - more structured components, themselves and in their hirarchy => better reusability for existing components
    - tailwind usage provides way better structured CSS and reduced over 1000 lines of previous SCSS-files as well as saved a lot of seperate CSS- and map-CSS-files (over 50 lol)
    -added .htaccess file to adjust BrowserRouter from react-router for previous request-path-Errors 
      => finally achieved proper pathing and divided the Homepage component (previously one big component with different subcomponents as sections; usage of navbar was just scroll-navigation on homepage) to 4 different site-components (not including Datenschutz.jsx)
    - added way cleaner and more uniform media breakpoints through Tailwind
    - changed and reduces the :root data and color-palette


The whole project was done on request of the Band Faquelage with complete freedom for design and development based on the provided images that are shown on the website.

Further plans:
    - providing a simple Backend to allow the band-members being able to password-login through faquelage.com/admin
      => creating a (probably SQL) database for all the displayed and non-static data
      => providing an API to GET, PUT and POST the data (tour dates, etc.) from the webApp directly
    - ramp up my backend and database studies^^

Thanks for believing in me, future me, we keep it going here. On my way to Fullstack step-by-step!