const path = require("path");
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: "./src/index.ts", // Entry point for compilation
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Rule to handle TypeScript files
                use: "ts-loader",
                exclude: /node_modules/, // Exclude the "node_modules" directory
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"], // Resolve file extensions
    },
    output: {
        module: {
            esModule: true,
          },
        filename: "bundle.js", // Output filename for the compiled bundle
        path: path.resolve(__dirname, "dist"), // Output directory for the bundle
        
    },
    plugins: [
        tailwindcss('./tailwind.config.js'), // Wrap in array
        autoprefixer(), // Wrap in array
    ],
};
