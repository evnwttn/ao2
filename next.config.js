const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "/";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/ao2/`;
  basePath = `/ao2`;
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};
