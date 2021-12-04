import { useState, useEffect } from 'react';

/** Hook that help to use geolocation browser API */
export const useGeolocation = (options?: PositionOptions) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<GeolocationPositionError>();
  const [position, setPosition] = useState<GeolocationPosition>();

  const successCallback: PositionCallback = (position: GeolocationPosition) => {
    setLoading(false);
    setPosition(position);
  };

  const errorCallback: PositionErrorCallback = (positionError: GeolocationPositionError) => {
    setLoading(false);
    setError(positionError);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);

    const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, options);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [options]);

  return { loading, error, position };
};
