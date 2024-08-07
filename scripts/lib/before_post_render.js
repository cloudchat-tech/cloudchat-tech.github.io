"use strict";

const { data } = require("autoprefixer");

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

hexo.extend.filter.register("before_post_render", (data) => {
  return createGuestAvatarFileName(titleCaseTitle(extractTitle(data)));
});
