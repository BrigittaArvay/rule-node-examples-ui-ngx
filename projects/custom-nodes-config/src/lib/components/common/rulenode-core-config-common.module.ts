import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/public-api';
import { HomeComponentsModule } from '@home/components/public-api';
import { DeviceRelationsQueryConfigComponent } from './device-relations-query-config.component';

@NgModule({
  declarations: [
    DeviceRelationsQueryConfigComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeComponentsModule
  ],
  exports: [
    DeviceRelationsQueryConfigComponent,
  ]
})
export class RulenodeCoreConfigCommonModule {
}
