import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ServicesRouterResolver, RedirectToServicesGuard } from '@shared/_index';

import { ServicesWrapperComponent, ServicesItemDetailComponent } from "./_index";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'services',
                component: ServicesWrapperComponent,
                children: [
                    {
                        path: ':id',
                        component: ServicesItemDetailComponent
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]

})
export class ServicesRoutingModule { }
