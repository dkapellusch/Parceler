import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app.module';

if (module.hot) {
    module.hot.accept();
    console.log(module.exports);
        const oldRootElem = document.querySelector("app");
        const newRootElem = document.createElement("app");
        oldRootElem!.parentNode!.insertBefore(newRootElem, oldRootElem);
        platformBrowserDynamic()
            .bootstrapModule(AppModule)
            .then(appModule => {
                oldRootElem!.remove();
            });
} else {

    platformBrowserDynamic().bootstrapModule(AppModule);
}