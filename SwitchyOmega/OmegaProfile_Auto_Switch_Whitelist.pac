var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+Auto Switch Whitelist", {
    "+Auto Switch Whitelist": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)google\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)twimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)bing\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)douyinpic\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)byteimg\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)bilibili\.com$/.test(host)) return "DIRECT";
        if (/^118\.89\.204\.198$/.test(host)) return "DIRECT";
        if (/(?:^|\.)baidu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)vzuu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)zhimg\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)steamchina\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)zhihu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)weibocdn\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)weibo\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)sinaimg\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)sinajs\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)geetest\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)sina\.com\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)hdslb\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)tp-link\.com\.cn$/.test(host)) return "DIRECT";
        return "+proxy";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 192.168.0.3:15733; SOCKS 192.168.0.3:15733";
    }
});