// 1) მოიძიეთ და დაიზეპირეთ HTTP status კოდები.
// მოვიძიე

// 2) გამოიყენე fetch() და .then() მეთოდი, რათა წამოიღო მომხმარებლების სია Api-დან: (https://jsonplaceholder.typicode.com/users).
//  დაბეჭდე კონსოლში მხოლოდ მომხმარებლების სახელი (name) და ელ-ფოსტა (email).
// let users = fetch("https://jsonplaceholder.typicode.com/users")

// users
//     .then((jsonData) => {
//         return jsonData.json()
//     })
//     .then((data) => {
//         data.forEach(element => {
//             console.log(`user name is ${element.name} and user email is ${element.email}`)
//         });
//     })

// 3) სცადე მონაცემების წამოღება არასწორი ლინკიდან (მაგ: https://jsonplaceholder.typicode.com/wrong-endpoint).
// გამოიყენე .catch() მეთოდი, რათა შეცდომა არ გაეპაროს პროგრამას და კონსოლში გამოიტანო ტექსტი: "დაფიქსირდა შეცდომა მონაცემების წამოღებისას".
// let users = fetch("https://jsonplaceholder.typicode.com/wrong-endpoint")

// users
//     .then((jsonData) => {
//         return jsonData.json()
//     })
//     .then((data) => {
//         data.forEach(element => {
//             console.log(`user name is ${element.name} and user email is ${element.email}`)
//         });
//     })
//     .catch(() => {
//         console.log("დაფიქსირდა შეცდომა მონაცემების წამოღებისას")
//     })

// 4) გამოიყენე Dog API (https://dog.ceo/api/breeds/image/random).
// წამოიღე სურათის ლინკი, შექმენი HTML-ში <img> თეგი და ეს ლინკი ჩაუსვი src ატრიბუტად, რომ სურათი ეკრანზე გამოჩნდეს.
// let img = document.getElementById("img")

// let randomImage = fetch("https://dog.ceo/api/breeds/image/random")

// randomImage
//     .then((jsonData) => {
//         return jsonData.json()
//     })
//     .then((data) => {
//         img.src = data.message
//     })

// 5) დაწერე ასინქრონული ფუნქცია (async/await), რომელიც წამოიღებს პოსტებს ლინკიდან: https://jsonplaceholder.typicode.com/posts.
// გაფილტრე მიღებული მასივი და კონსოლში დაბეჭდე მხოლოდ ის პოსტები, რომელთა userId არის 10-სა და 30-ს შორის.
// const getPosts = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//         const data = await response.json();

//         const filteredProducts = data.filter(post => post.userId >= 10 && post.userId <= 30);

//         console.log(filteredProducts);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getPosts();

// 6) https://jsonplaceholder.typicode.com/todos
// მოცემული API-დან წამოიღე დავალებების სია და ეკრანზე (HTML-ში) გამოიტანე სია (<ul>), სადაც შესრულებული დავალებები (completed: true) იქნება მწვანე ფერის, ხოლო შეუსრულებელი - წითელი.
// const container = document.getElementById("container");

// const getTasks = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos");

//         const data = await res.json();

//         return data;
//     } catch (err) {
//         console.log(err);
//     };
// };

// const renderTasks = async () => {
//     const tasks = await getTasks();

//     console.log(tasks);

//     tasks.forEach(task => {
//         const li = document.createElement("li");

//         li.innerHTML = `${task.title}`;

//         li.style.color = task.completed ? "green" : "red";

//         container.appendChild(li);
//     });
// };

// renderTasks();

// 7) ამოიღე ინფორმაცია კონკრეტულ მომხმარებელზე და მის პოსტებზე ერთდროულად. Promise.all- ის გამოყენებით დაელოდე ორივე request-ის დასრულებას და მხოლოდ ამის შემდეგ დაბეჭდე შედეგი.
// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/posts?userId=1
// let getInfo = async () => {
//     try {
//         const [user, posts] = await Promise.all([ fetch("https://jsonplaceholder.typicode.com/users/1"), fetch("https://jsonplaceholder.typicode.com/posts?userId=1") ]);

//         const data = await Promise.all([ user.json(), posts.json() ]);

//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// };

// getInfo();