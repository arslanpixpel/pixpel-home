interface menuList {
    id: number;
    title: string;
    show?: boolean;
}

interface verificationList {
    phone: string;
    gmail: string;
}

interface activityList_ {
    OS?: string;
    skill?: string;
    locate: string;
    level: string;
    time: string;
}

interface activityList {
    id: number;
    title: activityList_;
}

interface tableList_ {
    Pair: string;
    date: string;
    Type: string;
    Condition: string;
    Price: string;
    Price_under: string;
    Total: string;
    TotalPercent: string;
    Action: string;
}

interface tableList {
    id: number;
    title: tableList_;
}

export const menuList: menuList[] = [
    {
        id: 1,
        title: "SECURITY",
    },
    {
        id: 2,
        title: "SETTINGS",
    },
    {
        id: 3,
        title: "SECURITY",
    },
    {
        id: 4,
        title: "IDENTIFICATION",
    },
    {
        id: 5,
        title: "API SETUP",
    },
];

export const verificationList: verificationList = {
    phone: "+380994069504",
    gmail: "Hellomail@gmail.com",
};

export const tokenList: menuList[] = [
    {
        id: 1,
        title: "SPOT",
    },
    {
        id: 2,
        title: "FlAT",
    },
    {
        id: 3,
        title: "TOKEN",
    },
    {
        id: 4,
        title: "NFT",
    },
    {
        id: 5,
        title: "STAKING",
    },
];

export const securityList: menuList[] = [
    {
        id: 1,
        title: "Verify ID",
        show: true,
    },
    {
        id: 2,
        title: "2 Method Security",
        show: true,
    },
    {
        id: 3,
        title: "Anti-Fishing",
        show: true,
    },
    {
        id: 4,
        title: "Transfer Whitelist",
        show: false,
    },
];

export const activityList: activityList[] = [
    {
        id: 1,
        title: {
            skill: "web",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
    {
        id: 2,
        title: {
            skill: "web",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
    {
        id: 3,
        title: {
            skill: "web",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
    {
        id: 4,
        title: {
            skill: "web",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
];

export const devicesList: activityList[] = [
    {
        id: 1,
        title: {
            OS: "Safari V15.4 (Mac OS)",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
    {
        id: 2,
        title: {
            OS: "Ivashek",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
    {
        id: 3,
        title: {
            OS: "Safari V15.4 (Mac OS)",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
    {
        id: 4,
        title: {
            OS: "Safari V15.4 (Mac OS)",
            locate: "kiev, Ukraine",
            level: "112.093.54.107",
            time: "2022-04-20 21:04:45",
        },
    },
];

export const textList: activityList[] = [
    {
        id: 1,
        title: {
            OS: "Account activity Aug 22",
            locate: "Your deposit is now availabe for trading",
            level: "+$420",
            time: "",
        },
    },
    {
        id: 2,
        title: {
            OS: "Price Alert Aug 22",
            locate: "Litecoin(LTC) is up +6.68% to $56.66 in the last 11 hours",
            level: "$56.66",
            time: "+6.68%",
        },
    },
    {
        id: 3,
        title: {
            OS: "Price Alert Aug 22",
            locate: "Litecoin(LTC) is down -5.40% to $52.69 in the last 8 hours.",
            level: "$52.69",
            time: "-5.40%",
        },
    },
];

export const tableList: tableList[] = [
    {
        id: 1,
        title: {
            Pair: "PIXP/USDT",
            date: "18/04/2022",
            Type: "Limit/",
            Condition: "Sell",
            Price: "44.000",
            Price_under: "0",
            Total: "19",
            TotalPercent: "0.00%",
            Action: "Cancel",
        },
    },
    {
        id: 2,
        title: {
            Pair: "PIXP/USDT",
            date: "18/04/2022",
            Type: "Limit/",
            Condition: "Sell",
            Price: "44.000",
            Price_under: "0",
            Total: "19",
            TotalPercent: "0.00%",
            Action: "Cancel",
        },
    },
    {
        id: 3,
        title: {
            Pair: "PIXP/USDT",
            date: "18/04/2022",
            Type: "Limit/",
            Condition: "Sell",
            Price: "44.000",
            Price_under: "0",
            Total: "19",
            TotalPercent: "0.00%",
            Action: "Cancel",
        },
    },
    {
        id: 4,
        title: {
            Pair: "PIXP/USDT",
            date: "18/04/2022",
            Type: "Limit/",
            Condition: "Sell",
            Price: "44.000",
            Price_under: "0",
            Total: "19",
            TotalPercent: "0.00%",
            Action: "Cancel",
        },
    },
    {
        id: 5,
        title: {
            Pair: "PIXP/USDT",
            date: "18/04/2022",
            Type: "Limit/",
            Condition: "Sell",
            Price: "44.000",
            Price_under: "0",
            Total: "19",
            TotalPercent: "0.00%",
            Action: "Cancel",
        },
    },
];
