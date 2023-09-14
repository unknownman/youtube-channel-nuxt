function useDate (publish) {
    return 'a';
}

function useDay (currentDate = new Date()) {
    try {
        var sp = Date.parse(currentDate);
        var p = new Intl.DateTimeFormat(useRuntimeConfig().iso, {
            weekday: 'long',
        }).format(sp);
    } catch (e) {
        console.log(e);
    }
    return p;
}

function useDaynum (currentDate = new Date()) {
    try {
        var sp = Date.parse(currentDate);
        var p = new Intl.DateTimeFormat(useRuntimeConfig().iso, {
            day: 'numeric',
        }).format(sp);
    } catch (e) {
        console.log(e);
    }
    return p;
}

function useMonth (currentDate = new Date()) {
    try {
        var sp = Date.parse(currentDate);
        var p = new Intl.DateTimeFormat(useRuntimeConfig().iso, {
            month: 'long',
        }).format(sp);
    } catch (e) {
        console.log(e);
    }
    return p;
}

function useYear (currentDate = new Date()) {
    try {
        var sp = Date.parse(currentDate);
        var p = new Intl.DateTimeFormat(useRuntimeConfig().iso, {
            year: 'numeric',
        }).format(sp);
    } catch (e) {
        console.log(e);
    }
    return p;
}

function useTime (currentDate = new Date()) {
    try {
        var sp = Date.parse(currentDate);
        var p = new Intl.DateTimeFormat(useRuntimeConfig().iso, {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        }).format(sp);
    } catch (e) {
        console.log(e);
    }
    return p;
}

function useCurrentTime () {
    var d = new Date();
    return new Intl.DateTimeFormat(useRuntimeConfig().iso, {
        timeStyle: 'short',
    }).format(d);
}

function usePublishDate (pd) {
    if (!pd) return pd;
    try {
        var sp = Date.parse(pd);
        var p = new Intl.DateTimeFormat(useRuntimeConfig().public.iso, {
            hour: 'numeric',
            minute: 'numeric',
            year: '2-digit',
            month: 'short',
            day: 'numeric',
            timeZone: useRuntimeConfig().public.timeZone,
            calendar: useRuntimeConfig().public.calendar,
            numberingSystem: useRuntimeConfig().public.calendar,
        }).format(sp);
    } catch (e) {
        console.log(e);
    }
    return p;
}

function useAgo (pd) {
    if (!pd) return pd;
    const DIVISIONS = [
        { amount: 60, name: 'seconds' },
        { amount: 60, name: 'minutes' },
        { amount: 24, name: 'hours' },
        { amount: 7, name: 'days' },
        { amount: 4.34524, name: 'weeks' },
        { amount: 12, name: 'months' },
        { amount: Number.POSITIVE_INFINITY, name: 'years' },
    ];

    const formatter = new Intl.RelativeTimeFormat(useRuntimeConfig().iso, {
        numeric: 'auto',
    });
    try {
        var sp = Date.parse(pd);
        let duration = (sp - new Date()) / 1000;

        for (let i = 0; i <= DIVISIONS.length; i++) {
            const division = DIVISIONS[i];
            if (Math.abs(duration) < division.amount) {
                return formatter.format(Math.round(duration), division.name);
            }
            duration /= division.amount;
        }
    } catch (e) {
        console.log(e);
    }
    return false;
}

export {
    useDate,
    useDay,
    useDaynum,
    useMonth,
    useTime,
    useYear,
    useCurrentTime,
    usePublishDate,
    useAgo,
};
