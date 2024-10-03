import config from '@/config/index.ts';

export const isServer = typeof window === 'undefined';

export const isLive = config.NODE_ENV === 'production';

export const getBase64 = async (file: File): Promise<FileReader['result']> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  delay: number
): {
  (...args: Parameters<T>): void;
  cancel: () => void;
} {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const debouncedFn = (...args: Parameters<T>): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };

  debouncedFn.cancel = (): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return debouncedFn;
}

export const getCurrentLocation = async (): Promise<{
  latitude: number;
  longitude: number;
}> =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser.'));
    } else {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        error => {
          reject(new Error(`Error fetching location: ${error.message}`));
        }
      );
    }
  });
