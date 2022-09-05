
export default function tagSetting(parentNode, tagName, text){
  let tag = document.createElement(tagName)
  tag.innerHTML = text;
  parentNode.appendChild(tag)
}