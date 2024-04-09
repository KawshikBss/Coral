export const formatPathName = (pathname: string) => {
    var pathList = pathname.split("/").filter((item, index) => {
        return index !== 0;
    });
    var breadCrumbs = [{ name: "Home", href: "/" }];
    pathList.map((item) => {
        if (!item.includes("-")) {
            breadCrumbs.push({
                name: item.toUpperCase(),
                href:
                    breadCrumbs[breadCrumbs.length - 1].href.length > 1
                        ? breadCrumbs[breadCrumbs.length - 1].href
                        : "" + "/" + item,
            });
            return;
        }
        breadCrumbs.push({
            name: item.split("-").join(" ").toUpperCase(),
            href: breadCrumbs[breadCrumbs.length - 1].href + "/" + item,
        });
    });
    return breadCrumbs;
};
