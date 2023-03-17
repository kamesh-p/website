videoJSON = {
  videoUrl:
    "https://ia800200.us.archive.org/7/items/Sintel/sintel-2048-stereo.mp4",
  title: "Sintel",
  description:
    "“Sintel” is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film. This 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. ",
  comments: [
    {
      name: "Micheal Scott",
      image: "images/reviewers/micheal.png",
      comment:
        "How often do people make a film where the main character kills the thing they were trying to rescue because they didn’t recognize it? Not that often. This brought tears to my eyes.",
    },
    {
      name: "Dwight K Schrute (Asst. to the Regional Manager)",
      image: "images/reviewers/dwight.png",
      comment:
        "Breathtaking, I’ve only just begun my blender journey. Making something every day until I get to the point I can create something on this scale. Pretty amazing short story as well. Props all around to all involved in this great piece of work!",
    },
    {
      name: "Jim Halpert",
      image: "images/reviewers/jim.png",
      comment:
        "Only the best stories can make you cry, and while I’ve lost count how many times I’ve watched this remarkable piece of art  over the years showing it to people I know, Sintel brings a tear to my eye every time. This film is inspiring not only for the beautiful story but for the magical quality animation.",
    },
    {
      name: "Pam Beesly Halpert",
      image: "images/reviewers/pam.png",
      comment:
        "This short film was riveting. The musical overlay was astounding and so were the animations. I was bawling like a little kid at the end of this video and not many videos are able to do this to me.",
    },
    {
      name: "Angela Martin",
      image: "images/reviewers/angela.png",
      comment:
        "I saw this movie a long time ago as a child and it still scars me to this day. This is the kind of stuff that should AT THE VERY LEAST be played before a movie the way they showed bao before The Incredibles 2. These are little masterpieces.",
    },
    {
      name: "Kevin Malone",
      image: "images/reviewers/kevin.png",
      comment:
        "Wow, at first I thought that it wasn’t that good, nice animation and all but not excellent story. Then I saw the end. The feels are real. You win Blender Foundation, you win.",
    },
    {
      name: "Andy Bernard",
      image: "images/reviewers/andy.png",
      comment:
        "Honestly seeing a story with a sad ending is refreshing, I can tell you the ending of 99% of all movies ever made. “Its a happy ending”. Its why I like game of thrones and its why I loved this.",
    },
  ],
};
posterJSON = [
  {
    imageUrl:
      "https://sportshub.cbsistatic.com/i/2022/10/24/3fe2ecc3-2100-4f7e-951a-aabe1782372d/ant-man-and-the-wasp-quantumania-poster.jpg?auto=webp&width=1688&height=2500&crop=0.675:1,smart",
    title: "Ant-wasp quantumania ",
  },

  {
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12a7d271-b00c-4045-a128-eeffb6a6715f/d6j7o7g-cc4753b9-7e77-493c-902b-e898ce841bb3.png/v1/fill/w_1600,h_1968,strp/avengers__kang_dynasty_poster_by_darthdestruktor_d6j7o7g-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk2OCIsInBhdGgiOiJcL2ZcLzEyYTdkMjcxLWIwMGMtNDA0NS1hMTI4LWVlZmZiNmE2NzE1ZlwvZDZqN283Zy1jYzQ3NTNiOS03ZTc3LTQ5M2MtOTAyYi1lODk4Y2U4NDFiYjMucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.zWI_P8UFq8-K9hO8cxGH3WvLYibLcnXYy3pQolE5NUE",
    title: "Avengers Kang Dyansty",
  },
  {
    imageUrl:
      "https://preview.redd.it/myzf077gb8ma1.jpg?width=2592&format=pjpg&auto=webp&v=enabled&s=8ed232b2b64ea52caae2bd949866d28be4f676c0",
    title: "Avengers Secret Wars",
  },
];

// Embeding video
const videoHolder = document.querySelector(".video-holder");
let video = document.createElement("video");
video.setAttribute("class", "video-holder");
video.setAttribute("controls", "");
let videoSource = document.createElement("source");
videoSource.setAttribute("src", videoJSON.videoUrl);

video.append(videoSource);
videoHolder.append(video);

const heading = document.querySelector(".heading-holder");
let title = document.createElement("p");
title.setAttribute("class", "heading");
title.innerText = videoJSON.title;
heading.append(title);

const description = document.querySelector(".description-holder");
let des = document.createElement("p");
des.setAttribute("class", "description");
des.innerText = videoJSON.description;
description.append(des);

const commentHeading = document.querySelector(".comment-heading-holder");
let cmtHeading = document.createElement("p");
cmtHeading.setAttribute("class", "cmt-heading");
cmtHeading.innerText = "Comments";
commentHeading.append(cmtHeading);

const comment = document.querySelector(".comments-holder");
for (let index = 0; index < videoJSON.comments.length; index++) {
  console.log(videoJSON.comments);
  let commentHolder = document.createElement("div"); // flex div
  commentHolder.setAttribute("class", "comment-holder");

  let commentImage = document.createElement("img");
  commentImage.setAttribute("class", "comment-image");
  commentImage.setAttribute("src", videoJSON.comments[index].image);
  console.log(commentImage);

  let commentSection = document.createElement("div"); // wrapper div for comment section
  commentSection.setAttribute("class", "comment-section");

  let commentName = document.createElement("h5");
  commentName.innerText = videoJSON.comments[index].name;

  let commentDescription = document.createElement("p");
  commentDescription.setAttribute("class", "comment-description");
  commentDescription.innerText = videoJSON.comments[index].comment;

  commentSection.append(commentName);
  commentSection.append(commentDescription);

  commentHolder.append(commentImage);
  commentHolder.append(commentSection);

  comment.append(commentHolder);
}

const posterImgHolder = document.querySelector(".poster-img-holder");

for (let index = 0; index < posterJSON.length; index++) {
  let posterImg = document.createElement("img");
  posterImg.setAttribute("src", posterJSON[index].imageUrl);
  posterImg.setAttribute("class", "poster-img");
  // console.log(videoJSON['videoUrl']);
  posterImgHolder.append(posterImg);
}
