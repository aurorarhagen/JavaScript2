import { POSTS_API_URL } from "../scripts/constants.mjs";
import { doFetch } from "./fetch.mjs";

const feedDisplayContainer = document.querySelector(
    ".feed-container"
)

async function getFeed() {
    try {
        const feed =await doFetch(POSTS_API_URL, {}, true);
        return feed;
    } catch (error) {
        console.log(error);
    }
}

function retrieveFeedHtml(feed) {
    const feedContainer = document.createElement("div");

    const postContent = document.createElement("p")
    postContent.textContent = feed.content;

    feedContainer.append(postContent);

    return feedContainer;
}

function displayFeed(feed) {
    for (let i = 0; i < feed.length; i++) {
        const feedHtml = retrieveFeedHtml(feed[i]);
        feedDisplayContainer.append(feedHtml)
    }
}

async function main() {
    const feed = await getFeed();
    displayFeed(feed);
}

main();