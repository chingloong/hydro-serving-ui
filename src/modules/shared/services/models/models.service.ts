import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpService } from '@shared/services/http/_index';
import { Model } from '@shared/_index';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ModelsService {
    baseAPIUrl: string;
    baseUIUrl: string;

    constructor(
        private http: HttpService
    ) {
        this.baseAPIUrl = `${environment.apiUrl}/model`;
        this.baseUIUrl = `${environment.uiUrl}/model`;
    }

    getModels() {
        return this.http.get(`${this.baseUIUrl}/withInfo`)
            .map((res: Response): any => {
                return res.json();
            });
    }

    getModelWithInfo(id: string) {
        return this.http.get(`${this.baseUIUrl}/withInfo/${id}`)
            .map((res: Response): any => {
                return res.json();
            });

    }

    buildModel(options): Observable<any> {
        const updateModelUrl = `${this.baseUIUrl}/build`;
        return this.http.post(updateModelUrl, options)
            .map((res: Response): any => {
                return res.json();
            });
    }

    addModel(model: Model) {
        return this.http.post(this.baseAPIUrl, model);
    }

    deleteModel(id: string) {
        return this.http.delete(`${this.baseAPIUrl}/${id}`);
    }

}