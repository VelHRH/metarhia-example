({
    access: 'public',

    parameters: {
        cityId: {
            type: 'string',
            length: {
                min: 3,
            },
        },
    },

    returns: {
        cityId: 'string',
        name: 'string',
        area: 'number',
        region: 'string',
    },

    async method({ cityId }) {
      return { name: 'Milan', area: 1285, region: 'Lazio', cityId };
    },
});
