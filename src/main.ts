// import './app.css'
// import App from './App.svelte';

// class MyApp extends Application<ApplicationOptions>{
//     activateListeners(html: JQuery<HTMLElement>): void {
//         this.component = new App({
//             target: html.get(0)
//         });
//     }
// }

// Hooks.once("ready", () => new MyApp({
//     template: "/modules/testytest/test.html",
//     title: "Testy Application"
// }).render(true));

Hooks.once("ready", () => console.log("TESTY TEST!"));

export {}