// let btn = document.querySelector('#btn')

// btn.addEventListener('click',function (params) {
//     console.log('hello farhan');
    
    
// })


// let ul = document.querySelector('ul')
// let about = document.querySelector('#about')
// ul.addEventListener('click',function (event) {

//     console.log('ul clicked');
    
// })

// about.addEventListener('click',function(event){
//     event.stopImmediatePropagation()
//     console.log('about');
// })





let link = document.querySelector('#a')

link.addEventListener('click',function (event) {
    event.preventDefault()
    link.innerHTML= "change link"
    
})


// let form = document.querySelector('#form')
// let name1 = document.querySelector('#name')
// let f_name = document.querySelector('#f-name')
// let age = document.querySelector('#age')
// let email = document.querySelector('#email')

// form.addEventListener('submit',function (event) {
// event.stopPropagation()
//     event.preventDefault()
//     // console.log('form click');

//     console.log(`name : ${name1.value}`);
//     console.log(`father name : ${f_name.value}`);
//     console.log(`age : ${age.value}`);
//     console.log(`email : ${email.value}`);
//     name1.value =""
//     f_name.value =""
//     age.value =""
//     email.value =""
    
// })




const bulb = document.querySelector('#bulb')

bulb.addEventListener('mouseover' , function(){

    bulb.src = 'https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-320-80.jpg'

 })

bulb.addEventListener('mouseout',function () {
bulb.src= 'https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png'    

})












// // const ull = document.querySelector('.images');
// // const image3 = document.querySelector('#image-3');
// // const linkk = document.querySelector('#link-1');

// // ull.addEventListener("click", function (event) {
// //     // console.log('ul clicked');
// //     event.stopPropagation()
// //     event.preventDefault()
// //     console.log(event.target.tagName);
// //     if(event.target.tagName === 'A'){
// //         event.target.innerHTML = 'abc'

// //     } 




// //     console.log(event.target.parentNode.tagName)
// //     if(event.target.parentNode.tagName === 'LI'){
// //         event.target.parentNode.remove()
// //     }


// // }


// // )









let form = document.querySelector('#form')
let username = document.querySelector('#name')
let fatherName = document.querySelector('#f-name')
let email = document.querySelector('#email')
let age = document.querySelector('#age')

form.addEventListener('submit',function(event) {
    event.preventDefault()    

    console.log('form chalne laga he theek he ');

    console.log(`user name is : ${username.value}`);
    console.log(`user father name is : ${fatherName.value}`);
    console.log(`user age is : ${age.value}`);
    console.log(`user email is : ${email.value}`);
    username.value=''
    fatherName.value=''
    age.value=''
    email.value=''

})








let ul = document.querySelector('ul')
let about = document.querySelector('#about')

ul.addEventListener('click',function(){
    console.log('ul clicked');
})
about.addEventListener('click',function (event) {
    console.log('about click');
    event.stopPropagation()
    
})




let images = document.querySelector('.images')

images.addEventListener('click',function (event) {

    if (event.target.parentNode.tagName === "LI") {
        console.log('img click');
        event.target.parentNode.remove()
        
    } 
    
})


let box = document.querySelector('#box')

box.addEventListener('mouseover',function () {
    box.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDQ0PDRAQDw0NDw0PDQ4PDw8PDw8QFRIWFxURFRUYHSggGBolHBUWITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OFxAQGC0dHyYrKy0tLS0tLS0uKy0rMi0rLS0rLS0tLSstLS4tLS0tLSstLS0uLS0tLSstKy0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQUGAgMEB//EAEMQAAIBAgIFBQoMBgMAAAAAAAABAgMRBCEFEjFBUQYUImFxEzJCc4GRobLS8AcjNFJTYnKTscHC0RYkQ5KUojOC4f/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMEBQb/xAA0EQEAAQMCAwUFCAIDAAAAAAAAAQIDEQQSITFxBRMyQVEVIjNSgUJhkaGxwdHwI+EUNPH/2gAMAwEAAhEDEQA/APoRzvSAAAAAAAAAAAAAAAAAAAAAAIAAAUABABQAAUgAAAAAAAAAAAAAAAAAAAQABQAAAAAABAKAAoCwEAAAAAAAAAAAAgAAAAAAAFAAAAAAAAAAA5AAIAAAAIAAAAAAAAIAAABQIAAFAAAAEAAAKAHIgFEAAAAHXXqqEJTllGKbZJnEZZUUTXVFMebC4XlNTeVaEqf1o3qQ8tldea3Waab8Tz4O+52dXHgnP5SzVCtCpFSpyjOL2Si1JedG6JieTz6qKqZxVGJdhUQAAAACABQAACAAAAAAAAABQA5EAABCgAA1zlRjrtUIvJWlU7fBj+fmOa/X9mHq6CziO8n6Ndb/APTlmcPViJmcOiljnTnrRc6Mt1SLspL6zWXkasY03ccm+vSb4xOKo/v94MzgeVGJWdSMK9O9rx+KqZbWvBl6O06aNRV9qHmX+zLOcW5mmfv4x/P6tn0fpOjXXxcula7py6NSPbH81kdNNcVcnj3tPctT70fXyewyaQAAAAAAAABAAACgAIAAACjkQAAAAB5NJ46NClKcrXSepHfKW5JGFy5FFOZb9Np6r9yKafr9z5/XxMpyk3e8m3Jva77zyq7sy+utaam3Eeby0qrlStwnUTfUpOyFdXCIZ024i5MvJja7p03Zp63Rhvz4mNEZl0Txdmh1OEYRbbUpPJ7ui3ZcNhuivNWIc2otxFOZ5stJXa+rmnvXWuBscBR5a1cPW1J/H0I5S1n8avsz39kr9qN9F2Y58XPd7Nt3Kc0+7P5N30Tpahi6evh5qSXfReU4PhKO1fgdFNUVcni3rFyzViuMPcVpAAAAAAAAAAAAAAAIAA5AAAAABonKjH90rPPoQkqcey/Sflt5kjy9Rc319H1nZmm7u1988Z/ZrWla7p1E1LOcV0dqS3dm/wAxrop3Q9KmqIjEpGDnFOLioq/Rs5X453J58WWdqLDNyTnZqHeRWxcX2iZ4YgzGZl78LnOOrsg3rPg3F2XpM7dPm5dTVG3Ds0niu5Um/CllHt4m6HHbp3S1V57TJ1O3CV6lKpGdCUoVU1quDet9nrvw3liZieDC5RTVTiuMw+16OVXuFLnDi6+pHurirLXtnkdkZxxfJXdu+dnLyegrWAAAAAFAAQAAAAAAAA5AAIAAxuncd3Gi1F2qVLxg/m8ZeT80arte2l16Oz3lzM8ofOMfCu4qK1JZ5NRat1u7Z5/d0xxmX1NGojOKKXOrh3qWycm7ye+T98jTni6aaoiXTRlCC1W1HqeXmvtMuLKvjxTF4mNOGs890Vvb4FppzOGvOHboCTdOUpbZScmzdDl1McYYvS2L7rVdu8j0Y/uZwtFG2nDxWKzbb8Huhu7V3iKivSwzWpfZKttX9qz7XE22qczl5faeo2Ud3HOf0/2+mHS+eAAUAgFAAQAAAAAAAAAA5EAABxlJJNt2STbb2JcQREzwhpGlMa69aU/BXRprhFfvt8pxV1bpy+g09qLVEU/ixGKxCfRTXRfS7eBy3Kt04h6tiztjdKOqmk+Kua8NuGN0niKcqcoyau1lxvuNtFM5Xbw48IY/R2jo1c96e7YzZVcmOBNFERFUMnjaqoUe5wfSndPilvZaJiXPVTNVWamFRmyd+Ew06tSnSpq9SpJRgut8erf2FiMzhjXXFFM11cofZdD6OhhcPToU81BdKW+c3nKT7WdtNO2MPkb92q7cmufN7StQAAAAAEAAAAAABAAAABzIgFAMByox+rFUIvpTzqdUdy8v5dZov14jEPR0FnM95Plyax7s5nrNf0jRlSqJ5uE5SknwdtnpNc0vWsXouU484eetVk1ZN24IREM5na8+EwMpzqSlsVoLttdm6KsQ8+571yZlncFh40ot7Fa8n1I11Ru5spuTnEMHWrd0nJve8k+G6wxNLrpmmeEutxt1r8DKKssKrcxyb78HGh8pYyovnU8PfzTn+n+46bNP2ngdq6jlZp6z+0N7N7xAAAAAQAUAAACAAAAAAAAcwgQCq17TmgZVJSrUHebzlSk8pfZk9j6nl2Gi5azxh6Ol1kURFFccPVrLupOMk4zi7ThJOMovrTOaYxwl60TExmJzDw4/4y1OO2XSf1Yre+1290aYzVLttzFmN0vHDAzjK2q5LirJekymmWf/ACqKvLDJYfCqEEt93KXa3d/iZOSqvM5Y3TmK2Uo9Tn+SLDbap+0wzjdZmTdh7dDaPqYmvToU9s3nN+BFZuT6kvy4ki3unEMbuqixbmuvi+o6TxscBQo06UU1GOrBSb72KSzttbudVdfdxGHzemsTq7ldVc/+yyGisdHEUIVYq2tfWjt1ZLJozoq3Rly6izNm5NE+T1mTS6cXXVOnKb8FZLi9yEziGy1bm5XFLXNA6bq18fUpa2tSVKcnkkoyjKKvHqza8hoormqufR6mt0lu1p6aojE5/uW0m946AAgBCgAAAAAAAAA5hAARUA8OldE0sTG1RWmk1CrHKpC/B711PIxroiqMS6NPqa7FWaeXp5S0etoqrg21XjdSdo145wmvBX1X1dbOObU0Q9//AJdGpnNE/T+81uYjpxeIVKnKb3bFxe5BlRTNU4anUm5ScpZuTbbK9CIxwRAfTPg+0P3HD84qK1XEpON9saPgr/t339vA6rVOIy+b7U1PeXO7p5U/q7+WkejRla6vOOxN3yasn5TG9HJl2XVxqjo4cha3QxNJ7YVIzte9lKNv0CxPCYXtaj3qKvWMfg2g3vIa9yvr2pKCk4+HJp2aS2fmab88MPV7Lt+9NeM+TH/B/h1/M1k21eFKLaz+dLPftgY6eOctvbFzjRR9f7+bcToeKgAABAAAAUAgAAAAOYRAAFIoBxqU4yi4zSlGSs4ySaa4NBYmYnMNb0lyYSTlhMuNCUui/sSfe9jy7DTXZzxpenY7Qnld/H+Wg8oZzVXuU4yg4K7jNOLbe+3DrRzTGOEve00UzRuic5YoOhmuSehnjMVCMv8AhpvXrdcV4Pldl2X4GdujdLi12q7i3OOc8n11LzLYdj5NieVNJSwsm03qThJWu3n0d32jXdjNLu7Pqxe6w1rkxie5Y2Cfe1lKk3sWttj5bq3lNFudtb1tfb7zTzPnHFvh1vm2icq8XrzqWeV2lZPvY5bdiWRyXZzL6XQWtluP7zbByOw3c8BRv31W9aW7Kb6P+uqdFqMUw8ftG5vv1Y8uH4M177jY4IUjJAAEAAAAAAAAAAOZWKAAKAIoAA8mktG0MTDUxFONSO6/fRfGMtqfYSqmJ5t1m/cs1bqJw0TTPISrTbnhH3alm+5y1VWjwtsU/R5TRVZnye5Y7XoqjF33Z9fL/TbOS+h+aYdRlbu1R69ZrPpbop70ll234m6ijbDx9Zqe/uZjlHJl2jNyOrFUVUpTpvZOLjfg7ZPzkmMwzt1zRVFXpL546ElKMllUjLJ74yTX4M4pji+oprjbMeU/u3WWlYvDqomlUnFdC+cZPb5uJ17805eDGkqi7NM8onm0fSEdepCF7OrOEHL5qbWfYld26jl83vxOKZn0h9EwtWnKKVKSlGCUVqvYksl1HZExPJ8vcoroq9+MS7itYgQA81TuGQQAAAAAAAAAHMrEAgFAACKAUABLFCxFLAaVpOio4vEJbNfW7HKKk/S35zlqj3pfQ6ardYoz6fo81ab2J+cxmZbqYp5yw2LUlVTTd4fmjXLpjGGU5O6aWHrTU4ykpwV1FrJp7XftZst17ZlyazSTfpjExGG+YTEQq04VKecJq649afXfLyHXE5jMPnblE0VTTVzh2mTAAAQgAAAAoAAAEA7AxAAACXAAUiqgAAABAr5/pnEy51iFnlVmr7rJ2W3bkjlr8UvptLTEWaOjyxrJb49mt+lmDdMOMEpOTeV2YrPDg82SctXe7sjLLe+R7vgKX2q9/vZHZa8MPne0P+xV9P0Zk2OJAAEAAAIAKBAKAAg5lYAUAAAIBQqkFAARtDKxEl1xGYXE+j59p1R5xWz/AKk72y3nJXzl9Jpc91T0YedS++660vZMHTHB1V61ou2RFjm8lPEuN3cuGfCX1DkhFrR2Eb2yhKf985SX4nXRGKYfL62rdfrn72XuZubAEQABAAAAAAAAAHMrEAgABcAACqQUDpxlRxpVZLbCnUku1RbRKpxEy2W6YqrpifWHyXEYl1ZupVWvUla8m5XZ5cznm+wopiinbTwhxVRbox/2/cmIZcXPuztsVl2mW6WO2HF1F81f7fuN0myHGWq9sIvyz9obpNkODpU3k4K3bU9ou+o2O5SVrKKyslnP9zHDKODlSrOEtaCUZLenK/4kgmN0Ylv3JDG1a2HnKtLXlGq4xeWUVCLt6Wd+nqmaZy+b7StUW7sRRGODOm95yAAAEAAAAAAB2FYIFAIAAALhVuBSDzaT+T4jxNb1GY1+GW6x8WnrD5IvfI8x9iNe9iBZ+6AvlZQ8/oIq27fQELdoEt1sDfOQfySp4+fqQO7TeGer57tb40dP5bKdDykAgACAAAAAAA7SsECoAAAAqAUC3IPLpZ2wuJ8TW9RmNzwy3aaM3qOsPkyZ5b7FbgW7Cpn72AoC/aELhQDfOQnySfj5+pA7tN4Pq+c7W+NHT+WxnQ8tAIAAAAAAAFAO0rWgVGAAgAKlwLcCkHk0u/5XE+Jq+ozC54Jb9L8ajrD5QeY+wAqgUBcgFRAp77wN85CfJJ+Pn6sDu03g+r5ztb40dGxtnQ8xLgS4FuAABEABQAB2XKwLgS4EuAuBGyKALgVMDyaYf8pifE1fUZhc8E9HRpfjUdYfKlbh+J5j7BURVRUPfYQAoBGAKN95D/I5eOqerE7tN4Hzfa3x46R+7YLnQ8xLgAFwFwFwLcAAuAuB6eay4oyw07zmsuKGF3wc1lxXpGDdCc0lxXpGDdC80lxXpG03QnNJcV6Rg3nNHxXpG03nNHxXpGDec0fFekbTe8mmsM1hMS7r/grcfmM13Y9yro6dJV/nt9YfJtU8p9mWBAA8gU8gQv1ARgLgb/yDpOWDln/XqerE9DTR7j5rtecX46R+7Y+bPijow8rcc3fEYNxzd8UMG45u+KGF3nN3xQwb05u+KGDec3fFDBvObvihg3nN3xQwbzm74oYN7JWNjnQKtgAAAAsQLARgeDTnyTFeIreozXd8FXR06T49vrH6vjiPIfcLcAwJcCX6wFwFwI2B9E+D+X8lLx9T1YHoaXwfV8x2x8eOkfu2fXR0vJTXQDXQQ1kA1ihrANZANYBrALge2xk1lgJYBYC2AWAWCpYDiyKx+m/kuK8RX9Rmu54J6OnS/Go6w+PHkPt5GBxuAuEGwJcChUv2lRunIuT5rLx0/Vidun8L5/tWP80dP5bFGT4vznRDypw53fErHgaz4lOC6z4g4Gs+LCcF1nxYOBrPiDEGs+LBiDWfEGIXWfEJiGdNrmLALAytgZLAWwMlgFgZSwWJdWIw8KkJQmrwnGUZK7V4tWayJNMTGGVNdVMxMc4a5LkHo5/0qn+TifbNXcW/R3e1NTP23B8gdHfRVP8AJxXtjuLfoe0tT88n8CaPX9Kf+RiX+sncUei+0tR88p/A+A+hf32I9odxR6HtHUfPKPkTgPoX99X9odxR6HtHUfPKPkVgfoX99X9odxR6HtC/88p/BWB+hf32I9odzR6L7Q1HzyfwVgfoX99iPaHc0eie0NR88shgNCUKENSjDVi25Na05ZvfdtvcZU24p5Q03NTcuTmucvXzVcDLDVulebLgMJuObrgMG45t1Fwbjm3UMG45t1Ewbjmwwbjm5cG45uMG5O4DBuZUyaAAAAAUIFAgAQKlgqAAqWIZRxBlNULk1QZTVBlNUGTVBk1QZNUGTVBksDK2AWAmqDI4gTVA9BWAAAACihAAQAAHFhkgAAAZBAoBAkgVAAFAAkCDDJAAQYVAP//Z'
    
})


box.addEventListener('mouseout',function (params) {
    box.src='data:image/jpeg;base64,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'
})