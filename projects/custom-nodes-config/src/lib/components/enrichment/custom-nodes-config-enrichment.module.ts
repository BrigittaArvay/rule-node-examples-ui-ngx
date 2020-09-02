import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/public-api';
import { GetSumIntoMetadataConfigComponent } from './get-sum-into-metadata-config.component';
import { IotopGetTelemetryAndAggregateComponent } from './iotop-get-telemetry-and-aggregate.component';
import { DeviceRelationsQueryConfigComponent } from '../common/device-relations-query-config.component';

@NgModule({
  declarations: [
    GetSumIntoMetadataConfigComponent,
    IotopGetTelemetryAndAggregateComponent,
    DeviceRelationsQueryConfigComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GetSumIntoMetadataConfigComponent,
    IotopGetTelemetryAndAggregateComponent
  ]
})
export class CustomNodesConfigEnrichmentModule {
}
