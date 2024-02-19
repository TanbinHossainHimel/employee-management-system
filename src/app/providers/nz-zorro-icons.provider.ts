import {EnvironmentProviders, importProvidersFrom} from '@angular/core';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {IconDefinition} from '@ant-design/icons-angular';
import {
  UserOutline,
  DashboardOutline,
  UploadOutline,
  HomeOutline,
  LogoutOutline,
  AuditOutline,
  TeamOutline,
  SettingOutline,
} from '@ant-design/icons-angular/icons';


const icons: IconDefinition[] = [
  UserOutline,
  DashboardOutline,
  UploadOutline,
  HomeOutline,
  LogoutOutline,
  AuditOutline,
  TeamOutline,
  SettingOutline,
];

export function provideNzIcons(): EnvironmentProviders {
  return importProvidersFrom(NzIconModule.forRoot(icons));
}
