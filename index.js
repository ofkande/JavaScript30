const section = document.getElementById("section");
const projects = [
  {
    title: "🥁 Drum it up!",
    tag: ["audio", "keyCode"],
    directory: "Drum Kit",
  },
  {
    title: "⏱ JS Clock",
    tag: ["Date()", "setInterval"],
    directory: "Clock",
  },
  {
    title: "🖼 Photo decoration",
    tag: ["dataset", "CSS Variables"],
    directory: "CSS Variables",
  },
  {
    title: "💪 Array Cardio - 1",
    tag: ["filter", "map", "sort", "reduce"],
    directory: "Array Cardio - 1",
  },
  {
    title: "🚂 Toy Story Flex Gallery",
    tag: ["toggle", "flex"],
    directory: "Toy Story Flex Gallery",
  },
  {
    title: "👀 Auto Complete",
    tag: ["fetch", "filter", "RegExp"],
    directory: "Auto Complete",
  },
  {
    title: "💪 Array Cardio - 2",
    tag: ["some", "every", "find", "findIndex"],
    directory: "Array Cardio - 2",
  },
  {
    title: "🎨 Let's Paint!",
    tag: ["canvas", "addEventListener"],
    directory: "HTML5 Canvas",
  },
  {
    title: "🖥 Console Tricks",
    tag: ["Dev tools", "console"],
    directory: "Dev Tools Domination",
  },
  {
    title: "✔️ Hold Shift and Check",
    tag: ["checkbox", "e.shiftKey"],
    directory: "Multiple Checkboxes",
  },
  {
    title: "📼 Video Player",
    tag: ["video", "addEventListener"],
    directory: "Custom Video Player",
  },
  {
    title: "🦄 Find Unicorn",
    tag: ["array", "splice", "addEventListener"],
    directory: "Key Sequence Detection",
  },
  {
    title: "👉 Slide In On Scroll",
    tag: ["scroll", "debounce"],
    directory: "Slide In On Scroll",
  },
  {
    title: "🧐 JS Reference VS Copy",
    tag: ["reference", "copy"],
    directory: "Reference VS Copy",
  },
  {
    title: "🌮 LOCAL TAPAS",
    tag: ["localStorage"],
    directory: "LocalStorage",
  },
  {
    title: "👥 Mouse Shadow",
    tag: ["shadow", "offset"],
    directory: "Mouse Move Shadow",
  },
  {
    title: "🎸 Sort Without Articles",
    tag: ["sort", "replace"],
    directory: "Sort Without Articles",
  },
  {
    title: "⏰ Left time of Videos",
    tag: ["reduce", "dataset", "Math"],
    directory: "Adding Up Times with Reduce",
  },
  {
    title: "📸 Take photos!",
    tag: ["canvas", "mediaDevices", "camera"],
    directory: "Webcam Fun",
  },
  {
    title: "✍️ Speech Detection",
    tag: ["SpeechRecognition"],
    directory: "Speech Detection",
  },
  {
    title: "🏃‍♀️ Geolocation",
    tag: ["geolocation"],
    directory: "Geolocation",
  },
  {
    title: "👣 Follow Along Nav",
    tag: ["getBoundingClientRect", "mouseenter"],
    directory: "Follow Along Link Highlighter",
  },
  {
    title: "🗣 The Voiceinator 5000",
    tag: ["SpeechSynthesisUtterance"],
    directory: "Speech Synthesis",
  },
];

projects.forEach((project) => {
  printProject(project);
});

function printProject(project) {
  const div = document.createElement("div");
  div.classList.add("project");

  const a = document.createElement("a");
  a.href = `./${project.directory}/index.html`;

  const img = document.createElement("img");
  img.src = `./${project.directory}/img/Readme.png`;
  img.href = project.directory;

  const h3 = document.createElement("h3");
  h3.innerText = project.title;

  const ul = document.createElement("ul");
  project.tag.forEach((tag) => (ul.innerHTML += `<li>#${tag}</li>`));

  div.appendChild(a);
  a.appendChild(img);
  a.appendChild(h3);
  a.appendChild(ul);

  section.appendChild(div);
}
