const linkTester = require("../util/test-links")

describe('Volvo International Campaign Site', () => {
    it('should have the correct title', () => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        expect(browser).toHaveTitle('A million more | Volvo Cars');
        const acceptCookieBtn = $('.accept-cookies-button');
        browser.waitUntil(
            () => acceptCookieBtn.isDisplayed()
        );
        acceptCookieBtn.click();
    });

    it('should have a clickable main navigation logo', () => {
        const mainNavLogo = $('._SiteNav-ac._SiteNav-ae._SiteNav-af._SiteNav-ah._SiteNav-ai._SiteNav-ak._SiteNav-al._SiteNav-am._SiteNav-an._SiteNav-ap');
        expect(mainNavLogo).toExist();
        linkTester.verifyLink(mainNavLogo, '/intl');
    });

    it('should have a link to learn about car safety', () => {
        const carSafetyLink = $('.bc.cb.cc.cd.cs.do.fy.fz.ga.q.r>div>a');
        linkTester.verifyLink(carSafetyLink, '/car-safety');
    });

    it('should have a link to learn about safety heritage', () => {
        const safetyHeritageLink = $('.bc.cb.cc.cd.f.fc.hk.ji.jj.q>div>div>a');
        linkTester.verifyLink(safetyHeritageLink, '/safety-heritage');
    });

    it('should have a link to Volvo Recharge', () => {
        const rechargeLink = $('.bc.cb.cc.cd.f.ga.ho.p>div:nth-child(1)>a');
        linkTester.verifyLink(rechargeLink, '/recharge');
    });
});
