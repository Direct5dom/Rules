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
}("+Auto Switch Blacklist", {
    "+Auto Switch Blacklist": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)msauth\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)live\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)bing\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)hdslb\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)bilibili\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)steamstatic\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)discord\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ebaystatic\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ebay\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)nyaa\.si$/.test(host)) return "+proxy";
        if (/(?:^|\.)threejs\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)localhost$/.test(host)) return "DIRECT";
        if (/(?:^|\.)google\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)sinaimg\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)chrome\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)thingiverse\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)de17a\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)reddit\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)mouto\.org$/.test(host)) return "DIRECT";
        if (/(?:^|\.)steampowered\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)vcb-s\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)renzhe\.cloud$/.test(host)) return "+proxy";
        if (/(?:^|\.)github\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)avatars\.githubusercontent\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)openai\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)lollipopchainsaw\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)tiqcdn\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)doubleclick\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)v2ex\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googlevideo\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)telegram\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)bit\.ly$/.test(host)) return "+proxy";
        if (/(?:^|\.)fonts\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)twitchcdn\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)twitch\.tv$/.test(host)) return "+proxy";
        if (/(?:^|\.)twimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)github\.io$/.test(host)) return "+proxy";
        if (/(?:^|\.)steamgriddb\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)azurewebsites\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)gamegrid\.azurewebsites\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)alicdn\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)steamcommunity\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)t\.me$/.test(host)) return "+proxy";
        if (/(?:^|\.)qpic\.cn$/.test(host)) return "+proxy";
        if (/(?:^|\.)statsy\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)discordapp\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)discordapp\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)discord\.gg$/.test(host)) return "+proxy";
        if (/(?:^|\.)archive\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)tpddns\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)bilivideo\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)biliapi\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)direct5dom\.github\.io$/.test(host)) return "+proxy";
        if (/(?:^|\.)licensebuttons\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)googlesyndication\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)creativecommons\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)hikami\.moe$/.test(host)) return "+proxy";
        if (/(?:^|\.)jsdelivr\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)loli\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)quora\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)microsoft\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)msecnd\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)labondemand\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)list-manage\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)office\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)lijit\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)bidtheatre\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)optimizely\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)nocookie\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)mathtag\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)fastclick\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)anyclip\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)wsimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)piratesofvenusmovie\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)wikipedia\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)amazon\.dev$/.test(host)) return "+proxy";
        if (/(?:^|\.)ad\.gt$/.test(host)) return "+proxy";
        if (/(?:^|\.)scorecardresearch\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)media\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)adnxs\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)imrworldwide\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)fandom\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)fastly-insights\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)pubmatic\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)rubiconproject\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)casalemedia\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)yahoo\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)wikia-services\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)dolfincdnx\.cn$/.test(host)) return "+proxy";
        if (/(?:^|\.)eccdnx\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)disquscdn\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)acm\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)redditstatic\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)redditmedia\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)redd\.it$/.test(host)) return "+proxy";
        if (/(?:^|\.)wikimedia\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)dmhy\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)crwdcntrl\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)pinterest\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)pinimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)evidon\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)quoracdn\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)hotjar\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)slidesharecdn\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)taboola\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)magisto\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)tiktok\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)vimeocdn\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)wakatime\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)themoviedb\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)zimuku\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)kamigami\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)bangumi\.moe$/.test(host)) return "+proxy";
        if (/(?:^|\.)mikanani\.me$/.test(host)) return "+proxy";
        if (/(?:^|\.)abtasty\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ea\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)typekit\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)ads-twitter\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ttvnw\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)nr-data\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)soundcloud\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)sstatic\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)azureedge\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)spotifycdn\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)fbcdn\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)app\.link$/.test(host)) return "+proxy";
        if (/(?:^|\.)steamdb\.info$/.test(host)) return "+proxy";
        if (/(?:^|\.)akamaized\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)blz-contentstack\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)awmdelivery\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)realsrv\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ubi\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)gog\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)gog-statics\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)everesttech\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)adform\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)trafficroots\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)w55c\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)indexww\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)amazon-adsystem\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)tapad\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)openx\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)disqus\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)1rx\.io$/.test(host)) return "+proxy";
        if (/(?:^|\.)rlcdn\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)buysellads\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)steamstat\.us$/.test(host)) return "+proxy";
        if (/(?:^|\.)dka575ofm4ao0\.cloudfront\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)rsms\.me$/.test(host)) return "+proxy";
        if (/(?:^|\.)gravatar\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)imgur\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ajax\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)akamaihd\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)jnn-pa\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)raw\.githubusercontent\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)raws\.dev$/.test(host)) return "+proxy";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)google\.com\.hk$/.test(host)) return "+proxy";
        if (/(?:^|\.)t\.co$/.test(host)) return "+proxy";
        if (/(?:^|\.)spotify\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)instagram\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)thepiratebay\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)vimeo\.com$/.test(host)) return "+proxy";
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 192.168.0.3:15733; SOCKS 192.168.0.3:15733";
    }
});