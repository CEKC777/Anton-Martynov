// document.addEventListener('DOMContentLoaded', function () {
//     const links = document.querySelectorAll('a');
//     const fontList = [
//         'font1', 'font2', 'font3', 'font4'
//     ];

//     function applyRandomFont(link) {
//         const randomFontClass = fontList[Math.floor(Math.random() * fontList.length)];
//         link.classList = randomFontClass;
//     }

//     function changeFontsRepeatedly(link) {
//         let counter = 0;
//         const maxChanges = Math.floor(Math.random() * (10 - 5 + 1) + 5);
//         const intervalId = setInterval(() => {
//             applyRandomFont(link);
//             counter++;

//             if (counter === maxChanges) {
//                 clearInterval(intervalId);
//             }
//         }, 100); // Change every 100 milliseconds
//         return intervalId
//     }

//     links.forEach(link => {
//         let intervalId
//         if (link.id !== 'title') {
//             link.addEventListener('mouseenter', () => intervalId = changeFontsRepeatedly(link));
//             link.addEventListener('mouseleave', () => {
//                 clearInterval(intervalId)
//                 link.classList = []
//             });
//         }
//     });
// });