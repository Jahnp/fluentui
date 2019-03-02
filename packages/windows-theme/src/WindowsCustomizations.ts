import { WindowsTheme } from './windows/WindowsTheme';
import { WindowsStyles } from './windows/WindowsStyles';
import { ICustomizations } from 'office-ui-fabric-react';
import { addVariants } from '@uifabric/variants';

export const WindowsCustomizations: ICustomizations = {
  settings: {
    theme: { ...WindowsTheme }
  },
  scopedSettings: { ...WindowsStyles }
};

addVariants(WindowsCustomizations.settings.theme);
