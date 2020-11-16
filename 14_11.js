
// ПРИМЕР АЛГОРИТМА ДЕЙСТВИЙ
// insertElem - доступ, куда встраивать

// function(count)
// 1 - img
// 2 - a
// 3 - li

// 4 - ul

// 5 - div

// 6 - h2

// 7 - span
// 8 - p

// 9 - p

// 10 - input

// 11 - article

// встраиваем готовый article в insertElem

const divRef = document.querySelector('.insertElem')
const urls = ['https://i.pinimg.com/originals/c5/6c/27/c56c27f36080a8569e12c67a47c38122.jpg',
    'https://bugaga.ru/uploads/posts/1171283376_sinjaja_ptichka.jpg',
    'https://cs4.pikabu.ru/post_img/big/2016/06/05/6/1465117872193198640.jpg']

// createPost(urls,divRef)

// function createPost(array,innerPlace) {
    
//  const newItems = function createItems(arr) {
//     const items = []
//     for (let i=0; i < arr.length; i++){
//         const image = document.createElement('img')
//         image.setAttribute('src', array[i])
//         image.setAttribute('alt', 'fantastic birds')
//         image.setAttribute('width', '300')
//         image.setAttribute('height', '250')
//         image.style.margin = '10px'

//         const link = document.createElement('a')
//         link.setAttribute('href', '')

//         link.appendChild(image)

//         const item = document.createElement('li')
//         item.classList.add('list-item')
//         item.appendChild(link)

//         items.push(item)
        
        
//     }
//     return items
// }(array)
// // const newItems = createItems(array)

// const imglList = document.createElement('ul')
// imglList.style.listStyle = 'none'
//     imglList.style.display = 'flex'
//     imglList.style.justifyContent = 'space-around'


// imglList.append(...newItems)
// console.log(imglList);

// const imgWrapper = document.createElement('div')
// imgWrapper.style.display = 'flex';
//     imgWrapper.style.backgroundColor = 'tomato';
//     imgWrapper.style.justifyContent = 'center'

// imgWrapper.appendChild(imglList)
// console.log(imgWrapper);

// const title = document.createElement('h2')
//     title.textContent = 'NICE BIRDS'
//     title.style.textAlign = 'center'

// const firstP = document.createElement('p')
// firstP.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eius.'
//     firstP.style.textAlign = 'center'
    
// const dataSpan = document.createElement('span')
// dataSpan.textContent = '11.11.2020'
// const secondP = document.createElement('p')
// secondP.textContent = 'Magdegaben'

// secondP.appendChild(dataSpan)

// const input = document.createElement('input')
// input.setAttribute('type', 'checkbox')

// const article = document.createElement('article')

// article.append(title, firstP, imgWrapper, secondP, input)

// console.log(article);

//     innerPlace.appendChild(article);
// }

function createInnerPost(array, place) {
   const items = array.map(e => {
       return `<li class="list-item">
    <a href="">
    <img src="${e}" alt="" width="">
    </a>
    </li>`
   })


const article = function innerPost() {
   return `<article>
    <h2>MagicBirds</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eius.</p>
    <div style="display: flex; backgroundColor: tomato">
    <ul>
    ${items}
    </ul>
    </div>
    <p> Magdegaben
    <span>11.11.2020</span>
    </p>
    <input type="check-box">
    </article>`

}()
   return place.insertAdjacentHTML('afterbegin', article)  
    
}

createInnerPost(urls, divRef)
