import { elements } from "./config";
import { pushing, GetData, TagAdd } from "./localStorage";
import { Gethashtag } from "./util";
let tags;
let hashTag;

export const NewTags = () => {
  tags = document.querySelectorAll(".day");
  hashTag = Array.from(tags);
};
NewTags();

let inputText = elements.tweetData;
//localStorage.clear();
GetData();
Gethashtag();
console.log(inputText);

const tagClicked = function(data) {
  let preValue = inputText.value;
  console.log(data);
  inputText.value = `${preValue}  ${data}`;
};

export const TagsArray = () => {
  console.log(hashTag);
  hashTag.forEach(tag => {
    tag.addEventListener("click", function() {
      console.log(tag);
      tagClicked(tag.innerText);
    });
  });
};

TagsArray();
elements.shareButton.addEventListener("click", share);

function share() {
  console.log(inputText.value.replace("#", "%23"));

  window.open(
    `${elements.url}?text=${inputText.value.replace(
      new RegExp("#", "g"),
      "%23"
    )};width=500 height=300`
  );

  inputText.value = " ";
}

elements.Addtag.addEventListener("click", () => {
  TagAdd(elements.inputTag.value);
  NewTags();
  TagsArray();
  console.log(hashTag);
});

elements.TaskAdd.addEventListener("click", () => {
  pushing(inputText.value);
});
