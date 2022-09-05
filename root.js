import objData from './object.js'
import object2 from './object2.js'
import styleSet from './style.json'assert{type:"json"}

// import objStyle from './object2.js';
import tagSetting from './document.js'
// console.log(objStyle.style2)
// styleSetting(objStyle.style1);
// styleSetting(objStyle.style2);

const root = document.getElementById("root")
const body = document.body
objData(root , styleSet.style3, styleSet.style1)


objData(body, styleSet.style2)
tagSetting(root, "div", "류주완 천재")
tagSetting(root, "div", "박재형 멍청이")
// objData.me.skill(root)
// objData.juwan.skill(root)
// objData.dongwook.skill(root, objData.me.name)
// 변화는 모색하지만 대응책은 생각하지 않는다.
// 배민폰트
// 가치판단 x 떠오르는 아이디어를 어떻게 접근해야 하는가
let arr = [ 1, 2, 7, 2, 3, 9, 6]

console.log(arr.sort().filter((item)=>item > 3))
