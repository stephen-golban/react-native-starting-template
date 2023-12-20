import { Alert, Platform } from 'react-native';

import { MMKV_KEY } from '../constants';
import { remove } from '@library/storage';
import { I18nKeys } from '@library/i18n/locales';
import { translate } from '@library/i18n/translate';

type TypesBase = 'bigint' | 'boolean' | 'function' | 'number' | 'object' | 'string' | 'symbol' | 'undefined';

export const onShowErrorBase = (msg: string) => {
  Alert.alert(msg);
};

export const onCheckType = (source: any, type: TypesBase): source is TypesBase => {
  return typeof source === type;
};

export const checkKeyInObject = (T: Record<string, unknown>, key: string) => {
  return Object.keys(T).includes(key);
};

export const propsToStyle = (arrStyle: Array<any>) => {
  return arrStyle.filter(x => x !== undefined && !Object.values(x).some(v => v === undefined));
};

export const execFunc = <Fn extends (...args: any[]) => any>(func?: Fn, ...args: Parameters<Fn>) => {
  if (onCheckType(func, 'function')) {
    func(...args);
  }
};

export const isIos = Platform.OS === 'ios';

export const logout = () => {
  // dispatch(appActions.logout());

  remove(MMKV_KEY.APP_TOKEN);
};

export const handleErrorApi = (status: number) => {
  const result = { status: false, code: status, msg: '' };

  if (status > 505) {
    result.msg = translate('error:server_error');

    return result;
  }

  if (status < 500 && status >= 418) {
    result.msg = translate('error:error_on_request');

    return result;
  }

  result.msg = translate(('error:' + status) as I18nKeys);

  return result;
};

export const sleep = (ms: number = 1000) => new Promise(r => setTimeout(r as any, ms));
