module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./css/general.css");
    eleventyConfig.addPassthroughCopy("./css/grid.css");
    eleventyConfig.addPassthroughCopy("./css/theme.css");
    eleventyConfig.addPassthroughCopy("./images/logo.png");
    eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
        if(data.draft && (process.env.ELEVENTY_RUN_MODE === "build" || process.env.ELEVENTY_RUN_MODE === "serve")) {
            return false;
        }
    });
};