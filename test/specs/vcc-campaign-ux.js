const linkTester = require("../util/test-links")

describe('Volvo International Campaign Site', () => {
    it('should have a query about cookies', () => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        const acceptCookieBtn = $('.accept-cookies-button');
        browser.waitUntil(
            () => acceptCookieBtn.isDisplayed()
        );
        expect(acceptCookieBtn).toBeClickable();
        acceptCookieBtn.click();
    });
    
    it('should have a clickable campaign video', () => {
        const watchStoryBtn = $('button.ae');
        expect(watchStoryBtn).toBeClickable();
    });
    
    // it('should have a product list carousel', () => {
    //     const carouselItem0 = $('#productListCarouselItem-0');
    //     expect(carouselItem0).toBeClickable();
    //     expect(carouselItem0).toHaveLinkContaining('/intl/v/cars/');
    // });
});
