export default function styleChange(tagName, object, object2={}){
  let styleSet = "";
  // console.log(Object.values(object)[0])
  // console.log(Object.keys(object)[0])

  for(let i =0; i < Object.values(object).length; i++){
    // console.log(typeof(Object.keys(object)[i]))
    
    styleSet += `${Object.keys(object)[i]} : ${Object.values(object)[i]} ;`
      // console.log(styleSet)
  }
  for(let i =0; i < Object.values(object2).length; i++){
    // console.log(typeof(Object.keys(object2)[i]))
    
    styleSet += `${Object.keys(object2)[i]} : ${Object.values(object2)[i]} ;`
      // console.log(styleSet)
  }
  tagName.style = styleSet
  console.log(tagName.style)
}