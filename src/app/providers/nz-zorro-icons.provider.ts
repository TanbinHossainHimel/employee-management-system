import {EnvironmentProviders, importProvidersFrom} from '@angular/core';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {IconDefinition} from '@ant-design/icons-angular';
import {
  UserOutline,
  DashboardOutline,
  UploadOutline
} from '@ant-design/icons-angular/icons';


const icons: IconDefinition[] = [
  UserOutline,
  DashboardOutline,
  UploadOutline
];

export function provideNzIcons(): EnvironmentProviders {
  return importProvidersFrom(NzIconModule.forRoot(icons));
}
