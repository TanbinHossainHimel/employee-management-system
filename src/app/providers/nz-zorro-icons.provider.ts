import {EnvironmentProviders, importProvidersFrom} from '@angular/core';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {IconDefinition} from '@ant-design/icons-angular';
import {
  ProfileOutline,
  UserOutline,
  VideoCameraOutline
} from '@ant-design/icons-angular/icons';


const icons: IconDefinition[] = [
  ProfileOutline,
  UserOutline,
  VideoCameraOutline
];

export function provideNzIcons(): EnvironmentProviders {
  return importProvidersFrom(NzIconModule.forRoot(icons));
}
