import {EnvironmentProviders, importProvidersFrom} from '@angular/core';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {IconDefinition} from '@ant-design/icons-angular';
import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  StepBackwardFill
} from '@ant-design/icons-angular/icons';


const icons: IconDefinition[] = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, StepBackwardFill];

export function provideNzIcons(): EnvironmentProviders {
  return importProvidersFrom(NzIconModule.forRoot(icons));
}
