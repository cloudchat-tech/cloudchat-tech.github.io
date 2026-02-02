"use strict";

const { data } = require("autoprefixer");
const fs = require("fs");
const path = require("path");

const toTitleCase = require("titlecase").toLaxTitleCase;

const properCloudChatNaming = (content) => {
  const cloudChatRegex = /Cloud ?Chat/gi;
  return content.replace(cloudChatRegex, "CloudChat");
};

const extractTitle = (data) => {
  if (!data.title) {
    // Get the title based on the first top-level heading
    // Allows for "properly" formatted markdown files
    const markdownTitleRegex = /^# +(.+)\n+/m;
    const title = data.content.match(markdownTitleRegex);

    // If a title is found, update data
    if (!!title) {
      // Set the title to the regex result capture group
      data.title = title[1];

      // Remove the line from the content to avoid double-render
      data.content = data.content.replace(`# ${data.title}`, "");
    }
  }

  return data;
};

const createGuestAvatarFileName = (data) => {
  if (data.guest && data.guest.name) {
    const formattedName = data.guest.name.replace(/ /g, "-").toLowerCase();
    data.guest.avatar = `avatar-${formattedName}.jpg`
  }

  return data;
};

const titleCaseTitle = (data) => {
  data.title = properCloudChatNaming(toTitleCase(data.title));
  data.content = properCloudChatNaming(data.content);

  return data;
};

const extractAssetImgFileName = (value) => {
  if (!value || typeof value !== "string") {
    return null;
  }

  const match = value.match(/\{\%\s*asset_img\s+([^\s%]+)\s*%\}/i);
  return match ? match[1] : null;
};

const normalizeImageValue = (data, value) => {
  if (!value || typeof value !== "string") {
    return value;
  }

  const trimmedValue = value.trim();
  if (/^https?:\/\//i.test(trimmedValue) || trimmedValue.startsWith("/")) {
    return trimmedValue;
  }

  const assetFileName = extractAssetImgFileName(trimmedValue) || trimmedValue;
  const outputDir = data.path ? data.path.replace(/index\.html$/i, "") : "";

  return path.posix.join("/", outputDir, assetFileName);
};

const normalizeOpenGraphImages = (data) => {
  if (data.og_image) {
    data.og_image = normalizeImageValue(data, data.og_image);
  }

  if (data.twitter_image) {
    data.twitter_image = normalizeImageValue(data, data.twitter_image);
  }

  if (data.opengraph_image) {
    data.opengraph_image = normalizeImageValue(data, data.opengraph_image);
  }

  return data;
};

const resolveAssetDir = (data) => {
  if (data.asset_dir) {
    return path.isAbsolute(data.asset_dir)
      ? data.asset_dir
      : path.join(hexo.base_dir, data.asset_dir);
  }

  const sourcePath = data.full_source
    ? data.full_source
    : data.source
      ? path.join(hexo.base_dir, data.source)
      : null;

  if (!sourcePath) {
    return null;
  }

  const assetDir = sourcePath.replace(path.extname(sourcePath), "");
  return assetDir;
};

const attachOpenGraphImage = (data) => {
  const assetDir = resolveAssetDir(data);
  if (!assetDir) {
    return data;
  }

  if (!fs.existsSync(assetDir)) {
    return data;
  }

  const outputDir = data.path ? data.path.replace(/index\.html$/i, "") : "";
  const files = fs.readdirSync(assetDir);

  const hasFacebookImage = files.includes("opengraph-episode-facebook.png");
  const hasTwitterImage = files.includes("opengraph-episode-twitter.png");

  if (!data.og_image && !data.opengraph_image && hasFacebookImage) {
    data.og_image = path.posix.join(
      "/",
      outputDir,
      "opengraph-episode-facebook.png"
    );
  }

  if (!data.twitter_image && hasTwitterImage) {
    data.twitter_image = path.posix.join(
      "/",
      outputDir,
      "opengraph-episode-twitter.png"
    );
  }

  return data;
};

hexo.extend.filter.register("before_post_render", (data) => {
  return attachOpenGraphImage(
    normalizeOpenGraphImages(
      createGuestAvatarFileName(titleCaseTitle(extractTitle(data)))
    )
  );
});
