export const getPlans = (t) => [
    {
        period: t('first.period'),
        price: t('first.price'),
        support: t('one'),
        server: t('two'),
        channels: t('three'),
        films: t('four'),
        devices: t('five'),
        update: t('six'),
        best: t('seven'),
    },
    {
        period: t('second.period'),
        price: t('second.price'),
        support: t('one'),
        server: t('two'),
        channels: t('three'),
        films: t('four'),
        devices: t('five'),
        update: t('six'),
        best: t('seven'),
        bonus: t('second.extra')
    },
    {
        period: t('third.period'),
        price: t('third.price'),
        support: t('one'),
        server: t('two'),
        channels: t('three'),
        films: t('four'),
        devices: t('five'),
        update: t('six'),
        best: t('seven')
    }
];

export const plans = (t) =>  [
    {
        id: "1-month",
        name: t('month'),
        price: {
            [t('devices.single')]: 12.99,
            [t('devices.multiple')]: 21.99,
        },
        features: [
            t('one'),
            t('two'),
            t('three'),
            t('four'),
            t('five'),
            t('six'),
            t('seven'),

        ],
        cta: t('button'),
        months: {
            [t('devices.single')]: 1,
            [t('devices.multiple')]: 12,
        },
        devices: t('devices.two'),
        bonus:t('bonus.one'), 

    },
    {
        id: "12-months",
        name: t('month'),
        price: {
            [t('devices.single')]: 49.99,
            [t('devices.multiple')]: 79.99,
        },
        features: [
            t('one'),
            t('two'),
            t('three'),
            t('four'),
            t('five'),
            t('six'),
            t('seven'),
        ],
        cta: t('button'),
        popular: true,
        devices: t('devices.three'),
        months: {
            [t('devices.single')]: 12,
            [t('devices.multiple')]: 12,
        },
        bonus:t('bonus.two'), 
    },
    {
        id: "6-months",
        name: t('months'),
        price: {
            [t('devices.single')]: 34.99,
            [t('devices.multiple')]: 59.99,
        },
        features: [
            t('one'),
            t('two'),
            t('three'),
            t('four'),
            t('five'),
            t('six'),
            t('seven'),
        ],
        cta: t('button'),
        year: "12 months",
        devices: t('devices.four'),
        months: {
            [t('devices.single')]: 6,
            [t('devices.multiple')]: 12,
        },
        bonus:t('bonus.three'), 

    },

]
