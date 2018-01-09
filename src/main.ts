import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppModule } from './app.module';

if (module.hot) {
    if (module.hot) {
        module.hot.accept();
        console.log(module.exports);
    }
}

platformBrowserDynamic().bootstrapModule(AppModule);
