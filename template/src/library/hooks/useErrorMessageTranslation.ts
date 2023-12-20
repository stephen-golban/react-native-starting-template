import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export default function useErrorMessageTranslation(msg?: string) {
  const [t] = useTranslation();

  const parsed = useMemo<ValidateMessageObject | undefined>(() => {
    if (!msg) {
      return undefined;
    }

    try {
      return JSON.parse(msg);
    } catch {
      return undefined;
    }
  }, [msg]);

  return useMemo<string | undefined>(() => {
    if (!parsed && typeof msg === 'string') {
      return t(msg);
    }

    if (!parsed) {
      return undefined;
    }

    const optionsTx: Record<string, string> = {};

    if (parsed.optionsTx) {
      Object.keys(parsed.optionsTx).forEach(key => {
        optionsTx[key] = t(String((parsed.optionsTx as Record<string, string | number>)[key]));
      });
    }

    return t(parsed.keyT, { ...(parsed.options ?? {}), ...optionsTx });
  }, [parsed, t, msg]);
}
