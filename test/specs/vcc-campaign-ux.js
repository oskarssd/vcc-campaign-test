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
});
