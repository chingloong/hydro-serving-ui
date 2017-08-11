import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModelStore } from '@stores/model.store';
import { BuildModelService } from '@services/build-model.service';
import { Model } from '@models/model';
import { HttpRuntimeTypesService } from '@services/http-runtime-types.service';
import { RuntimeType } from '@models/runtime-type';
import { DialogModelBuildComponent, injectableModelOptions } from '@components/dialogs/dialog-model-build/dialog-model-build.component';
import { MdlDialogService } from '@angular-mdl/core';

@Component({
  selector: 'hydro-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss'],
  providers: [BuildModelService],
  encapsulation: ViewEncapsulation.None
})
export class ModelsListComponent implements OnInit {
  public models: Model[];
  public runtimeTypes: RuntimeType[];
  public currentRuntimeType: RuntimeType;
  private modelOptions: object;

  constructor(
    private modelStore: ModelStore,
    private buildModelService: BuildModelService,
    private httpRuntimeTypesService: HttpRuntimeTypesService,
    public dialog: MdlDialogService
  ) {
    this.modelOptions = {modelId: 1, version: 'version'};
  }

  ngOnInit() {
    this.modelStore.getAll();
    this.modelStore.items.subscribe((models) => {
      this.models = models;
      console.log(models);
    });

    this.httpRuntimeTypesService.getAll().subscribe((runtimeType) => {
      this.runtimeTypes = runtimeType;
    });
  }

  buildModel(modelOptions) {

    this.dialog.showCustomDialog({
      component: DialogModelBuildComponent,
      styles: {'width': '800px', 'min-height': '85%'},
      classes: 'job-logs--dialog',
      isModal: true,
      clickOutsideToClose: true,
      enterTransitionDuration: 400,
      leaveTransitionDuration: 400,
      providers: [{provide: injectableModelOptions, useValue: modelOptions}],
    });
    // console.log(modelOptions);
    // this.buildModelService.build(modelOptions).subscribe((modelRuntime) => {
    //   let model = this.models.find((item) => item.id === modelRuntime.modelId);
    //   model.lastModelRuntime = modelRuntime;
    // });
  }

}
