import { Component, OnInit } from '@angular/core';
import { AppState } from '@core/public-api';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/public-api';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aggregations } from '../../custom-nodes-config.models';

@Component({
  selector: 'tb-iotop-get-telemetry-and-aggregate',
  templateUrl: './iotop-get-telemetry-and-aggregate.component.html',
  styleUrls: []
})

export class IotopGetTelemetryAndAggregateComponent extends RuleNodeConfigurationComponent {

  getTelemetryAndAggregateConfigForm: FormGroup;
  aggregateFunctions: string[];

  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
    this.aggregateFunctions = [
      Aggregations.AVG,
      Aggregations.MIN,
      Aggregations.MAX,
      Aggregations.SUM
    ]
  }

  protected configForm(): FormGroup {
    return this.getTelemetryAndAggregateConfigForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.getTelemetryAndAggregateConfigForm = this.fb.group({
      deviceRelationsQuery: [configuration ? configuration.deviceRelationsQuery : null, [Validators.required]],
      aggregateFunction: [configuration ? configuration.aggregateFunction : null, [Validators.required]],
      inputKey: [configuration ? configuration.inputKey : null, [Validators.required]],
      outputKey: [configuration ? configuration.outputKey : null, [Validators.required]]
    });
  }

}
