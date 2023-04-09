const getPincodeFromLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser'));
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
              if (status === 'OK') {
                const addressComponents = results[0].address_components;
                const postalCode = addressComponents.find((component) => {
                  return component.types.includes('postal_code');
                });
                if (postalCode) {
                  resolve(postalCode.long_name);
                } else {
                  reject(new Error('Could not find postal code in location data'));
                }
              } else {
                reject(new Error(`Geocoder failed due to: ${status}`));
              }
            });
          },
          () => {
            reject(new Error('Unable to retrieve your location'));
          }
        );
      }
    });
  };
export default getPincodeFromLocation;  