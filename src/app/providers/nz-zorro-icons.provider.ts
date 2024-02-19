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
  MailTwoTone
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
  MailTwoTone
];

export function provideNzIcons(): EnvironmentProviders {
  return importProvidersFrom(NzIconModule.forRoot(icons));
}
