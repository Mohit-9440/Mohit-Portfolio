const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "git@github.com:Mohit-9440/Mohit-9440.github.io.git";

ghpages.publish(
    pathname,
    {
        branch: "gh-pages",
        repo: repoURL,
    },
    (err) => {
        if (err) console.log("ERROR: ", err);
        else console.log("PUBLISHED");
    }
);
