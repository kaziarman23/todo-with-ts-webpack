<!-- TypeScript with webpack -->

With out any boundler typeScript can't run any other libarys.


## How to install and config webpack & TypeScript:

1. To start installing
    
    npm init -y

2. Install the TypeScript compiler and the ts-loader for Webpack using npm

     npm install --save-dev typescript ts-loader

3. At the root of your project, create a file named tsconfig.json. This file will define your TypeScript compiler options.

    {
        "compilerOptions": {
            "target": "es5",   // Set the target ECMAScript version
            "module": "commonjs", // Specify the module system (CommonJS here)
            "strict": true,      // Enable strict type checking
            "outDir": "dist",    // Output compiled JavaScript to the "dist" folder
            "allowJs": true,      // Allow compiling plain JavaScript files
            "sourceMap": true    // Generate source maps for debugging
        },
        "include": ["src"] // Include all TypeScript files in the "src" directory for compilation
    }

4. Create a file named webpack.config.js in your project directory. This file will define your Webpack configuration.

    const path = require('path');

    module.exports = {
        entry: './src/index.ts', // Entry point for compilation
        module: {
            rules: [
            {
                test: /\.tsx?$/, // Rule to handle TypeScript files
                use: 'ts-loader',
                exclude: /node_modules/, // Exclude the "node_modules" directory
            },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'], // Resolve file extensions
        },
        output: {
            filename: 'bundle.js', // Output filename for the compiled bundle
            path: path.resolve(__dirname, 'dist'), // Output directory for the bundle
        },
    };

5. Create a file named index.ts in your src directory. This will be your application's entry point. 

    console.log("I am working perfectly")
    

6. Then run the webpack.

    npx webpack


7. For auto compile file we have to add a script in package.json file :
    
    "start" : "tsc --watch"


8. Now link up the index.js file to you'r index.html file.


    <!-- Tailwind is not working  -->

9. Have to  install Tailwind CSS and its peer dependencies.

    npm install -D tailwindcss postcss autoprefixer

10. Create a file named tailwind.config.js at the root of your project. This file defines your Tailwind configuration. Here's a basic example:

    module.exports = {
        content: ["./src/**/*.{js,ts,jsx,tsx}"], // Specify paths to your template files
        theme: {
            extend: {}, // Add custom Tailwind theme configurations here (optional)
        },
        plugins: [], // Add custom Tailwind plugins here (optional)
    };


11. Open your webpack.config.js file and add the following configuration to process Tailwind CSS.

    const path = require('path');
    const tailwindcss = require('tailwindcss');
    const autoprefixer = require('autoprefixer');

    module.exports = {
        // ... your existing Webpack configuration ...

        plugins: [
            // ... your existing plugins ...
            tailwindcss('./tailwind.config.js'), // Add Tailwind plugin
            autoprefixer(), // Add Autoprefixer plugin
        ],
    };


12. Run the following command in your terminal to generate the initial Tailwind CSS classes:

    npx tailwindcss init -p

13. In your main CSS file (e.g., src/styles.css), import the generated Tailwind CSS classes:


    @tailwind base;
    @tailwind components;
    @tailwind utilities;

14. now run 
    
    npx webpack