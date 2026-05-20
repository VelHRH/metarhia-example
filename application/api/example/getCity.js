({
    access: 'public',

    parameters: 'CityInput',

    returns: 'City',

    async method({ cityId }) {
      return { name: 'Milan', area: 1285, region: 'Lazio', cityId };
    },
});
